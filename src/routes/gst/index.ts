import express, { Request, Response } from 'express';
import postHandler from './postHandler';

const router = express.Router();

// reject-get-request
router.get('/', (_req: Request, res: Response) => {
    res.status(400).send('Get request is not supported');
});

//handler for post requests
router.post('/', postHandler);

export default router;