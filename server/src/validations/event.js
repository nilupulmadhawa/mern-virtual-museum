import { Joi } from 'celebrate'

export const addEventSchema = Joi.object({
    Event_Title: Joi.string().required(),
    Event_Image: Joi.string().required(),
    Event_Subtitle: Joi.string().required(),
    Start_Date: Joi.string().required(),
    Time: Joi.string().required(),
    Event_Category: Joi.string().required(),
    Event_Description: Joi.string().required(),
})

export const eventViewSchema = {
    filter: Joi.object()
        .keys({
            created_at: Joi.string().hex().length(24).optional(),
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

export const eventIdSchema = {
    id: Joi.string().hex().length(24).required()
}