const userMiddleware = (req, res, next) => {
  if (req.session.appUser) {
      console.log('ca marche');
      
    res.locals.appUser = req.session.appUser;
  }
  console.log('ca marche pas');

  next();

};

module.exports = userMiddleware;