const Redis = require('ioredis');

const redis = new Redis({
  sentinels: [
    { host: '0.0.0.0', port: 26379 },
    { host: '0.0.0.0', port: 26380 },
    { host: '0.0.0.0', port: 26381 }
  ],
  name: "mymaster",
});

redis.on('connect', () => {
  console.log('Connected to Redis through Sentinel');
});

redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

// Использование Redis
redis.set('key', 'value');
redis.get('key', (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result); // Выведет 'value'
  }
});
