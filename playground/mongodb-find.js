const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo_app', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to mongodb server');
  const db = client.db('todo_app');

  // db.collection('todos').find({_id: new ObjectID('5c768597f644fb4ede135b7b')}).toArray()
  //   .then((docs) => {
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   })
  //   .catch((err) => console.log(err))

  // db.collection('todos').find().count()
  //   .then((count) => {
  //     console.log(`Todos count: ${count}`);
  //   })
  //   .catch((err) => console.log(err))

  db.collection('users').find({ name: 'Renz' }).toArray()
    .then((users) => {
      console.log(JSON.stringify(users, undefined, 2));
    })
    .catch((err) => console.log(err))

  client.close();
});
