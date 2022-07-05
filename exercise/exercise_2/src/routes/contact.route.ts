import express from "express";
const router = express.Router();
const contact = require('../controllers/contact.controller');

router.get('/add',contact.getAdd);
router.post('/add',contact.postAdd);
router.get('/',contact.render);
router.get('/edit/:id',contact.getEdit);
router.post('/edit/:id',contact.postEdit);
router.post('/:id',contact.delete);
router.get('/detail:id',contact.getDetail);



module.exports = router;
