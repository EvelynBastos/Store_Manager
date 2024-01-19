const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsFromDB, 
  productsFromModel, 
  productFromIdModel, 
  notExistProductFromModel, 
  productFromId } = require('../mocks/products.mock');
const { productModel } = require('../../../src/models');

describe('Realizando testes - PRODUCTS SERVICE', function () {
  it('Retornar todos os produtos com status success', async function () {
    sinon.stub(productModel, 'getAll').resolves(productsFromDB);

    const servicesResp = await productsService.getAll();

    expect(servicesResp.status).to.equal('SUCCESS');
    expect(servicesResp.data).to.be.deep.equal(productsFromModel);
  });

  it('Retornar um produto pelo ID com status success', async function () {
    sinon.stub(productModel, 'findById').resolves(productFromId);

    const inputData = 2;
    const servicesResp = await productsService.findById(inputData);

    expect(servicesResp.status).to.equal('SUCCESS');
    expect(servicesResp.data).to.be.deep.equal(productFromIdModel);
  });

  it('Retornar mensagem de erro caso o produto não exista', async function () {
    sinon.stub(productModel, 'findById').resolves(undefined);

    const serviceId = 50;
    const servicesResp = await productsService.findById(serviceId);

    expect(servicesResp.status).to.equal('NOT_FOUND');
    expect(servicesResp.data).to.be.deep.equal(notExistProductFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});