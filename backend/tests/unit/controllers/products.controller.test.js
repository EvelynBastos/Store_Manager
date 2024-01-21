const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { productsService } = require('../../../src/services');

chai.use(sinonChai);

const { productController } = require('../../../src/controllers');
const { 
  productsFromServiceSuccess, 
  productsFromModel, 
  productsFromServiceSuccessful,
  productFromIdModel,
  productsFromServiceNotFound,
  notExistProductFromModel,
  newProductFromService,
  createdProductFromService,
} = require('../mocks/products.mock');

describe('Realizando testes - PRODUCTS CONTROLLER', function () {
  it('Retorna a lista de produtos com sucesso', async function () {
    sinon.stub(productsService, 'getAll').resolves(productsFromServiceSuccess);

    const req = {
      params: {},
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsFromModel);
  });

  it('Retornar um produto com sucesso pelo id', async function () {
    sinon.stub(productsService, 'findById').resolves(productsFromServiceSuccessful);

    const req = {
      params: { id: 2 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productFromIdModel);
  });

  it('Retornar um erro ao buscar um produto que não existe', async function () {
    sinon.stub(productsService, 'findById').resolves(productsFromServiceNotFound);

    const req = {
      params: { id: 30 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(notExistProductFromModel);
  });

  it('Criar um novo produto', async function () {
    sinon.stub(productsService, 'insertNewProduct').resolves(createdProductFromService);

    const req = {
      params: {},
      body: { name: 'Anel do Lanterna Verde' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.insertNewProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProductFromService);
  });

  afterEach(function () {
    sinon.restore();
  });
});