const http = require('http')

const server = http.createServer((req, res) => {
    const myhtml = `
    <h1>Hello Node.js</h1>
    <p style="color:red">Brown studio  24</p>`
    res.write(myhtml)
    res.end()
}).listen(3000, 'localhost', () => {
    console.log("start server in port 3000");
})