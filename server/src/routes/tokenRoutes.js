import express from 'express';
import { authenticateToken } from '../middlware/authToken.js';

export const tokenRouter = express.Router();

tokenRouter.get('/validateToken', authenticateToken, (req, res) => {
    res.json({ user: req.user });
});


