import net from 'net';

const server =net.createServer( socket => {
    console.log("TCP handshake sucessfull with" + socket.remoteAddress + ":" +socket.remotePort);
    socket.write("Hello client");
    socket.on("data" ,data =>{
        console.log("Recieved Data" + data.toString())
    })
})

server.listen(8800 ,'127.0.0.1')