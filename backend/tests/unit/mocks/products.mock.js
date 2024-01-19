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
  id: 2,
  name: 'Traje de encolhimento',
};

const productFromIdModel = {
  id: 2,
  name: 'Traje de encolhimento',
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
};