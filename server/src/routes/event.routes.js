import express from 'express';
import { create, getAll, getById, remove, update } from '../controllers/event';
import { celebrate, Segments } from 'celebrate'


import { addEventSchema, eventViewSchema, eventIdSchema } from '../validations/event';

const eventRouter = express.Router();

eventRouter.post('/', celebrate({ [Segments.BODY]: addEventSchema }), create);
eventRouter.get('/', celebrate({ [Segments.QUERY]: eventViewSchema }), getAll);
eventRouter.get('/:id', celebrate({ [Segments.PARAMS]: eventIdSchema }), getById);
eventRouter.patch('/:id', celebrate({ [Segments.PARAMS]: eventIdSchema }), update);
eventRouter.delete('/:id', celebrate({ [Segments.PARAMS]: eventIdSchema }), remove);

export default eventRouter;