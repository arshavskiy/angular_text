var express = require('express')
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.listen(3000);
app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


// respond with "hello world" when a GET request is made to the homepage

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'theschool_db'
});

con.connect(err => {
    if (err) throw err;
    console.log('connected');
});

app.get('/students', function (req, res, fields) {
    let sql = 'SELECT * FROM students';
    // let sql = 'SELECT * FROM students join students_courses on students.id = students_courses.student_id';
    con.query(sql, (err, data) => {
        if (err) throw err;
        console.log(`res : ${data}`);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    });
});
app.get('/admins', function (req, res, fields) {
    let sql = 'SELECT * FROM admins';
    con.query(sql, (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    });
});

app.get('/courses', function (req, res, fields) {
    let sql = 'SELECT * FROM courses';
    con.query(sql, (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    });
});
app.get('/admin/:id', function (req, res, fields) {
    let sql = 'select * from admins where id=?';
    con.query(sql, [req.params.id], (err, data) => {
        if (err) throw err;
        console.log(`res : ${data}`);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    });
});
app.get('/student/:id', function (req, res, fields) {
    let sql = 'SELECT * FROM students WHERE id =?';
    con.query(sql, [req.params.id], (err, data) => {
        if (err) throw err;
        console.log(`res : ${data}`);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    });
});
app.get('/student-cours/:id', function (req, res, fields) {
    let sql = 'SELECT courses.name, courses.image FROM courses JOIN students_courses ON courses.id = students_courses.course_id WHERE student_id =?';
    con.query(sql, [req.params.id], (err, data) => {
        if (err) throw err;
        console.log(`res : ${data}`);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    });
});

app.get('/courses-student/:id', function (req, res, fields) {
    let sql = 'SELECT students.name, students.image FROM students JOIN students_courses ON students.id = students_courses.student_id WHERE course_id=?';
    con.query(sql, [req.params.id], (err, data) => {
        if (err) throw err;
        console.log(`res : ${data}`);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    });
});


app.get('/', function (req, res) {
    res.send('hello world');
});