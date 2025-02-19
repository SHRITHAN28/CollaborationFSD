const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.write('welcam hame');
    }
    else if (req.url === '/about') {
        res.write('welcam about');
    }
    else if (req.url === '/contact')
        res.write('welcon cuntact');
    res.end();
});
server.listen(2000,
    () => {
        console.log('connected');
    }
);