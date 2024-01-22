const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products ORDER BY id ASC',
  );
  return products;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return product;
};

const insertNewProduct = async (name) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO products (name) VALUES (?)', [name]);
  return { id: insertId, name };
};

const updateProduct = async (productId, name) => {
  await connection
    .execute('UPDATE products SET name = ? WHERE id = ?', [name, productId]);
  return { id: Number(productId), name };
};

const deleteProduct = async (productId) => {
  const deletId = await connection
    .execute(`
    DELETE FROM products WHERE id = ?`, [productId]);
  return { id: Number(deletId) };
};

module.exports = {
  getAll,
  findById,
  insertNewProduct,
  updateProduct,
  deleteProduct,
};