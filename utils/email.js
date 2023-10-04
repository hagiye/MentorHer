// const nodemailer = require('nodemailer');

// const sendEmail = async () => {
//     const transporter = nodemailer.createTransport({
//         host: process.env.EMAIL_HOST,
//         port: process.env.EMAIL_PORT,
//         secure: true,
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASSWORD,
//         },
//       });
      
     
//         // send mail with defined transport object
//         const info = await transporter.sendMail({
//           from: 'info@mailtrap.club', // sender address
//           to: "mh3rtest@gmail.com", // list of receivers
//           subject: "Notification", // Subject line
//           text: "Check this out", // plain text body
//         });


//         console.log("Message sent: %s", info.messageId);

//         // const mailOptions = {
//         //     from: 'Suppport<info@mailtrap.club>', // sender address
//         //     to: "mh3rtest@gmail.com", // list of receivers
//         //     subject: "Notification", // Subject line
//         //     text: "Check this out", // plain text body
//         //   };

//         //   transporter.sendMail(mailOptions, (error, info)=>{
//         //     if (error) {
//         //       return console.log(error);
//         //     }
//         //     console.log("Message sent: %s", info.messageId);
//         //   })
      
       
// }

// module.exports = sendEmail

