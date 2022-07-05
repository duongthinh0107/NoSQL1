"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const contact = require('../controllers/contact.controller');
router.get('/add', contact.getAdd);
router.post('/add', contact.postAdd);
router.get('/', contact.render);
router.get('/edit/:id', contact.getEdit);
router.post('/edit/:id', contact.postEdit);
router.post('/:id', contact.delete);
router.get('/detail:id', contact.getDetail);
module.exports = router;
//# sourceMappingURL=contact.route.js.map