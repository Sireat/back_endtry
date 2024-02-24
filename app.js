const http = require('http');

// Create an HTTP server instance
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('Hello World')
        res.end()
    }
    if(req.url=='/api/course'){
        res.write(JSON.stringify(1,2,3))
        res.end();
    }
});

// Listen for 'connection' events on the server
server.on('connection', (socket) => {
    console.log('Connecting...');
});

// Listen on port 3001
server.listen(3001, () => {
    console.log('Listening on port 3001...');
});
