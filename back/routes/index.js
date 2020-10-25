const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* Incluido según apuntes de Mongoose&Express | Create - Update */
router.get('/users/add', (req, res, next) => {
  res.render("user-add");
});

router.post('/users/add', (req, res, next) => {

});


module.exports = router;
