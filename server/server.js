/*
npm install express
npm install mysql
npm install cors
npm install nodemon -g
nodemon server.js 실행
*/

const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

/*위랑합치기
app.use(express.json());
----
app.use(express.static(path.join(__dirname, 'react-project/build')));

app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});
*/

const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: '1234',
    database: 'condb'
});

app.listen(3001, () => {
    console.log('server is running on port 3001');
});

//server API
app.get('/', (req, res) => {
    res.send('Server is running')
})

app.get('/product/result', (req, res) => {
    db.query('((SELECT * FROM condb.bunjang limit 10) union (SELECT * FROM condb.joongna limit 10)) UNION (SELECT * FROM daagun LIMIT 10)',
        (err, result) => {
            if (err)
                console.log(err);
            else
                res.send(result);
        });
});

app.get('/chart/result', (req, res) => {
    db.query("SELECT json_object('y', round(AVG(price)),'x', upload_time ) as Data FROM condb.chart_usersells group by upload_time;",
        (err, result) => {
            if (err)
                console.log(err);
            else
                res.send(result);
        });
});

app.get('/chart/test', (req, res) => {
    db.query("SELECT upload_time as 'x', price as 'y' FROM condb.chart_usersells group by upload_time order by upload_time;",
        (err, result) => {
            if (err)
                console.log(err);
            else
                res.send(result);
        });
});