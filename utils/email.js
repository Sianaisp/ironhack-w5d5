const axios = require('axios')
var mailgun = require('mailgun-js')({
    apiKey: '4f9452a48efb8164ea269f4912328b15-c1fe131e-03f09850',
    domain: 'sandbox99abb5d62ba94b51aa60b4d2cbcf6df7.mailgun.org',
})

function sendMail(to, subject, text, html) {
    return new Promise((resolve, reject) => {
        const data = {
            from: 'postmaster@sandbox99abb5d62ba94b51aa60b4d2cbcf6df7.mailgun.org',
            to,
            subject,
            text,
            html,
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
