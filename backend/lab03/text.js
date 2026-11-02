const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('my first page \n');
    res.write('this is my page\n');

    res.end('this is my page\n');
});

server.listen(4000, () => {
    console.log('Server running at http://localhost:4000/');
});