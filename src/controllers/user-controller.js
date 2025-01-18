const { queue } = require('../config/index')
async function userRegistration(req, res) {
    
    const {email} = req.body;

    if( email ) {
        queue.sendMsgToQueue({
            name: 'Mukesh',
            email: email
        })
        return res.json({
            'msg': 'Email Registered we will send email shortly'
        })
    }
}

module.exports = {
    userRegistration
}