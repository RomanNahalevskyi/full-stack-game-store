import genericCrud from './generic.controller.js';
import { Category } from '../model/index.js';

export default {
    ...genericCrud(Category)
};
