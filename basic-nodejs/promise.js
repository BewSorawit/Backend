const connect = true;
const url1 = "file1.json"
const url2 = "file2.json"
const url3 = "file3.json"

const downloading = (url) => {
    return new Promise((resolve, reject) => {
        console.log(`กำลังโหลด ${url}`);
        setTimeout(() => {
            if (connect) {
                resolve(`โหลด ${url} เรียบร้อย`);
            } else {
                reject('เกิดข้อผิดพลาด');
            }
        }, 1000);

    })
}

// // Basic
// downloading(url1).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// }).finally(() => {
//     console.log("จบการทำงาน");
// })

// // promise hell
// downloading(url1).then(result => {
//     console.log(result);
//     downloading(url2).then(result => {
//         console.log(result);
//         downloading(url3).then(result => {
//             console.log(result);
//         }).finally(() => {
//             console.log("จบการทำงาน");
//         })
//     })
// })

downloading(url1).then((result) => {
    console.log(result);
    return downloading(url2)
}).then(result => {
    console.log(result);
    return downloading(url3)
}).then(result=>{
    console.log(result);
})