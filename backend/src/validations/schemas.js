const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required().min(5),
});

const saleSchema = Joi.object({
  productId: Joi
    .number()
    .required()
    .integer()
    .min(1)
    .messages({
      'number.min': 'Product not found',
      'any.required': '"productId" is required' }),

  quantity: Joi
    .number()
    .required()
    .integer()
    .min(1)
    .messages({
      'number.min': '"quantity" must be greater than or equal to 1',
      'any.required': '"quantity" is required' }),
});

const addnewSaleSchema = Joi.array().items(saleSchema);
    
module.exports = {
  productSchema,
  addnewSaleSchema,
};