import { Router } from 'express';
import peopleRouter from './people';

let router = Router();
let app = express.Router();
app.use("/chirps", chirpsRouter);
router.use('/people', peopleRouter);

export default router;