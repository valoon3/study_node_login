const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log('앱 실행', port);
})

console.log(__dirname);

app.get('/', (req, res) => {
    res.send('hello world');
});