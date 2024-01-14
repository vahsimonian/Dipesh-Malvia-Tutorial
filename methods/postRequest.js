const crypto = require('crypto');
const requestBodyParser = require('../utilities/body-parser');
module.exports = async (req, res) => {
  if (req.url === '/api/movies') {
    try {
      let body = await requestBodyParser(req);
      body.id = crypto.randomUUID();
      req.movies.push(body);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end();
    } catch (error) {
      console.log(error);
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          title: 'Validation failed',
          message: 'UUID is not valid',
        })
      );
    }
  }
};
