const { productSchema, addnewSaleSchema } = require('./schemas');

const validateNewProduct = (objectKey) => {
  const { error } = productSchema.validate(objectKey);

  if (error) {
    return { status: error.message.includes('characters')
      ? 'INVALID_VALUE' 
      : 'BAD_REQUEST', 
    message: error.message };
  }
};

const validateNewSale = (objectKey) => {
  const { error } = addnewSaleSchema.validate(objectKey);

  if (error) {
    return { status: error.message.includes('required')
      ? 'BAD_REQUEST' 
      : 'INVALID_VALUE',
    message: error.message };
  }
};

module.exports = {
  validateNewProduct,
  validateNewSale,
};