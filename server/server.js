var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var router = express.Router();

var multer = require('multer');
var mysql = require('mysql');
var md5 = require('md5');
var fs = require('fs');

var DIR = 'upload';

app.use('/upload', express.static('upload'))

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DIR)
    },
    filename: function (req, file, cb) {
        var type = file.mimetype.split('/')
        if (type && type.length > 1) {
            type = '.' + type[1];
        } else {
            type = '';
        }
        cb(null, file.fieldname + '-' + Date.now()+type);
        // cb(null, file.fieldname + type);
    }
});


var upload = multer({
    // dest: DIR,
    storage: storage
});

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // Set to true if you need the website to include cookies in the requests sent   // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true); // Pass to next layer of middleware
    next();
});


var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Working on port ' + PORT);
});

app.get('/', function (req, res) {
    res.send('hello world');
});


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



app.post('/upload', upload.single('file'), function (req, res, next) {
    console.log(req.file, req.body);
    JSON.stringify(req.body);
    var data = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        image: req.file.filename
    };

    let sql = 'INSERT INTO students SET ? ';
    con.query(sql, [data], (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
        console.log(data);
    });

});

app.post('/student/', function (req, res, fields) {

    console.log('req.body:');
    console.log(req.body);
    var data = {
        name: req.body.student.name,
        phone: req.body.student.phone,
        email: req.body.student.email,
    };
    console.log('data:');
    console.log(data);

    let sql = 'INSERT INTO students SET ? ';
    con.query(sql, [data], (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send('ok');
    });
});

app.post('/upload/course', upload.single('file'), function (req, res, next) {
    console.log(req.file, req.body);
    JSON.stringify(req.body);
    var data = {
        name: req.body.name,
        des: req.body.des,
        image: req.file.filename
    };

    let sql = 'INSERT INTO courses SET ? ';
    con.query(sql, [data], (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
        console.log(data);
    });

});

app.post('/course/', function (req, res, fields) {

    console.log('req.body:');
    console.log(req.body.course);

    var data = {
        name: req.body.course.name,
        des: req.body.course.des,
    };

    console.log('data:');
    console.log(data);

    let sql = 'INSERT INTO students SET ? ';
    con.query(sql, [data], (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send('ok');
    });
});


app.get('/students', function (req, res, fields) {
    let sql = 'SELECT * FROM students';
    // let sql = 'SELECT * FROM students join students_courses on students.id = students_courses.student_id';
    con.query(sql, (err, data) => {
        if (err) throw err;
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

app.delete('/student/delete/:id', function (req, res, fields) {
    let sql = 'DELETE FROM students WHERE students.id=?';
    con.query(sql, [req.params.id], (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send('deleted');
    });
});

app.post('/student/update/:id', function (req, res, fields) {
    console.log(req.params.id);
    let sql = 'UPDATE students SET name=?, phone=?, email=?, image=? WHERE id=? ';
    con.query(sql, [req.body.student.name, req.body.student.phone, req.body.student.email, req.params.id], (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send('ok');
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

app.get('/admin/:name', function (req, res, fields) {
    let sql = `SELECT * FROM admins WHERE name=?`;
    console.log(req.params.name);
    con.query(sql, [req.params.name], (err, data) => {
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


app.post('/login', function (req, res, fields) {
    let sql = 'select * from admins where name = ? and password = ?';
    console.log('login!!!', req.body);
    let md5pass = md5(req.body.password);
    con.query(sql, [req.body.name, md5pass], (err, data) => {
        if (err) throw err;
        if (data.length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send('ok');
        } else {
            res.status(403).send('bad');
        }
    });
});