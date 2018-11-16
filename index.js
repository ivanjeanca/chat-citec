var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var port = process.env.PORT // 8000

var mensajes = [{
    user: 'Server',
    text: 'Hola a todos',
    date: '6 nov'
}] // Variable para guardar los mensajes

app.use(express.static('public'))

app.get('/', function(req, res){
    res.status(200).send('<h1>Hola mundo xd.</h1>')
})

io.on('connection', function(socket){
    console.log('Se ha conectado un usuario')
    io.sockets.emit('messages', mensajes) // El usuario va a emitir en todos los sockets con la etiqueta 'messages' y con la variable messages y asi para todos los usuarios
    socket.on('new-message', function(data){
        mensajes.push(data)
        io.sockets.emit('messages', mensajes)
    })
})

server.listen(port, function(){
    console.log('El servidor inció en el puerto ' + port)
})