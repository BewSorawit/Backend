// async and await
const connect = true
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

const start = async () => {
    console.log(await downloading(url1));
    console.log(await downloading(url2));
    console.log(await downloading(url3));
}

start()