const { expect } = require('chai');
const sinon = require('sinon');
const { salesService } = require('../../../src/services');
const { salesFromDB, 
  salesFromModel,
  salesIdFromDB,
  salesIdFromModel,
  salesMessageModel,
} = require('../mocks/sales.mock');
const { salesModel } = require('../../../src/models');

describe('Realizando teste - SALES SERVICE', function () {
  it('Verifica se a função retorna todas as vendas', async function () {
    sinon.stub(salesModel, 'getAll').resolves(salesFromDB);

    const saleServiceResponse = await salesService.getAll();

    expect(saleServiceResponse.status).to.equal('SUCCESS');
    expect(saleServiceResponse.data).to.deep.equal(salesFromModel);
  });

  it('Verifica se é possível listar uma venda pelo id', async function () {
    sinon.stub(salesModel, 'findById').resolves(salesIdFromDB);

    const inputSale = 2;
    const saleServiceResponse = await salesService.findById(inputSale);

    expect(saleServiceResponse.status).to.equal('SUCCESS');
    expect(saleServiceResponse.data).to.deep.equal(salesIdFromModel);
  });

  it('Verifica que não é possível listar uma venda inexistente', async function () {
    sinon.stub(salesModel, 'findById').resolves(undefined);

    const inputSale = 850;
    const saleServiceResponse = await salesService.findById(inputSale);
    
    expect(saleServiceResponse.status).to.equal('NOT_FOUND');
    expect(saleServiceResponse.data).to.deep.equal(salesMessageModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});