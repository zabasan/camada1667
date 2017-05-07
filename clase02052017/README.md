# Ejemplo Api Restfull para Camada1667

Estos pasos son solo para generar un proyecto
de cero.

## Primeros pasos para generar el proyecto:

> mkdir myapi

> cd myapi

> npm init

## Seguir pasos de generacion proyecto una listo
el package.json.

> npm install express --save 

> npm install body-parser --save 


# Si clonamos el proyectto desde el repo Instalar las dependencias

Estos pasos son por si clonamos el repo y lo queremos usar directamente.

> npm install

> npm start

## Rutas

### "/"

- **GET** Devuelve las rutas del proyecto.

### "/users/"

- **GET** Devuelve el listado de Usuarios
- **GET** + **id** Devuelve un usario por su ID
- **POST** Crea un usuario
- **PUT** + **id** Update de un usuario por ID
- **DELETE** + **id** Borra un Usuario

### "/users/{id}/items"

- **GET** Devuelve el listado de Items de un usuario
- **GET** + **id** Devuelve un Item por su ID perteneciente a un usuario
- **POST** Crea un Item para un usuario
- **PUT** + **id** Update de un item por ID
- **DELETE** + **id** Borra un item
