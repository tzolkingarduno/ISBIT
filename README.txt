This file serves as a quick guide for using the NodeJS app contained in the app.js file. Such app computes the gas price of a smart contract deployed in the Ethereum Ropsten Testnet. The connection to the testnet is achieved by using the Infura remote node service. Next, it displays the calculation in json format. The frameworks used for such app are express and web3.


Versions used for the app and container are:

docker version 18.06.1-ce, build e68fc7a
node version v8.12.0

To execute the app by itself type in the following command on your bash shell.

$ cd <path_to_dir>/NodeApp
$ node app.js

Such app will respond on the url:     http://localhost:3000

If the app is to be run using the docker container, then the following command have to be followed.


$ cd <path_to_dir>/NodeApp

$ docker-compose build

$ docker-compose up

Finally the app will respond to the url:      http://localhost:3000
