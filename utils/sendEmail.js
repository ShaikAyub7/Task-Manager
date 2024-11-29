const nodemailer = require("nodemailer");

const sendEmail = async (email, userName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: '"TaskUp  👻" <chatup@gmail.com>',
    to: email,
    subject: "Welcome to Our Website! 🌟", // Subject line
    text: `Hello ${userName},\n\nWelcome to TaskUp! We’re thrilled to have you on board.\n\nExplore our features and join a community of amazing people. Let us know if you have any questions or need assistance.\n\nCheers,\nThe [Your Website Name] Team`, // Plain text body
    html: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #5D9CEC;">Hello ${userName},</h2>
          <p>Welcome to <strong>TaskUp</strong></strong>! We’re thrilled to have you on board.</p>
          <p>
            Explore our features and join a community of amazing people. Let us know
            if you have any questions or need assistance.
          </p>
          <p style="margin-top: 20px;">Cheers,<br>The TaskUp Team</p>
        </body>
      </html>
    `,
  });
  console.log(userName);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
module.exports = sendEmail;
