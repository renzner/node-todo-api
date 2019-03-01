const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo_app', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to mongodb server');
  const db = client.db('todo_app');

  // db.collection('todos').insertOne({
  //   text: 'Another todo list',
  //   completed: true
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.collection('users').insertOne({
    name: 'Renz',   
    age: 15
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });

  client.close();
});
