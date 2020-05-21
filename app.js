let express = require('express');
let todoController = require('./controllers/todocontrollers');

let app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//Listen to port
app.listen(3000);
console.log('You are listening to Port 3000');
