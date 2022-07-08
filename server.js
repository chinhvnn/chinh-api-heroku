const express = require('express');
const bodyParser = require('body-parser')
require('./utils/dbconfig');
const tasks = require('./models/todolist')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/', (req, res) => {
    res.send(`Listening on ${PORT}`);
})

app.get('/api/tasks', (req, res) => {

    tasks.find({}, function (err, tasks) {
        res.json(tasks);
      });
});