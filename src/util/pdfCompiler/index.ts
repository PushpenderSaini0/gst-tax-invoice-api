import { Request, Response } from 'express';

const sampleData = [
    {
        name: 'asdf',
        qt: '1',
        price: '100',
    },
    {
        name: 'bsdf',
        qt: '12',
        price: '1200',
    },
    {
        name: 'csdf',
        qt: '13',
        price: '3100',
    }
];

const pdfCompiler = (req: Request, res: Response): string => {
    res.render('basic', { items: sampleData });
    return req.body;
};

export default pdfCompiler;