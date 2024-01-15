const requestBodyParser = require('../utilities/body-parser');
const writeToFile = require('../utilities/write-to-file');
module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf('/') + 1);
  let id = req.url.split('/')[3];
  const regexV4 = new RegExp(
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89ABab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
  );
};
