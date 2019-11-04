const accountSid = '*'; //removed
const authToken = '*'; //removed
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+12062034622',
        to: '*' //removed
    })
    .then(message => console.log(message.sid));