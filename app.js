const express = require('express');
const app = express();

app.use(express.static('client'));
app.use('/assets', express.static('build'));

app.listen(8080, () => console.log('App listening on 8080'));