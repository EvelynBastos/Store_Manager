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
  newProductFromService,
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
  it('Criar um novo produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const inputNewProduct = 'Anel do Lanterna Verde';
    const newProduct = await productModel.insertNewProduct(inputNewProduct);

    expect(newProduct).to.be.an('object');
    expect(newProduct).to.be.deep.equal(newProductFromService);
  });

  it('Atualizar um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const name = 'Máscara do Homem de Ferro';
    const id = 3;
    const newProduct = await productModel.updateProduct(id, name);

    expect(newProduct).to.be.an('object');
    expect(newProduct).to.be.deep.equal({ id, name });
  });

  it('Remove um produto', async function () {
    const mocked = sinon.stub(connection, 'execute').resolves(undefined);

    const inputId = 3;
    await productModel.deleteProduct(inputId);

    sinon.assert.calledOnce(mocked);

    expect(mocked.called).to.be.equal(true);
  });

  afterEach(function () {
    connection.execute.restore();
  });
});