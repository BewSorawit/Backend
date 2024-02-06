// Non-Blocking
const fs = require('fs')

// read input.txt
fs.readFile('myFile/input.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log("เกิดข้อผิดพลาด ", err);
    }
    const outputText = `Hello Node.js\n${data}\nไฟล์นี้ถูกเขียนเมื่${new Date}`
    fs.writeFile('myFile/output.txt', outputText, err => {
        if (err) {
            return console.log("เกิดข้อผิดพลาด ", err);
        }
    })
})
console.log("จบการทำงาน");