const express = require('express');
const router = express.Router();
const db = require('../database');

// CRUD
// Create
router.post('/products', async (req, res) => {
  try {
    const { body } = req;
    if(!body.nombre || !body.precio || !body.categoria) {
      return res.status(400).send({ message: 'Debes ingresar "nombre", "precio" y "categoria"'});
    }
    const newDoc = await db.collection('products').add(body);
    res.status(201).send({ id: newDoc.id, message: 'Producto creado correctamente 👍'});
  } catch (error) {
    res.status(400).send({ message: 'Error creando producto 👎' })
  }
})

// Read all
router.get('/products', async (req, res) => {
  try {
    const data = await db.collection('products').get();
    if (data.docs.length === 0) res.status(200).send({ message: 'No hay productos en este momento' });
    const arrayData = await data.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    res.status(200).send(arrayData);
  } catch (error) {
    res.status(400).send({ message: 'Error en la búsqueda. 👎' });
  }
})

// Read one
router.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.collection('products').doc(id).get();
    if(!user.exists) res.status(404).send({ message: 'Producto no existe. 🔍'});
    res.status(200).send({ id: user.id, data: user.data() });
  } catch (error) {
    res.status(400).send({ message: 'Error en la búsqueda. 👎' , error})
  }
})

// Update
router.patch('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const user = await db.collection('products').doc(id).get();
    if(!user.exists) res.status(404).send({ message: 'Producto no existe. 🔍'});
    await db.collection('products').doc(id).update(body);
    res.status(200).send({ id: user.id, message: 'Producto modificado correctamente 👍'});
  } catch (error) {
    res.status(400).send({ message: 'Error modificando producto. 👎', error})
  }
})

// Delete
router.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.collection('products').doc(id).get();
    if(!user.exists) res.status(400).send({ message: 'Producto no existe. 🔍'});
    await db.collection('products').doc(id).delete();
    res.status(200).send({ message: 'Producto eliminado correctamente 👍'});
  } catch (error) {
    res.status(400).send({ message: 'Error eliminando producto. 👎', error})
  }
})

module.exports = router;
