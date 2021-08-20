const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const axios = require('axios');
const router = express.Router();

var corsOptions = {
    origin: "*"
};

const connection = mysql.createConnection({
    host: "server206.hosting.reg.ru",
    user: "u0483195_guest",
    database: "u0483195_legend",
    password: "123456asd",
    port: "3306",
});

connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: false})); // Если массив - true
app.use(bodyParser.json());



app.get("/getObjects", function (request, response) {
    connection.query("SELECT * FROM objects",
        function (err, results, fields) {
            var data = results;
            response.json({data: JSON.stringify(data)});
        });
});