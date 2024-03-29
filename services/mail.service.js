require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});
const nodemailer = require("nodemailer");
const hogan = require("hogan.js");
const fs = require("fs");

async function mail(receiver, internship, name, price) {

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "camillefrischmann@gmail.com",
            pass: process.env.GMAIL
        }
    });

    try {
        const templateFile = fs.readFileSync('./templates/mail.html');
        const templateCompiled = hogan.compile(templateFile);
        const templateRendered = templateCompiled.render({ internship: internship, name: name, price: price, price2: price - 10 });
        let info = {
            from: `"s'cool Family" <camillefrischmann@gmail.com>`,
            to: receiver,
            subject: "s'Cool Family - Confirmation d'inscription",
            html: templateRendered,
        };

        await transporter.sendMail(info).then((info) => { console.log(info.accepted); });
    }
    catch (error) {
        console.error(error);
        return error;
    };
};


module.exports = mail;