const express = require('express');

const app = express();

app.post('/api/upload', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    // res.status(500);

    setTimeout(() => {
        res.json({
            success: true,
            data: {
                pic: "https://pic2.zhimg.com/v2-97e6e78a4194a2d2da66171dfc53422e_1440w.jpg?source=172ae18b"
            }
        });
    }, 2000);
});

app.listen(4000, () => {
    console.log('listen to 4000');
})
