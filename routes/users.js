const express = require('express');
const router = express.Router();
const users = require('../controllers/usersController')

/* GET users listing. */
router.get('/', function(req, res) {
      users.getUsers(req,res)
})

// TODO: Create new user

router.get('/:uname', (req,res) => {
    users.getOneUser(req,res)
})
router.get('/followers/:uname', function(req, res) {
    users.getFollowers(req,res)
})
router.get( '/followed/:uname', (req,res) => {
    users.getFollowedUsers(req,res)
})

module.exports = router;
