import genericCrud from './generic.controller.js';
import { Product } from '../model/index.js';

export default {
    ...genericCrud(Product)
};
