const httpStatusMap = {
  SUCCESS: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INVALID_VALUE: 422,
};

const mapStatusHTTP = (status) => httpStatusMap[status] || 500;

module.exports = mapStatusHTTP;