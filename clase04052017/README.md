# Workshop NodeJs.

En este workshop se repasan conceptos que se estuvieron viendo en clases anteriores
como se programacion funciona, ES6, Express, Rutas, Api Rest, entre otros.

Se agrega realiza una pequeña app con express con persistencia a Sqllite3, aunque
no se profundize en los conceptos se puede ver que otras alternativas tecnologicas
hay para armar estos tipos de proyectos.

## Como levantar el Workshop.

Instalar herramientas para consola:


Para generar rapidamente Rest Apis

> npm install -g express-api

Para generar nuevos modelos de negocio.

> npm install -g sequelize-cli

Instalar dependencias

> npm install

Inicializar la db

> sequelize db:migrate

Arrancar el proyecto

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

### "/users/{id}/news"

- **GET** Devuelve el listado de news de un usuario
- **GET** + **id** Devuelve una news por su ID perteneciente a un usuario
- **POST** Crea una news para un usuario
- **PUT** + **id** Update de una news por ID
- **DELETE** + **id** Borra un news