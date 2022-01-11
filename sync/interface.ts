import * as readline from 'readline'
import axios from 'axios'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log('Chat do Rafa')

rl.on('line', (line) => {
  // Process the line.
  console.log(line)
  axios({
    method: 'post',
    url: 'http://localhost:3000/message',
    data: {
      message: line,
    },
  })
})
