require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// create application/json parser
app.use(bodyParser.json());


app.get('/usuario', (req, res) => {
  res.json('Get Usuario');
});

app.post('/usuario', (req, res) => {

  let body = req.body;



  res.json({
    body
  });
});

app.put('/usuario/:id', (req, res) => {
let id = req.params.id;
  res.json({
    id
  });
});

app.delete('/usuario', (req, res) => {
  res.json('Delete Usuario');
});

app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto', process.env.PORT)
});
