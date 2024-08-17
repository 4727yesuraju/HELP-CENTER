import express from 'express';
import { createCard, deleteCard, getCard, getCards } from '../controllers/card.controller.js';

const router = express.Router();

router.get('/:id',getCard);
router.get('/',getCards);
router.post('/create',createCard);
router.delete('/:id',deleteCard);

export default router;