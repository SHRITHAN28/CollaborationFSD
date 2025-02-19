const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/index.html') {
        const rstream = fs.createReadStream('C:/Users/CVR/Documents/22B81A05DX/CollaborationFSD/Lab6/demo.html', 'utf-8');
        rstream.pipe(res);
        rstream.on('end', () => {
            res.end();
        })
    }
    //res.end();
});
server.listen(2000,
    () => {
        console.log('connected');
    }
);