
# Battleships-Server

This is our backend for the battleship multiplayer game project which was 
created at Codaisseur.
The Front-end for the following repo may be found [here](https://github.com/AidaRos95/Battleships-Client)

Technologies used:
- Express.js
- PostgreSQL 
- Socket.io
- Sequelize
- Cors
- Bcrypt

Installation instructions:

Please note in order to run the server you must also start a Postgres container
using the following commands
```bash
$ docker run \
  --rm \
  -e POSTGRES_PASSWORD=secret \
  -p 5432:5432 \
  postgres
```
- git clone
- npm install
- npm start

Connect to your database with:
- Mac: Postico
- Linux: DBever
