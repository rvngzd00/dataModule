// // const button=document.getElementById('send_bt');
// // const input_name=document.getElementById('name-bt').value;
// // const input_email=document.getElementById('email-bt').value;
// // const input_phone=document.getElementById('phone-bt').value;
// // const input_message=document.getElementById('message-bt').value;

// // let messageBody="Name:"+ input_name+"  email:"+input_email+"   phone:"+input_phone+"    message:"+input_message;
// // button.addEventListener('click',()=>{

// // const express = require('express');
// // const app = express();

// // app.use(express.urlencoded({ extended: false }));

// // app.post('/send-email', (req, res) => {
// //     const { name, email, message } = req.body;

// //     // E-posta gönderme işlemini gerçekleştirin

// //   res.send('E-posta gönderildi');
// // });

// // app.listen(3000, () => {
// //     console.log('Sunucu çalışıyor');
// // });

// // const nodemailer = require('nodemailer');

// // app.post('/send-email', (req, res) => {
// //     const { name, email, message } = req.body;

// //     // Nodemailer yapılandırması
// //     const transporter = nodemailer.createTransport({
// //         service: 'gmail',
// //         auth: {
// //             user: 'asiman.qasimzade@gmail.com',
// //             pass: 'melpjvxipjjtbqlm'
// //         }
// //     });

// //   // E-posta gönderme seçenekleri
// //   const mailOptions = {
// //     from: 'asiman.qasimzade@gmail.com',
// //     to: 'asimanjg@code.edu.az',
// //     subject: 'Web Sitesi İletişim Formu',
// //     text: messageBody
// //   };

// //   // E-posta gönderme işlemi
// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.log(error);
// //       res.send('E-posta gönderilemedi');
// //     } else {
// //       console.log('E-posta gönderildi: ' + info.response);
// //       res.send('E-posta gönderildi');
// //     }
// //   });
// // });

// //   })

// const button = document.getElementById("send_bt");

// button.addEventListener("click", () => {
//   const input_name = document.getElementById("name-bt").value;
//   const input_email = document.getElementById("email-bt").value;
//   const input_phone = document.getElementById("phone-bt").value;
//   const input_message = document.getElementById("message-bt").value;

//   let messageBody = `Name: ${input_name}\nEmail: ${input_email}\nPhone: ${input_phone}\nMessage: ${input_message}`;

//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "/send-email");
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log("E-posta gönderildi");
//     } else {
//       console.log("E-posta gönderilemedi");
//     }
//   };
//   xhr.send(
//     JSON.stringify({
//       name: input_name,
//       email: input_email,
//       message: messageBody,
//     })
//   );
// });

// const express = require("express");
// const app = express();
// const nodemailer = require("nodemailer");

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.post("/send-email", (req, res) => {
//   const { name, email, message } = req.body;

//   // Nodemailer yapılandırması
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "asiman.qasimzade@gmail.com",
//       pass: "melpjvxipjjtbqlm",
//       host: "smtp.gmail.com",
//       port: 587,
//     },
//   });

//   // E-posta gönderme seçenekleri
//   const mailOptions = {
//     from: "asiman.qasimzade@gmail.com",
//     to: "asimanjg@code.edu.az",
//     subject: "Web Sitesi İletişim Formu",
//     text: message,
//   };

//   // E-posta gönderme işlemi
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send("E-posta gönderilemedi");
//     } else {
//       console.log("E-posta gönderildi: " + info.response);
//       res.send("E-posta gönderildi");
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log("Sunucu çalışıyor");
//   // bu usulun basin burax. basqa library ile yazaq
// });

const button = document.getElementById("send_bt");

button.addEventListener("click", async (e) => {
  e.preventDefault();
  const input_name = document.getElementById("name-bt").value;
  const input_email = document.getElementById("email-bt").value;
  const input_phone = document.getElementById("phone-bt").value;
  const input_message = document.getElementById("message-bt").value;
  let messageBody = `Name: ${input_name}\nEmail: ${input_email}\nPhone: ${input_phone}\nMessage: ${input_message}`;

  console.log(messageBody);

  const jsonBody = {
    subject: input_name,
    email: input_email,
    message: messageBody,
  };

  try {
    await fetch("http://localhost:5000/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonBody),
    });
  } catch (error) {
    console.log(error);
  }
});
