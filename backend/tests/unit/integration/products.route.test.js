const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');
const connection = require('../../../src/models/connection');
const app = require('../../../src/app');
const { 
  productsFromDB,
  productsFromModel,
  productFromId,
  productFromIdModel,
} = require('../mocks/products.mock');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);

describe('Realizando testes - PRODUCTS ROUTE', function () {
  it('Recuperando todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productsFromDB]);

    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(productsFromModel);
  });

  it('Retornando produto pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[productFromId]]);

    const response = await chai.request(app).get('/products/3');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(productFromIdModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});