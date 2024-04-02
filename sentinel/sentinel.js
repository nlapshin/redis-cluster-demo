const Redis = require('ioredis');

// Подключение к Sentinel для выполнения команд Sentinel
const sentinel = new Redis({
  port: 26379,
  host: "0.0.0.0",
});

console.log("Connected to Redis Sentinel");
  
  // Выполнение команды SENTINEL masters для получения информации о всех мастерах
sentinel.sentinel('masters', (err, masters) => {
  if (err) {
    console.error("Error fetching masters:", err);
  } else {
    console.log("Number of masters:", masters.length);
    
    // Вывод информации о каждом мастере
    masters.forEach((master, index) => {
      console.log(`Master #${index + 1}: IP - ${master[3]}, Port - ${master[5]}, Status - ${master[9]}`);
    });
  }
});

sentinel.sentinel('replicas', 'mymaster', (err, replicas) => {
  if (err) {
    console.error("Error fetching replicas:", err);
  } else {
    console.log("Number of replicas:", replicas.length);

    replicas.forEach((replica, index) => {
      console.log(`Replica #${index + 1}: IP - ${replica[3]}, Port - ${replica[5]}, Status - ${replica[9]}`);
    });
  }
});
