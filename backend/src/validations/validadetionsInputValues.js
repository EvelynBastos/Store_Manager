const { productSchema } = require('./schemas');

const validateNewProduct = (objectKey) => {
  const { error } = productSchema.validate(objectKey);

  if (error) {
    return { status: error.message.includes('characters')
      ? 'INVALID_VALUE' 
      : 'BAD_REQUEST', 
    message: error.message };
  }
};

module.exports = {
  validateNewProduct,
};