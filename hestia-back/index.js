const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hola desde mi servidor Vanilla Node.js')
})

server.listen(3000, () => {
    console.log('Servidor activo en http://localhost:3000')
})

