const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/api/data') {
        fs.readFile(__dirname + "/values.json", 'utf-8', (err, data) => {
            console.log(data);
            res.writeHead(200, { 'content-type': 'json' });
            res.write(JSON.stringify(JSON.parse(data)));
            res.end();
        });
    }
});
server.listen(2000,
    () => {
        console.log('connected');
    }
);