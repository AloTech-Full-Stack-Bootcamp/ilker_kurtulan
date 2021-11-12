const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.route('/').get(pageController.getPageIndex);
router.route('/about').get(pageController.getAboutPage);


module.exports = router