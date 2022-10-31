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
const user_inform = require('./components/user_inform');

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

app.post('/signup', (req, res) => {
    let iduser = req.body.params.id;
    let password = req.body.params.password;
    let nickname = req.body.params.username;
    let values = [iduser, password, nickname];

    const sql = "INSERT INTO condb.user(iduser, password, nickname) VALUES(?, ?, ?)"
    db.query(sql, values,
        (err, result) => {
            if (err)
                console.log(err);
            else
                res.send("회원가입 성공");
        });
});

app.post('/idDuplicateCheck', (req, res) => {
    let iduser = req.body.params;

    const sql = "SELECT COUNT(*) as count FROM user WHERE iduser = ?;"
    db.query(sql, iduser,
        (err, result) => {
            if (err)
                console.log(err);
            else
                res.send(result);
        });
});

//유저로그인
app.post('/onLogin', (req, res) => {
    console.log(`= = = > req : ${util.inspect(req)}`)
    // user_id, user_pw 변수로 선언
    const user_id = req.query.user_id
    const user_pw = req.query.user_pw
   
    // 입력된 id 와 동일한 id 가 mysql 에 있는 지 확인
    const sql1 = 'SELECT COUNT(*) AS result FROM user WHERE iduser = ?'
    db.query(sql1, user_id, (err, data) => {
        if(!err) {
           
           // 결과값이 1보다 작다면(동일한 id 가 없다면)
            if(data[0].result < 1) {
                res.send('false')
            } else {
                const sql2 = 'SELECT * FROM user WHERE iduser = ? AND password = ?'

                const params = [user_id, user_pw]
                db.query(sql2,params,  (err, data) => {
                    if(!err) {
                        res.send(data[0])

                    } else {
                        res.send(err)
                    }
                })

            }
        } else {
            res.send(err)
        }
    })
});