const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
const Victim = require('../models/Victim')
const { sendMail } = require('../utils/email')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
})

router.post('/email', (req, res, next) => {
    new Victim({ email: req.body.email })
        .save()
        .then(victim => {
            const htmlString = fs
                .readFileSync(path.join(__dirname, '../views/emails/phishing.html'))
                .toString()

            return sendMail(victim.email, 'Welcome to Ironhack!', undefined, htmlString)
        })
        .then(() => {
            res.send('Thanks for participating')
        })
})

module.exports = router
