import { Request, Response } from 'express';

const postHandler = (req: Request, res: Response): void => {
    res.status(200).send(req.body);
};

export default postHandler;