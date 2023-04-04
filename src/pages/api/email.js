/** @format */

const sgMail = require("@sendgrid/mail");

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

export default async function handler(req, res) {
  const body = req.body;

  await sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

  const msg = {
    to: "uzzamwebdev@gmail.com",
    from: "ahmarketingco5@gmail.com",
    subject: "AHMARKETING EMAIL",
    text: `${body.message}`,
    html: `<div style="display: flex; flex-direction: column;">
    <span><strong>Email : ${body.email}</strong><span/>
        <br/>    
    <span><strong>Name : ${body.name}</strong><span/>
        <br/>
        <span><strong>Phone No : ${body.phone}</strong><span/>
        <br/>
        <span><strong>Message : <strong/> ${body.message}<span/>
        </div>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.send({
        error: false,
      });
    })
    .catch((e) => {
      res.send({
        error: true,
        message: e,
      });
    });
}
