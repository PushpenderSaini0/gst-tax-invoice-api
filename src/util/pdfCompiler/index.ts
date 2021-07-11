import { Request, Response } from 'express';

const pdfCompiler = (req: Request, res: Response): string => {
    res.render('basic', { title: 'Hey', message: 'Hello there!' });
    return req.body;
};

export default pdfCompiler;