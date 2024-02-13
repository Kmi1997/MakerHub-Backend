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
const http = require('http');
const https = require('https');
const greenlockExpress = require('greenlock-express');
const release = '0.0.6b';

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

const httpServer = http.createServer(app);
httpServer.listen(80);

if (process.env.ENVIRONNEMENT == 'PROD'){

const greenlock = greenlockExpress.init({
    packageRoot: __dirname,
    maintainerEmail: 'camillefrischmann@gmail.com',
    // Accepter les conditions d'utilisation de Let's Encrypt
    agreeTos: true,
    // Configurer la méthode de validation du domaine (http-01 ou dns-01)
    configDir: "./greenlock.d",
    communityMember: true,
    app: app
});

const httpsServer = https.createServer(greenlock.tlsOptions, app);
httpsServer.listen(443);

}

//Server activated
// app.listen(process.env.PORT, '0.0.0.0', () => {
//     console.log(`Server running on ${process.env.PORT}, release ${release}`);
// })


