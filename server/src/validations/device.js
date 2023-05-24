import { Joi } from 'celebrate'

export const addMuseumSchema = Joi.object({
    museum_name: Joi.string().required(),
    title: Joi.string().required(),
    image: Joi.string(),
    lat: Joi.string(),
    lng: Joi.string(),
    is_active: Joi.boolean().required(),
})

export const museumViewSchema = {
    filter: Joi.object()
        .keys({
            created_at: Joi.string().hex().length(24).optional(),
            location_id: Joi.string().hex().length(24).optional(),
            updated_at: Joi.string().hex().length(24).optional()
        })
        .optional(),
    sort: Joi.object()
        .keys({
            created_at: Joi.any().valid('asc', 'desc', '1', '-1', 1, -1).optional(),
            updated_at: Joi.any().valid('asc', 'desc', '1', '-1', 1, -1).optional()
        })
        .optional(),
    page: Joi.number().optional(),
    limit: Joi.number().optional()
}

export const museumIdSchema = {
    id: Joi.string().hex().length(24).required()
}