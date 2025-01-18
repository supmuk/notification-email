const amqplib = require('amqplib');

// This queue is used RabbitMQ

let queueName = 'email-notification-queue';
let connection, channel = '';
async function connectQueue() {
    try {
        connection = await amqplib.connect('amqp://localhost')
        channel = await connection.createChannel();
        await channel.assertQueue(queueName)
    } catch (error) {
        console.log(error);
    }
}

async function sendMsgToQueue(data) {
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)))
}

module.exports = {
    connectQueue,
    sendMsgToQueue
}