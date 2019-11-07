var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dheerajchakkz27@cet.ac.in',
    pass: 'cet.ac.in'
  }
});

var mailOptions = {
  from: 'dheerajchakkz27@cet.ac.in',
  to: 'sreeragms@cet.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!.Just checking'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});