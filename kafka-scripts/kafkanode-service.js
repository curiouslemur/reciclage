const kafka = require('kafka-node');

var Producer = kafka.Producer
var p = new kafka.Client('localhost:2181')
    producer = new Producer(p)

var Consumer = kafka.Consumer
var c = new kafka.Client('localhost:2181')
    topics = [
      {topic: "git-message", partition:0}
    ]
    options = { autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 };
    consumer = new Consumer(c, topics, options);

producer.on('ready', function () {
  console.log("producer is ready");
});

producer.on('error', function (err) {
  console.log("producer error  :")
  console.log(err)
});

consumer.on('error', function (err) {
  console.log('error', err);
});
