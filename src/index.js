const express = require('express');
const app = express();
const { Logger, queue, nodeMailer } = require('./config')
const routes = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes);

app.listen(9000, async function () {
    // amqlib
    // console.log('connected')
    // Logger.log({ level: 'info', message: 'Server connected' })
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
    await queue.connectQueue()
    console.log('Queue Connected')
});
