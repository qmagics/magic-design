const express = require('express');

const app = express();

app.post('/api/upload', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    res.json({
        success: true,
        data: {
        }
    });
});

app.listen(4000, () => {
    console.log('listen to 4000');
})
