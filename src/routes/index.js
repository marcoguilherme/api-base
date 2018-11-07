module.exports = function(app){

  app.post('/', function(req, res){
    app.src.controllers.UserController.registerUser(app, req, res);
  })

};

