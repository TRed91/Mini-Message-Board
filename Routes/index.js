const { Router } = require('express');
const router = Router();
const indexController = require('../controllers/indexController');

// Get Requests
router.get("/", indexController.indexGet);
router.get("/new", indexController.newMessageGet);

// Post Requests
router.post("/new", indexController.newMessagePost);
router.post("/details", indexController.messageDetailsPost);

module.exports = router;