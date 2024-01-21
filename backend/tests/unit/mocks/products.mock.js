const productsFromDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
];

const productsFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
];

const productFromId = {
  id: 3,
  name: 'Escudo do Capitão América',
};

const productFromIdModel = {
  id: 3,
  name: 'Escudo do Capitão América',
};

const notExistProductFromDB = {
  message: 'Product not found',
};

const notExistProductFromModel = {
  message: 'Product not found',
};

const productsFromServiceSuccess = {
  status: 'SUCCESS',
  data: productsFromModel,
};

const productsFromServiceSuccessful = {
  status: 'SUCCESS',
  data: productFromIdModel,
};

const productsFromServiceNotFound = {
  status: 'NOT_FOUND',
  data: notExistProductFromModel,
};

const newProductFromDB = { id: 4, name: 'Anel do Lanterna Verde' };

const newProductFromService = { id: 4, name: 'Anel do Lanterna Verde' };

const newProductIdFromDB = { insertId: 4 };

const createdProductFromDB = {
  status: 'CREATED',
  data: newProductFromDB,
};

const createdProductFromService = {
  status: 'CREATED',
  data: newProductFromService,
};

const schemaNameMessage = {
  message: '"name" is required',
};

const createdProductFromServiceUnsuccess = {
  status: 'BAD_REQUEST',
  data: schemaNameMessage,
};

const schemaNameValidationMessage = {
  message: '"name" length must be at least 5 characters long',
};

module.exports = {
  productsFromDB,
  productsFromModel,
  productFromId,
  productFromIdModel,
  notExistProductFromDB,
  notExistProductFromModel,
  productsFromServiceSuccess,
  productsFromServiceSuccessful,
  productsFromServiceNotFound,
  newProductFromDB,
  newProductIdFromDB,
  newProductFromService,
  createdProductFromDB,
  createdProductFromService,
  createdProductFromServiceUnsuccess,
  schemaNameValidationMessage,
};