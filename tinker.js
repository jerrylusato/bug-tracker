var nodemailer = require('nodemailer');
const { reportError } = require('wadudu')


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mjthecoder@gmail.com',
    pass: 'Gambia10@@N'
  }
});

var mailOptions = {
  from: 'mjthecoder@gmail.com',
  to: 'michael53161@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    reportError({ message: error.message, error: error.stack });
  } else {
    console.log('Email sent: ' + info.response)
  }
});