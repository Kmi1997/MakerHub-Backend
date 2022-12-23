require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();
const db = require("./configDb");
const donationRouter = require("./routes/donation.route");

db.sequelize.sync();
app.use(cors());
app.use(morgan(':method :url :status - :response-time ms'));
app.use(express.json());

app.use("/donation", donationRouter);

app.listen(process.env.PORT, () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}`);
})


