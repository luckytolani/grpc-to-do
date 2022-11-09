## Steps to run this project

**step:1** clone the repo

**step:2** run command `cd ./client`

**step:3** run command `docker build -t client-app:1.0 .`

**step:4** go back to root directory `cd ..`

**step:5** run command `cd ./server`

**step:6** run command `docker build -t server-app:1.0 .`

**step:7** go back to root directory `cd ..`

**step:8** run command to start this project `docker-compose -f mongo.yaml up `

### Server started at the address

    http://0.0.0.0:8000

### Postman collection link for endpoint documentation

[Postman collection Link](https://www.postman.com/luckytolani/workspace/grpc-to-do-app/collection/14089038-dafb2b47-7e27-43bc-bcb2-84b3f9e4fcf5?action=share&creator=14089038)
