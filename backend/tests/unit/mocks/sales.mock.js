const theDate = '2024-01-17T20:28:07.000Z';

const salesFromDB = [
  {
    saleId: 1,
    date: theDate,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: theDate,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: theDate,
    productId: 3,
    quantity: 15,
  },
];

const salesFromModel = [
  {
    saleId: 1,
    date: theDate,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: theDate,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: theDate,
    productId: 3,
    quantity: 15,
  },
];

const salesIdFromDB = [
  {
    date: 'theDate',
    productId: 1,
    quantity: 5,
  },
];

const salesIdFromModel = [
  {
    date: 'theDate',
    productId: 1,
    quantity: 5,
  },
];

const salesMessageDB = {
  message: 'Sale not found',
};

const salesMessageModel = {
  message: 'Sale not found',
};

const salesSuccess = {
  status: 'SUCCESS',
  data: salesFromModel,
};

const salesIdSuccess = {
  status: 'SUCCESS',
  data: salesIdFromModel,
};

const salesUnsuccessful = {
  status: 'NOT_FOUND',
  data: salesMessageModel,
};

const insertSaleFromModel = {
  id: 6,
  itemsSold: [
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 6 },
  ],
};

const insertSaleFromService = {
  status: 'CREATED',
  data: insertSaleFromModel,
};

module.exports = {
  salesFromDB,
  salesFromModel,
  salesIdFromDB,
  salesIdFromModel,
  salesMessageDB,
  salesMessageModel,
  salesSuccess,
  salesIdSuccess,
  salesUnsuccessful,
  insertSaleFromModel,
  insertSaleFromService,
};