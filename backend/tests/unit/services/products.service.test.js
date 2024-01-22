const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const {
  productsFromDB, 
  productsFromModel, 
  productFromIdModel, 
  notExistProductFromModel, 
  productFromId,
  schemaNameValidationMessage,
  createdProductFromService,
  createdProductFromDB,
  // createdProductFromDB,
  // createdProductFromService,
} = require('../mocks/products.mock');
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

  it('Retornar um novo produto', async function () {
    sinon.stub(productModel, 'insertNewProduct').resolves(createdProductFromDB);

    const newProduct = 'Anel do Lanterna Verde';
    const servicesResp = await productsService.insertNewProduct(newProduct);

    expect(servicesResp.status).to.equal('CREATED');
    expect(servicesResp.data).to.be.deep.equal(createdProductFromService);
  });

  it('Retornar mensagem de erro caso o nome do produto seja menor que 5 caracteres', async function () {
    sinon.stub(productModel, 'insertNewProduct').resolves(undefined);

    const servicesResp = await productsService.insertNewProduct('no');

    expect(servicesResp.status).to.equal('INVALID_VALUE');
    expect(servicesResp.data).to.be.deep.equal(schemaNameValidationMessage);
  });

  it('Atualizar um produto', async function () {
    sinon.stub(productModel, 'updateProduct').resolves({ id: 3, name: 'Máscara do Homem de Ferro' });
    sinon.stub(productModel, 'findById').resolves({ id: 3, name: 'Brinquedo para criança' });

    const name = 'Máscara do Homem de Ferro';
    const id = 3;
    const servicesResp = await productsService.updateProduct(id, name);

    expect(servicesResp.status).to.equal('SUCCESS');
    expect(servicesResp.data).to.be.deep.equal({ id: 3, name: 'Máscara do Homem de Ferro' });
  });

  it('Não atualizar um produto não encontrado', async function () {
    sinon.stub(productModel, 'updateProduct').resolves(undefined);
    sinon.stub(productModel, 'findById').resolves(undefined);

    const name = 'Máscara do Homem de Ferro';
    const id = 100;
    const servicesResp = await productsService.updateProduct(id, name);

    expect(servicesResp.status).to.equal('NOT_FOUND');
    expect(servicesResp.data).to.be.deep.equal({ message: 'Product not found' });
  });

  it('Deletar um produto', async function () {
    sinon.stub(productModel, 'deleteProduct').resolves({ id: 1, name: 'Martelo de Thor' });
    sinon.stub(productModel, 'findById').resolves({ id: 1, name: 'Martelo de Thor' });

    const inputId = 1;
    const serviceResponse = await productsService.deleteProduct(inputId);

    expect(serviceResponse.status).to.equal('NO_CONTENT');
    expect(serviceResponse.data).to.be.deep.equal({ id: 1, name: 'Martelo de Thor' });
  });

  afterEach(function () {
    sinon.restore();
  });
});