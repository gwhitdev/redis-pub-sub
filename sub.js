const redis = require('ioredis');
const subscriber = redis.createClient();

subscriber.on("message", (channel, message) => {
    console.log("Message: " + message + " on channel: " + channel);
})

subscriber.subscribe("notification");