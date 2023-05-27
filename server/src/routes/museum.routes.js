import express from 'express';
import { create, getAll, getById, remove, update, getLocationMuseums } from '../controllers/museum';
import { celebrate, Segments } from 'celebrate'


import { addMuseumSchema, museumViewSchema, museumIdSchema } from '../validations/museum';

import { protect } from '../middleware/auth'

const museumRouter = express.Router();

museumRouter.post('/', celebrate({ [Segments.BODY]: addMuseumSchema }), protect, create);
museumRouter.get('/', celebrate({ [Segments.QUERY]: museumViewSchema }), getAll);
museumRouter.get('/:id', celebrate({ [Segments.PARAMS]: museumIdSchema }), getById);
museumRouter.patch('/:id', celebrate({ [Segments.PARAMS]: museumIdSchema }), protect, update);
museumRouter.delete('/:id', celebrate({ [Segments.PARAMS]: museumIdSchema }), protect, remove);

export default museumRouter;