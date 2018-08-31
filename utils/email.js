const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'lukas.ironhack@gmail.com',
        pass: 'ox99abb5d62ba94b51aa60b4d2',
    },
})

function sendMail(to, subject, text, html) {
    return new Promise((resolve, reject) => {
        const data = {
            from: 'lukas.ironhack@gmail.com',
            to,
            subject,
            text,
            html,
        }
        transporter
            .sendMail(data)
            .then(info => {
                console.log(info)
                resolve({ success: true })
            })
            .catch(error => {
                console.log(error)
                resolve({ success: false })
            })
    })
}

module.exports = {
    sendMail,
}
