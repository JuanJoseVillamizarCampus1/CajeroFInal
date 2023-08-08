import {postCajeros} from '../controllers/cajeros.controllers.js';

import { Router } from 'express';

const router = Router();

router.post('/',postCajeros);

export default router;