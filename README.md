# Devops Project

This project allows you to run a basic NodeJS web application exposing REST API that creates and stores
user parameters in Redis database.

The Continuous Integration & Continuous Delivery (CI/CD) was made with [GithubActions](https://github.com/features/actions) / [Heroku](https://dashboard.heroku.com/apps).

We have configured a virtual environment with [vagrant](https://www.vagrantup.com/) and provisioned
it with [Ansible](https://docs.ansible.com/ansible/latest/index.html). 

We also created a docker image of our application, pushed it on a [Dockerhub](https://hub.docker.com/)and make container orchestration using docker-compose.yml that will start our application.

## The Web APP

1. Start a web server
2. Create a user
3. Get a user

## Installation

This application is written on NodeJS and it uses Redis database.

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

## Usage

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

Another way to test your REST API is to use [Postman](https://www.postman.com/).

## Testing

From the root directory of the project, run:
On Package.json I used the script "test": "mocha test/*.js", the script "test": "./node_modules/.bin/mocha test/*.js" doesn't work when I run the npm run test or npm test.

```
npm run test
```

## Author

Youssef ELYAZIGHI  
youssef.elyazighi@edu.ece.fr

Augustin BERTHOD
augustin.berthod@edu.ece.fr
