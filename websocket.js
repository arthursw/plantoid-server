const Server = require('socket.io');
const server = require('http').Server();

module.exports = (PORT = 6843)=> {

    server.listen(PORT);

    const io = Server(server);

    console.log('Websocket ready');

    io.on('connection', (socket)=> {
        console.log('New connection: ');
        console.log(socket);
        
        socket.emit('connected')
        
        socket.on('join', (room)=> {
            socket.join(room);
        })

        socket.on('data', (data)=> {
            io.in((data.name).emit('data', data);
        });
    
    });

}
