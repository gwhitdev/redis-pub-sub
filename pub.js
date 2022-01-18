const redis = require('redis');
const publisher = redis.createClient();
(async () => {
    await publisher.connect();
    await publisher.publish("notification", "{\message\":\"Hello world from here!\"}", function() {
        process.exit(0);
    });
    publisher.quit();
})()

