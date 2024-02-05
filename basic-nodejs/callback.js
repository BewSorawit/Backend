// download file with callback

const url1 = "file1.json"
const url2 = "file2.json"
const url3 = "file3.json"
const downloading = (url, callback) => {
    console.log(`กำลังโหลด ${url}`);
    setTimeout(() => {
        callback(url)
    }, 1000);
}

downloading(url1, (result) => {
    console.log(`ดาวโหลด ${result} เรียบร้อย`);
    downloading(url2, (result) => {
        console.log(`ดาวโหลด ${result} เรียบร้อย`);
        downloading(url3, (result) => {
            console.log(`ดาวโหลด ${result} เรียบร้อย`);
        })
    })
})