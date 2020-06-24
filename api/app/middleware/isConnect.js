const userMiddleware = {

  testSession: (req, res, next) => {
    if (req.session.data) {
        console.log('ca marche');
        
      return res.locals.data = req.session.data;
    }
    console.log('ca marche pas');

  }

};

module.exports = userMiddleware;