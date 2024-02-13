require("dotenv").config({path: `.env.${process.env.NODE_ENV}`});
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
const fs = require('fs');
const https = require('https');
const release = '0.0.8b';

//DB Sync
db.sequelize.sync().then(() => {
    console.log("DB sync ok");
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'templates'));
});

//Globals middlewares
app.use(cors());
app.use(cookieParser());
app.use(morgan(':method :url :status - :response-time ms'))
app.use(urlencoded({ extended: true }));
app.use('/', express.static('public'));
app.use(express.json());
///////////////////////

//Main urls
app.use("/admin", adminRouter)
app.use("/registration", internRouter);
app.use("/internship", internshipRouter);
app.use("/public", publicRouter);
app.get('/', (req, res) => {
    res.redirect('/public/stages')
})

// dev server
if (process.env.ENVIRONNEMENT ==='DEV'){
    app.listen(process.env.PORT, '0.0.0.0', () => {
        console.log(`Server running on ${process.env.PORT}, release ${release}`);
    });
}
else if (process.env.ENVIRONNEMENT === 'PROD'){
    app.listen(process.env.PORT, '0.0.0.0', () => {
        console.log(`Server running on ${process.env.PORT}, release ${release}`);
    });
    const httpsServer = https.createServer({
        key: fs.readFileSync("/etc/letsencrypt/live/www.scoolfamily.be/privkey.pem"),
        cert: fs.readFileSync("/etc/letsencrypt/live/www.scoolfamily.be/fullchain.pem"),
    }, app);
    console.log(`Server running on HTTPS, release ${release}`)
    httpsServer.listen(443);
}
else{
    console.log("Choose DEV or PROD env.")
}




