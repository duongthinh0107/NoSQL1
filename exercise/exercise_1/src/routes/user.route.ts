import express from "express";
const router = express.Router();
const user = require('../controllers/user.controller');

router.get('/add',user.getAdd);
router.post('/add',user.postAdd);
router.get('/',user.render);
router.get('/edit/:id',user.getEdit);
router.post('/edit/:id',user.postEdit);
router.post('/:id',user.delete);



module.exports = router;
