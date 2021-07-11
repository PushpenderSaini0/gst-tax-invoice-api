import express, { Request, Response } from 'express';
import postHandler from './postHandler';

const router = express.Router();

//handler for post requests
router.post('/', postHandler);

// reject-all-other-request-type
router.use('/', (req: Request, res: Response) => {
    res.status(400).send(`${req.method} request is not supported`);
});


export default router;