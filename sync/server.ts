import express from 'express'
import bodyParser from 'body-parser'
const server = express()
const port = 3000

const messages: string[] = []

// parse application/x-www-form-urlencoded
// server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

// criar um rota GET que responde com hello world
server.get('/version', (request, response) => {
  response.send(messages[0])
})

server.post('/message', (request, response) => {
  const message = request.body.message
  messages.push(message)
  response.send('Message successfully saved! ' + message)
})

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
