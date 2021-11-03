exports.getHome = function(req, res) {
  res.render('index', {title: 'Главная'});
};
