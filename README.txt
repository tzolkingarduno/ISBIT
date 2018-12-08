This file serves as a quick guide for using the NodeJS app contained in the app.js file. Such app computes the gas price of a smart contract deployed in the Ethereum Ropsten Testnet. The connection to the testnet is achieved by using the Infura remote node service. Next, it displays the calculation in json format. The frameworks used for such app are express and web3.


Versions used for the app and container are:

docker version 18.03.0
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


If the user wants to use a container orchestrator to deploy the app, it is possible to do so using Kubernetes, installed version is v1.10.0, which is accesible with the command kubectl. The cluster creation is achieved using Minikube v0.30.0 and the virtual machine used is Virtualbox . It is possible to do so by following the instructions below from the command line:

$ minikube start --vm-driver=virtualbox

# Linking the docker environment to the virtual machine
$ eval $(minikube docker-env)


# Building the image for the pod
$ docker build -t imapp .


# The following are two different options for creating the app deployment

# (   I   )   For creating deployment from image choose

$ kubectl run depnodeappy --image='imapp' --image-pull-policy='Never' --port='3000'

XOR

# (   II   )  Creating deployment from file

$ kubectl create -f depnodeapp.yaml 



# Exposing the service
$ kubectl expose deployment depnodeapp --type=LoadBalancer

$ kubectl get services

# Deploying in browser
$ minikube service depnodeapp
