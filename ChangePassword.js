import express from 'express';
import nodemailer from 'nodemailer';
import { Link } from "react-router-dom";

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



app.get('/send-email', async (req, res) => {

    const { to, ChangepaaswordLinks } = req.query;
    if (!to) {
        return res.status(400).send('E-posta adresi eksik.');
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'mail.hasimovtabriz.com.tr',
            port: 465,
            secure: true,
            auth: {
                user: 'admin@hasimovtabriz.com.tr',
                pass: '3865606rt.'
            }
        });
        const info = await transporter.sendMail({
            from: 'Educator <<admin@hasimovtabriz.com.tr>',
            to: to,
            subject: 'Educator university',
            html: `yor change password links <a href="${ChangepaaswordLinks}">Change password</a>`,
        });
        console.log("mesage sent: " + info.messageId);
        res.send('E-posta gönderildi.');
    } catch (error) {
        console.error(error);
        res.status(500).send('E-posta gönderilemedi.');
    }
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
