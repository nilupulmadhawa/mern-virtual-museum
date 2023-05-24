import express from 'express';
import { create, getAll, getById, remove, update, getLocationMuseums } from '../controllers/museum';
import { celebrate, Segments } from 'celebrate'


import { addMuseumSchema, museumViewSchema, museumIdSchema } from '../validations/museum';

const museumRouter = express.Router();

museumRouter.post('/', celebrate({ [Segments.BODY]: addMuseumSchema }), create);
museumRouter.get('/', celebrate({ [Segments.QUERY]: museumViewSchema }), getAll);
museumRouter.get('/:id', celebrate({ [Segments.PARAMS]: museumIdSchema }), getById);
museumRouter.patch('/:id', celebrate({ [Segments.PARAMS]: museumIdSchema }), update);
museumRouter.delete('/:id', celebrate({ [Segments.PARAMS]: museumIdSchema }), remove);

export default museumRouter;