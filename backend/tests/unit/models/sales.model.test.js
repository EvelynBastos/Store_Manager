const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { salesFromDB,
  salesFromModel,
  salesIdFromDB,
  salesIdFromModel,
} = require('../mocks/sales.mock');

describe('Realizando teste - SALES MODEL', function () {
  it('Verifica se a função retorna todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([salesFromDB]);

    const sales = await salesModel.getAll();
    expect(sales).to.be.deep.equal(salesFromModel);
  });

  it('Verifica se a função id retorna a venda', async function () {
    sinon.stub(connection, 'execute').resolves([salesIdFromDB]);

    const sale = await salesModel.findById(1);

    expect(sale).to.be.an('array');
    expect(sale).to.be.deep.equal(salesIdFromModel);
  });

  it('Verifica se não retorna venda inexistente', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const salesMessage = await salesModel.findById(100);

    expect(salesMessage).to.be.an('array');
    expect(salesMessage).to.be.deep.equal([]);
  });

  afterEach(function () {
    sinon.restore();
  });
});