export default function (req, res) {
  require("dotenv").config();

  let sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.send_grid);

  const mailData = {
    from: process.env.from,
    to: process.env.to,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  sgMail
    .send(mailData)
    .then(() => {
      console.log("Email sent");
    })
    .catch((err) => {
      console.error(err);
    });

  res.send("success");
}
