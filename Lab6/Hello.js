const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    let arr = req.url.split('?');
    let valu = arr[1];
    if (arr[0] === '/greet' && valu) {
        const queryParams = valu.split('&');
        const obj = {};
        queryParams.forEach(param => {
            const [key, value] = param.split('=');
            obj[key] = value;
        });
        if (obj.name) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Welcome ${obj.name}`);//accesing name value
        }
    }
    res.end();
});
server.listen(2000,
    () => {
        console.log('connected');
    }
);