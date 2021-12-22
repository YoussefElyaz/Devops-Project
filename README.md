# Devops Project

This project allows you to run a basic NodeJS web application exposing REST API that creates and stores
user parameters in Redis database.

The Continuous Integration & Continuous Delivery (CI/CD) was made with [GithubActions](https://github.com/features/actions) / [Heroku](https://dashboard.heroku.com/apps).

We configured a virtual environment with [vagrant](https://www.vagrantup.com/) and provisioned
it with [Ansible](https://docs.ansible.com/ansible/latest/index.html). 

We also created a docker image of our application and pushed it on a [Dockerhub](https://hub.docker.com/), and made container orchestration using docker-compose.yml that will start our application.

We made Docker orchestration by using kubernetes then create the Manifest Yaml files.

A service Mesh was made by using [Istio](https://istio.io/) to deploy our application and creating the configuration (route requestes and trafic shifting) between two different versions of our app.

Implement Monitoring by using Prometheus and Grafana.


## Project Steps

1. Web App
2. CI/CD pipeline
3. Virtual environment and IaC approach
4. Docker image
5. Container orchestration
6. Docker orchestration using Kubernetes
7. Service mesh using Istio
8. Implement Monitoring

## Installation

This application is written on NodeJS and it uses Redis database and other tools.

1. [Install NodeJS](https://nodejs.org/en/download/)

2. [Install Redis](https://redis.io/download)

3. [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads)

4. [Install Vagrant](https://www.vagrantup.com/downloads)

5. [Install Ansible on the Vagrant VM](https://www.vagrantup.com/docs/provisioning/ansible_local)

6. [Install Docker](https://www.vagrantup.com/downloads)

7. [Install Minikube](https://minikube.sigs.k8s.io/docs/start/)

8. [Install Istio](https://istio.io/latest/docs/setup/)

9. [Install Prometheus to K8s Cluster](https://www.lisenet.com/2021/install-and-configure-prometheus-monitoring-on-kubernetes/)

10. [Install Grafana to K8s Cluster](https://grafana.com/docs/grafana/latest/installation/kubernetes/)


Go to the root directory of the application ( where `package.json` file is located) and run the following command :

```
npm i
```

## Web App

1. Start a web server

From the root directory of the project run:

```
npm start
```

It will start a web server available in your browser at http://localhost:3000.

2. Create a user

Send a POST (REST protocol) request using terminal:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"Youssef","firstname":"Youssef","lastname":"ELYAZIGHI"}' \
  http://localhost:5000/user
```

It will output:

```
{"status":"success","msg":"OK"}
```

We can also use [Postman](https://www.postman.com/) to test our REST API.

3. Testing

From the root directory of the project, run:

```
npm run test
```
On Package.json we used the script "test": "mocha test/*.js", the script "test": "./node_modules/.bin/mocha test/*.js" doesn't recognize the directory when we run the npm run test or npm test.

## CI/CD pipeline

1. We Created a Git repository for the User API project and commited all the files.
2. The CI Workflow connects Node.js application to Redis
3. We Configured the worklow to deploy to Heroku and put the Heroku API Key on Github->Repository->Settings->Secret
![Capturegit](https://user-images.githubusercontent.com/56431002/147022515-e80ccbde-a270-4822-ad3b-9f798c1f71a8.JPG)

To Test the CI/CD pipeline, run the project and go to Actions.

## Virtual environment and IaC approach

1. Launch vagrant

We configured a Linux VM with vagrant and we provionned it with Ansible.

From the root directory of the project, run :
```bash
cd iac
```

Then run the following command:

```
vagrant up
```
## Docker image

1. The Docker image of our application

We builded a Docker image of our application,to pull the image From the userapi Folder of the project, run :

```
docker pull dockerfile
```
![Capturedoc](https://user-images.githubusercontent.com/56431002/147129714-b0d98e2f-60ba-4cd6-b50f-01837d803e4f.JPG)


2. The image on Docker Hub

We pushed our image on [DockerHub](https://hub.docker.com/r/driael/364c7fd23d7)(link to see the image) 

![Capturedh](https://user-images.githubusercontent.com/56431002/147129731-ea652d9d-dc70-4a80-92d7-f979109b6fc3.JPG)

To pull the Image run the command:

```
docker pull driael/364c7fd23d7
```

## Container orchestration

For this part we created a docker-compose.yml at the root of the project wish will allow us to run our App and redis database.
```
docker-compose up 
```
![Capturegit](https://user-images.githubusercontent.com/56431002/147129776-c0717405-fd3c-47a1-95ae-9fd9c47f21fa.JPG)

## Docker orchestration using Kubernetes

1. Manifest Yaml

We created the kubernetes manifest yaml files ( deployment, service, persistent volume and persistent volume claim) wish will allow us to move and scale our containerized applications across clouds and data centers.

To deploy the Manifest files we start minikube with the following command: 
```
minikube start
```

Then we run the following command to get to the right file:
```
cd k8s
```
Then we create the deployments and services :
```
kubectl create -f service.yaml
kubectl create -f service-redis.yaml
kubectl create -f deployment.yaml
kubectl create -f deployment-redis.yaml
kubectl create -f pv-claim.yaml
kubectl create -f pvolume.yaml
```

When we Open the minikube dashboard We can see that the deployments are done :
```
minikube dashboard
```

### 7. Make a service mesh using Istio

In this part we created a service mesh using istio whish helps us managing communication between services.

1.To start the service run the following command:
```
kubectl apply -f istio/deploy-istio.yaml
```
There's one pod running for each deployment

2.then add the command line which makes kubectl and istio work together:
```
kubectl label namespace default istio-injection=enabled
```
3.We delete the deployments with the command below:
```
kubectl delete -f istio/deploy-istio.yaml
```
3.and apply the file again with:
```
kubectl apply -f istio/deploy-istio.yaml
```
4.then display the pods with the following command:
``` 
kubectl get pods
```
We can see that we have 2 pods runnings now for every deployment we made.  


### 8. Implement Monitoring to your containerized application

For the Monitoring part, we run the following command to get our deployment structure on kiali.

We install kiali, Prometeus, zipkins and graphana 

Then we use the following command below :
```
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.12/samples/addons/kiali.yaml
```
To apply addons to kiali, Prometeus, zipkins and graphana
```
kubectl apply -f addons
```
Then to get acces to the kiali dashboard we run the following command
```
kubectl port-forward svc/kiali -n istio-system 20001
```
Now we can access to the kiali console on http://localhost:20001

## Author

Youssef ELYAZIGHI: youssef.elyazighi@edu.ece.fr

Augustin BERTHOD: augustin.berthod@edu.ece.fr
