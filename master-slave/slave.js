const Redis = require('ioredis');

const redisMaster = new Redis({
  host: '0.0.0.0',
  port: 26380,
});

// redisMaster.set('key', 'value');
redisMaster.get('key', (err, result) => {
  console.log(result); // Выведет 'value'
});
