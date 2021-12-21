//Déclarer les Consts(les modules, port, serveur et les routes)
const express = require('express')
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

const db = require('./dbClient')
db.on("error", (err) => {
  console.error(err)
})

//Utiliser les modules déclarés 
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// Default Root: [ http://localhost:5000/ ] 
app.get('/', (req, res) => res.send('Welcome to Youssef and Augustin Project'))

//Utiliser les routes crées
app.use('/user', userRouter)

// le serveur écoute sur le PORT
const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})

process.on('SIGINT', () => {
  server.close()
})


module.exports = server
