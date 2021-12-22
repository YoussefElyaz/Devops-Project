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
5. container orchestration
6. docker orchestration using Kubernetes
7. service mesh using Istio
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

8. [Install Prometheus to K8s Cluster](https://www.lisenet.com/2021/install-and-configure-prometheus-monitoring-on-kubernetes/)

9. [Install Grafana to K8s Cluster](https://grafana.com/docs/grafana/latest/installation/kubernetes/)


Go to the root directory of the application (userapi where `package.json` file is located) and run the following command :

```
npm i
```

## I-Web App

1. Start a web server

From the root directory of the project run:

```
npm start
```

It will start a web server available in your browser at http://localhost:5000.

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
3. We Configured the worklow to deploy to Heroku
![Capturegit](https://user-images.githubusercontent.com/56431002/147022515-e80ccbde-a270-4822-ad3b-9f798c1f71a8.JPG)

## Virtual environment and IaC approach

## Docker image
1- The Docker image for our application
![Capturedoc](https://user-images.githubusercontent.com/56431002/147024089-1ceb0b86-c9df-4ef6-b250-19af789d0f7e.JPG)

2-The image on Docker Hub
![Capturedh1](https://user-images.githubusercontent.com/56431002/147024345-6ea595d9-655e-4e04-9e23-285c43223b3d.JPG)

![Capturedh](https://user-images.githubusercontent.com/56431002/147024425-b473377d-13cf-4adb-a71f-743ec174093f.JPG)



## Author

Youssef ELYAZIGHI  youssef.elyazighi@edu.ece.fr

Augustin BERTHOD  augustin.berthod@edu.ece.fr
