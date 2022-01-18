const Redis = require('ioredis');
const config = require('./config');

const client = new Redis({
    host: config.redis.host,
    port: config.redis.port,
    //password: config.redis.password,
});

client.on('connect', () => {
    console.log('[*] Redis connected.');
});

client.on('end', () => {
    console.log('[*] Redis disconnected.');
});

client.on('reconnecting', () => {
    console.log('[*] Redis reconnected.');
});

client.on('error', (error) => {
    console.log(`[*] Redis error:\n${error}`);
});

process.on('SIGINT', () => {
    client.quit();
    console.log('[*] Redis disconnected through app termination (SIGINT).');
});

module.exports = {
    client,
};