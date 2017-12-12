var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var router = express.Router();

var multer = require('multer');
var mysql = require('mysql');
var md5 = require('md5');

app.listen(3000);
app.use(express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1024102420,
    type: 'application/x-www-form-urlencoding'
}));
app.use(express.json({
    limit: 1024102420,
    type: 'application/json'
}));
// app.use(express.static('../client'));
app.use(cors());


var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});
var upload = multer({ //multer settings
    storage: storage
}).single('file');

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         var path = './uploads' // Make sure this path exists 
//         cb(null, path)
//     }
// })
// var upload = multer({
//     storage: storage
// })

// router.post('/upload', upload.single('file'), function (req, res) {
//     res.status(204).end()
// })

// module.exports = router;

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

    let sql = 'UPDATE students SET name=?, phone=?, email=? WHERE id=? ';
    con.query(sql, [req.body.student.name, req.body.student.phone, req.body.student.email, req.params.id], (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send('ok');
    });
});

app.post('/upload', function (req, res) {

    console.log(JSON.parse(JSON.stringify(req.body.name)));

    upload(req, res, function (err) {
        if (err) {
            res.json({
                error_code: 1,
                err_desc: err
            });
            return;
        }
        res.json({
            error_code: 0,
            err_desc: null
        });
        // res.status(204).end();
    });

});

app.post('/student/', function (req, res, fields) {
    var input = JSON.parse(JSON.stringify(req.body));
    // console.log('the req.body is:');
    // JSON.stringify(input.student);
    // console.log(input.student);

    var data = {
        name: input.student.name,
        phone: input.student.phone,
        email: input.student.email,
        image: 'input.student.image'
    };

    let sql = 'INSERT INTO students SET ? ';
    con.query(sql, [data], (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send('ok');
    });
});

// TODO:
//INSERT INTO `students` (`id`, `name`, `phone`, `email`, `image`) VALUES ('54', 'asdasd', '0586825135', 'asdasd@asd.com', 'asdasd.jpg');

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