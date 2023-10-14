require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

const os = require('os');
const path = require('path');
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./configDb");
const internRouter = require("./routes/intern.route");
const internshipRouter = require("./routes/internship.route");
const adminRouter = require("./routes/admin.route");
const paramsRouter = require('./routes/params.route');
const {urlencoded} = require("express");


//DB Sync
db.sequelize.sync().then(() => {
    console.log("DB sync ok");
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'templates'));
});


//Globals middlewares
// app.use(morgan(':method :url :status - :response-time ms'));
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
///////////////////////


//Main urls
app.use("/registration", internRouter);
app.use("/internship", internshipRouter);
app.use("/", adminRouter);
app.use("/param", paramsRouter);
app.get('/', (req, res) => {
    res.redirect('/connection')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})

//Used RAM Monitoring
setInterval(() =>{
    console.log("RAM utilisée: " + ((process.memoryUsage().heapUsed / os.totalmem()) * 100).toFixed(2) + "%");
}, 3400);


