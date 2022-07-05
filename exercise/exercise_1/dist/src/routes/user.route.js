"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user = require('../controllers/user.controller');
router.get('/add', user.getAdd);
router.post('/add', user.postAdd);
router.get('/', user.render);
router.get('/edit/:id', user.getEdit);
router.post('/edit/:id', user.postEdit);
router.post('/:id', user.delete);
module.exports = router;
//# sourceMappingURL=user.route.js.map