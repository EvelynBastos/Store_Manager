const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
const {
  salesSuccess, 
  salesFromModel,
  salesIdFromModel,
  salesIdSuccess,
  salesMessageModel,
  salesUnsuccessful,
  insertSaleFromService,
  insertSaleFromModel,
} = require('../mocks/sales.mock');

chai.use(sinonChai);

describe('Realizando teste - SALES CONTROLLER', function () {
  it('Retorna todas as vendas com status de sucesso', async function () {
    sinon.stub(salesService, 'getAll').resolves(salesSuccess);

    const req = {
      params: {},
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesFromModel);
  });

  it('Retorna uma venda pelo id com status de sucesso', async function () {
    sinon.stub(salesService, 'findById').resolves(salesIdSuccess);

    const req = {
      params: { id: 2 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesIdFromModel);
  });

  it('Retorna uma venda com status de erro caso ela não exista', async function () {
    sinon.stub(salesService, 'findById').resolves(salesUnsuccessful);

    const req = {
      params: { id: 10 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(salesMessageModel);
  });

  it('Retorna nova venda', async function () {
    sinon.stub(salesService, 'createSale').resolves(insertSaleFromService);

    const req = {
      params: {},
      body: [
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 6 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.createSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(insertSaleFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});