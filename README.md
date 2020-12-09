# API Batch 47

API creada para el último batch del año 😷💻.

[http://api-firebase-b47.herokuapp.com/docs](http://api-firebase-b47.herokuapp.com/docs)

## Instalación

1. Usa git clone:

```bash
git clone https://github.com/pedroagont/api-firebase-b47.git
```

2. Cámbiate a la carpeta del proyecto recién creada por git:

```bash
cd api-firebase-b47
```

3. Usa npm para instalar las dependencias:

```bash
npm install
```

## Uso

Puedes correr el servidor usando npm start, que correrá el script start del package.json:

```bash
npm start
```

Para correrlo en modo desarrollo puedes usar nodemon y así evitar detener el proceso en cada cambio que realices:

```bash
nodemon server
```

Para detener el proceso simplemente presiona en tu teclado ```Ctrl+C```

## Contribuir
Los pull requests son bienvenidos.

Por ejemplo, puedes agregar una ruta de la API que responda a tu nombre mediante los siguientes pasos:

1. Crea una nueva rama con tu nombre usando:

```bash
git branch rama-ejemplo
```

2. Ahora cámbiate a tu nueva rama con:

```bash
git checkout rama-ejemplo
```

*(También es posible realizar los dos pasos anteriores en un solo comando utilizando ```git checkout -b rama-ejemplo```)*

3. Crea un nuevo archivo en la carpeta router con tu nombre, por ejemplo **/router/RutaEjemplo.js** que contenga lo siguiente:

```nodejs
const express = require('express');
const router = express.Router();

router.get('/ruta-ejemplo', (req, res) => {
  res.send('Endpoint del ejemplo! 👨🏻‍🏫');
})

module.exports = router;

```

4. Una vez creada tu ruta recuerda agregarla en el **index.js** de la misma carpeta router

```nodejs
router.use(require('./RutaEjemplo'))
```

5. Verifica que el endpoint responda desde tu navegador:

```bash
http://localhost:3000/api/v1/ruta-ejemplo
```

6. Sube tus cambios al repositorio con ```git push``` y desde GitHub abre un nuevo Pull Request a la rama ```master```

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
