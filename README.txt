//

Este es un archivo para correr el docker en donde se encuentra la aplicación solicitada. Las versiones usadas son:

docker version 18.06.1-ce, build e68fc7a
node version v8.12.0

Para ejecutar el app fuera del docker se tiene que ejecutar el siguiente comando:

$ cd <ruta_al_sig_directorio>/NodeApp
$ node app.js

Para ejecutar la aplicacion dentro del docker es necesario correr los siguientes comandos:

$ cd <ruta_al_sig_directorio>/NodeApp

$ docker-compose build

$ docker-compose up

Posteriormente se puede verificar la respuesta en formato json en la url:

http://localhost:3000
