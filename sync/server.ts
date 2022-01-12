import express from 'express'
import bodyParser from 'body-parser'
const server = express()
const port = 3000

interface Message {
  user: string
  message: string
  created_at: number
}

interface Database {
  chats: {
    id: string
    messages: Message[]
  }[]
}

const database: Database = {
  chats: [
    {
      id: 'futebol',
      messages: [],
    },
    {
      id: 'cs',
      messages: [],
    },
  ],
}

server.use(bodyParser.json())

// criar um rota GET que responde com hello world
server.get('/version', (request, response) => {
  response.send(`v.0.0.0`)
})

// buscar todas as mensagens do chat
server.get('/chat/:id', (request, response) => {
  const id = request.params.id
  const chat = database.chats.find((chat) => chat.id === id)
  response.json(chat)
})

// Adicionar uma mensagem nova no chat
server.post('/message', (request, response) => {
  const message = request.body.message
  const id = request.body.id
  const user = request.body.user

  const chat = database.chats.find((chat) => chat.id === id)
  if (chat) {
    chat.messages.push({
      user: user,
      message: message,
      created_at: new Date().getTime(),
    })
  }
  response.json(chat)
})

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
