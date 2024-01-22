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

  it('Verifica se a função createSale insere uma venda', async function () {
    sinon.stub(connection, 'execute')
      .onFirstCall()
      .resolves([{ insertId: 4 }])
      .onSecondCall()
      .resolves([]);

    const inputSale = [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 6 },
    ];

    const insertSale = await salesModel.createSale(inputSale);

    expect(insertSale).to.be.an('object');
    expect(insertSale).to.be.deep.equal({ id: 4, itemsSold: inputSale });
  });

  afterEach(function () {
    sinon.restore();
  });
});