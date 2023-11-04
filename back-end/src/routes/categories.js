import Router from 'express-promise-router';
import { category } from '../controllers/index.js';

const router = Router();

router.route('/:id').get(category.get);
router.route('/').post(category.create);
router.route('/').get(category.getAll);
router.route('/:id').put(category.update);
router.route('/:id').delete(category.delete);

export default router;
