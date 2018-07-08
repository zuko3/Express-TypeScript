/* For Setting the request, response, Router type */
import { Router, Request, Response } from 'express';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message:"Hello World"
    })
});

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;
    res.status(200).json({
        message:"welcome "+name
    })
});

export const HomeController: Router = router;