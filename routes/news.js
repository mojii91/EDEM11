const express = require('express');
const NewsController = require('../controllers/NewsController');
const { authentication } = require('../middlewares/authentication');

const router = express.Router();

router.post('/create', authentication, NewsController.create);
router.get('/all', NewsController.getAll);
router.get('/:_id', NewsController.getById);
router.put('/update/:_id', authentication, NewsController.update);
router.delete('/delete/:_id', authentication, NewsController.delete);
router.get('/latest', NewsController.getLatest);

module.exports = router;