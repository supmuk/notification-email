const express = require('express');
const app = express();
const { Logger } = require('./config')
const {nodeMailer} = require('./config/index')

app.listen(9000, async function() {
    // console.log('connected')
    Logger.log({ level: 'info', message: 'Server connected'})
    // console.log(nodeMailer);
    // try {
    //     const response = await nodeMailer.sendMail({
    //         from: '"Maddison Foo Koch 👻" <mukesh.yadav.developer@gmail.com>', // sender address
    //         to: "mukesh.yadav.developer@gmail.com", // list of receivers
    //         subject: "Hello ✔", // Subject line
    //         text: "Hello world?", // plain text body
    //         html: "<b>Hello world?</b>", // html body
    //     });

    //     console.log(response);
    // } catch (error) {
    //     console.log(error)
    // }
    
});
