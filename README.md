# DevOps-Docker
HomeWork for DevOps course: Docker

link to custom image on DockerHub: https://hub.docker.com/r/mrzend/node-app-custom-image

1. Init node environment: npm init -y
2. Install expless packages: npm install express
3. Create index.js file (add necessary code - lood index.js file): touch index.js
4. Create Dockerfile (add necessary code - look Dockerfile): touch Dockerfile
5. Build custom docker image via Dockerfile: docker build -t mrzend/node-app-custom-image . :
- Title of image: -t mrzend/node-app-custom-image
6. Push image to DockerHub:
- Login: docker login
- Push: docker push mrzend/node-app-custom-image:latest
7. Run container with necessary options and limits: 
docker run -p 80:80 -m 512m --cpus=0.5 -d --name node-app mrzend/node-app-custom-image
- Connection port 80: -p 80:80 - ports
- Limit of memory: -m 512m
- Limit of CPUs: --cpus=0.5
- Name of container: --name node-app
