# Proyecto React con Backend Express

Este proyecto consiste en una aplicación de **React** para el frontend y un servidor **Express** para el backend. El servidor maneja las solicitudes API, mientras que el frontend consume esos datos.

## Estructura del Proyecto

El proyecto está organizado en dos partes principales:

- **Backend (Express)**: En la carpeta `server`.
- **Frontend (React)**: En la carpeta `src`.

## Requisitos previos

Antes de empezar, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 16 o superior)
- **npm** (gestor de paquetes para Node.js)

## Configuración del Proyecto

### Backend (Express)

Navega a la carpeta `server/pages`.
    
    cd server/pages
 Instala las dependencias del backend utilizando npm.
 
    npm install
Inicia el servidor de backend.

    node server.js
El servidor se ejecutará en el `puerto 5001` (o el puerto configurado en server.js).

###  Frontend (React)
Regresa a la raíz del proyecto (donde está el package.json principal).

    cd ../..
Instala las dependencias del frontend utilizando npm.

    npm install
Inicia la aplicación React en el frontend.

    npm start
Esto abrirá la aplicación React en http://localhost:3000 (o el puerto configurado por defecto).

 ### Comunicación entre Frontend y Backend
El frontend se comunica con el backend a través de las rutas API definidas en el servidor Express. Cuando se inicie tanto el backend como el frontend, el frontend podrá hacer solicitudes a las rutas API del backend, por ejemplo, para obtener datos de la tabla.

#### CORS
Asegúrate de que el backend tenga habilitado CORS para permitir que el frontend pueda hacer solicitudes a través de diferentes puertos. Si el backend está configurado correctamente, deberías poder hacer las solicitudes sin problemas.

####  Notas
El frontend y el backend se ejecutan de manera independiente, por lo que `ambos deben estar en ejecución para que el sistema funcione correctamente`.
Si necesitas cambiar los puertos o configuraciones de las rutas, asegúrate de modificar ambos el servidor (`server.js`) y el frontend (`actions.js`) para que estén sincronizados.
####  Mejoras
Debido a la falta de experiencia en el desarrollo de backend con Node.js y Express, actualmente solo he implementado el método GET para obtener los datos de la tabla desde el backend. Sin embargo, hay varias áreas que pueden mejorarse y ampliarse:

Métodos HTTP adicionales:

Implementar métodos POST, PUT y DELETE para permitir la creación, actualización y eliminación de registros desde el frontend.

- Agregar validaciones de entrada y manejo adecuado de errores.
- Implementar un sistema de autenticación.
- Actualmente, los datos no se almacenan de manera persistente. Se podrían integrar bases de datos, en este caso, por ejemplo postgreSQL.






