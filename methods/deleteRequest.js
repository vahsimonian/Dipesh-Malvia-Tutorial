module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastOfIndex('/') + 1);
  let id = new RegExp('//vecd//');

  if (regexV4.test(id)) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        title: 'Validation Failed',
        message: 'UUID is not valid',
      })
    );
  }
};
