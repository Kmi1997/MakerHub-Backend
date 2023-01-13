require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./configDb");
const donationRouter = require("./routes/donation.route");
const internRouter = require("./routes/intern.route");
const internshipRouter = require("./routes/internship.route");

//Synchronisation DB
db.sequelize.sync({});

//Middlewares globaux
app.use(cors());
app.use(morgan(':method :url :status - :response-time ms'));
app.use(express.json());
///////////////////////

//Routes principales
app.use("/donation", donationRouter);
app.use("/intern", internRouter);
app.use("/internship", internshipRouter);

app.listen(process.env.PORT, () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}`);
})


