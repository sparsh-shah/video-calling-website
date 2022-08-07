let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./ws/stream');
let path = require('path');
const port = process.env.PORT || 8000;

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static('src'));  
app.use('/images', express.static('images'));
app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
    
});


io.of('/stream').on('connection', stream);

server.listen(process.env.PORT || 3000);