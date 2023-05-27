import express from 'express';
import { create, getAll, getById, remove, update } from '../controllers/event';
import { celebrate, Segments } from 'celebrate'


import { addEventSchema, eventViewSchema, eventIdSchema } from '../validations/event';

import { protect } from '../middleware/auth'

const eventRouter = express.Router();

eventRouter.post('/', celebrate({ [Segments.BODY]: addEventSchema }), protect, create);
eventRouter.get('/', celebrate({ [Segments.QUERY]: eventViewSchema }), getAll);
eventRouter.get('/:id', celebrate({ [Segments.PARAMS]: eventIdSchema }), getById);
eventRouter.patch('/:id', celebrate({ [Segments.PARAMS]: eventIdSchema }), protect, update);
eventRouter.delete('/:id', celebrate({ [Segments.PARAMS]: eventIdSchema }), protect, remove);

export default eventRouter;