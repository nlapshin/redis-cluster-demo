const Redis = require("ioredis");

const cluster = new Redis.Cluster([
  {
    port: 46379,
    host: "0.0.0.0",
  },
  {
    port: 46380,
    host: "0.0.0.0",
  },
  {
    port: 46381,
    host: "0.0.0.0",
  },
  {
    port: 46382,
    host: "0.0.0.0",
  },
  {
    port: 46383,
    host: "0.0.0.0",
  },
  {
    port: 46384,
    host: "0.0.0.0",
  },
]);

cluster.set("foo", "bar");
cluster.get("foo", (err, res) => {
  console.log('value', res);
});
