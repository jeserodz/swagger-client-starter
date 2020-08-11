const { ClientsApi } = require('./dist');

const api = new ClientsApi({
  basePath: 'https://generator3.swagger.io/api',
});

api
  .listOptions()
  .then(console.log)
  .catch(console.log);
