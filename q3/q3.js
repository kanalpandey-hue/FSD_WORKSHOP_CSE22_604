const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Welcome to NodeJS!");
});

server.listen(3000, () => {
    console.log("Tea stall server running at http://localhost:3000");
});