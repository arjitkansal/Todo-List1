let bodyParser = require('body-parser');

let data = [{item: 'Learn git'},{item: 'Learn JS'},{item: 'Learn KOA.js'},{item: 'Learn React'},{item:'Make To-do List'}];
let urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

  app.get('/todo', function(req, res){
    res.render('todo.ejs', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });

};
