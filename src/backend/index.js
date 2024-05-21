const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 80;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'avazbekjumoquloff@gmail.com',
        pass: 'Yaratilgan ilova paroli' // bu yerga yaratilgan ilova parolini joylashtiring
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.error('Nodemailer sozlamalarida xatolik:', error);
    } else {
        console.log('Server tayyor email jo\'natish uchun.');
    }
});

app.post('/api/send-email', async (req, res) => {
    const { firstName, lastName, email, phoneNumber } = req.body;

    console.log('Received request to send email:', { firstName, lastName, email, phoneNumber });

    const messageContent = `
        Имя: ${firstName}
        Фамилия: ${lastName}
        Электронная почта: ${email}
        Номер телефона: ${phoneNumber}
    `;

    const mailOptions = {
        from: 'avazbekjumoquloff@gmail.com',
        to: 'avazjonjumoqulov@gmail.com',
        subject: 'Form Data',
        text: messageContent
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.status(200).send('Email muvaffaqiyatli jo\'natildi');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Xatolik yuz berdi: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});