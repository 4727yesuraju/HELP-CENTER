import express from 'express';
import { createCard, getCard, getCards } from '../controllers/card.controller.js';

const router = express.Router();

router.get('/:id',getCard);
router.get('/',getCards);
router.post('/create',createCard);

export default router;