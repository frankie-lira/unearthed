import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import giftData from '../data/gifts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Route to get all gifts
router.get('/', (req, res) => {
  res.status(200).json(giftData);
});

// Route to get a specific gift's HTML page
router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'));
});

export default router;
