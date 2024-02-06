const http = require('http')

const server = http.createServer((req, res) => {
    const pathName = req.url
    console.log("url = ", pathName);
    if(pathName ==="/" || pathName === "/home"){
        res.end("Hello Brown")
    }else if(pathName==="/product"){
        res.end("Hello Project")
    }else{
        res.writeHead(404)
        res.end("Not Found")
    }
}).listen(3000, 'localhost', () => {
    console.log("start server in port 3000");
})