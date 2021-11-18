"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports = {
  
  sendMail : async function(to, subject, html) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.gandi.net",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "contact@ikodi.eu", 
        pass: process.env.EMAIL_PWD, 
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Support IKODI" <contact@ikodi.eu>', // sender address
      // to: "bar@example.com, baz@example.com", // list of receivers
      to,
      // subject: "Hello ✔", // Subject line
      subject,
      // text: "Hello world?", // plain text body
      // html: "<b>Hello world?</b>", // html body
      html
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }
}