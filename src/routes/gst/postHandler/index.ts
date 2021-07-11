import { Request, Response } from 'express';
import pdfCompiler from '../../../util/pdfCompiler';

const postHandler = (req: Request, res: Response): void => {
    pdfCompiler(req, res);
};

export default postHandler;