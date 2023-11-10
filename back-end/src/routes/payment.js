import Router from 'express-promise-router';
import { payment } from '../controllers/index.js';

const router = Router();

router.route('/').post(payment.createPaymentIntent);

export default router;
