import Router from 'express-promise-router';
import { product } from '../controllers/index.js';

const router = Router();

router.route('/:id').get(product.get);
router.route('/').post(product.create);
router.route('/').get(product.getAll);
router.route('/:id').put(product.update);
router.route('/:id').delete(product.delete);

export default router;
