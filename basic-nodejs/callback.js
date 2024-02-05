const calculate = (x, y, callback) => {
    console.log("กำลังคำนวณ");
    setTimeout(() => {
        const sum = x + y;
        callback(sum);
    }, 3000);
};

calculate(100, 50, (result) => {
    console.log(`ผลบวก = ${result}`);
});
