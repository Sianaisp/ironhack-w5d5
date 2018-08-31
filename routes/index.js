const express = require('express')
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
            return sendMail(
                victim.email,
                'Welcome to our official study!',
                'Hello my friend! I am so happy that you joined our study! Could you please answer this e-mail and send you credit card info, so we can verify your identity? Thanks a lot and have a wonderful day!'
            )
        })
        .then(() => {
            res.send('Thanks for participating')
        })
})

module.exports = router
