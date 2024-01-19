const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const {
  productsFromDB,
  productsFromModel,
  productFromId,
  notExistProductFromDB,
  notExistProductFromModel,
} = require('../mocks/products.mock');

describe('Realizando testes - PRODUCTS MODEL', function () {
  it('Retornar os todos produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productsFromDB]);

    const products = await productModel.getAll();

    expect(products).to.be.an('array');
    expect(products).to.be.deep.equal(productsFromModel);
  });
  it('Retornar um produto pelo ID', async function () {
    sinon.stub(connection, 'execute').resolves([[productFromId]]);

    const productId = 2;
    const product = await productModel.findById(productId);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productFromId);
  });
  it('Retornar um erro caso o produto não exista', async function () {
    sinon.stub(connection, 'execute').resolves([[notExistProductFromDB]]);
    const productId = await productModel.findById(3);

    expect(productId).to.be.an('object');
    expect(productId).to.be.deep.equal(notExistProductFromModel);
  });

  afterEach(function () {
    connection.execute.restore();
  });
});