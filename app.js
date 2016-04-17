const express = require('express');
const app = express();

app.use(express.static('static'));
app.use(express.static('static/build'));

const msg = 'Hello! My name is Devers Talmage. This site is currently undergoing a little renovation, so in the meantime please contact me here: deverstalmage [at] gmail [dot] com';
app.get('/', (req, res) => res.send(msg));
app.listen(8080, () => console.log('App listening on 8080'));