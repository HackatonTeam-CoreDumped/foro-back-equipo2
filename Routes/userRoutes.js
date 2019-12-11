const router = require('express').Router();

const userController = require('../Controllers/userController');
const middleware = require('../Middleware/auth');

// Create a new user
router.post('/signup', userController.signup);
// Returns user object (until tokens are implemented)
router.post('/login', userController.login);

// Return user object if token verification (middleware.isAuth) is correct
router.route('/loginToken')
  .get(middleware.isAuth, userController.getUser);

router.route('/users')
  .get(userController.getUsers);

router.route('/user/:data')
  .get(userController.getUser);

module.exports = router;