try {
    require("dotenv").config({
        path: `.env.${process.env.NODE_ENV}`
    });
} catch (error) {
    console.error("Erreur lors de la configuration dotenv:", error);
}

const path = require('path');
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./configDb");
const internRouter = require("./routes/intern.route");
const internshipRouter = require("./routes/internship.route");
const publicRouter = require("./routes/public.route");
const adminRouter = require("./routes/admin.route");
const {urlencoded} = require("express");
const cookieParser = require('cookie-parser');

//DB Sync
db.sequelize.sync().then(() => {
    console.log("DB sync ok");
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'templates'));
});


//Globals middlewares
app.use(cors());
app.use(morgan(':method :url :status - :response-time ms'))
app.use(urlencoded({ extended: true }));
app.use('/', express.static('public'));
app.use(express.json());
app.use(cookieParser());
///////////////////////


//Main urls
app.use("/admin", adminRouter)
app.use("/registration", internRouter);
app.use("/internship", internshipRouter);
app.use("/public", publicRouter);
app.get('/', (req, res) => {
    res.redirect('/public/home')
})


//Server activated
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})



