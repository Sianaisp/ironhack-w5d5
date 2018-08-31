const axios = require('axios')
var mailgun = require('mailgun-js')({
    apiKey: 'b10519023054125502aa33997cacdd36-c1fe131e-7001245b',
    domain: 'sandbox495148b65e9a4801a942356ed9e00a56.mailgun.org',
})

function sendMail(to, subject, text) {
    return new Promise((resolve, reject) => {
        const data = {
            from: 'lukas.gisder@ironhack.com',
            to,
            subject,
            text,
        }
        mailgun.messages().send(data, function(error, body) {
            if (error) console.error(error)
            console.log(body)
            return resolve({ success: true })
        })
    })
}

module.exports = {
    sendMail,
}
