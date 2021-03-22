import { NextApiRequest, NextApiResponse } from "next";
require("dotenv/config");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  console.log(process.env.SENDGRID_API_KEY);
  const { fName, lName, email, message } = _req.body.formValues;
  const msg = {
    from: `The False 9 Podcast <email@thefalseninepodcast.com>`,
    to: "sajalsatyal@gmail.com",
    subject: "Message",
    text: `${fName} ${lName} ${email} ${message}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.status(200).json({ successful: true });
    })
    .catch((err: any) => {
      res.status(500).json({ statusCode: 500, message: err.message });
    });
};

export default handler;
