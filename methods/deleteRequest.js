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
  } else if (baseUrl === '/api/movies/' && regexV4.test(id)) {
    const index = req.movies.findIndex((movie) => {
      return movie.id === id;
    });
    if (index === -1) {
      res.statusCode = 404;
      res.write({ title: 'Not found', message: 'Movie not found' });
    }
    res.end();
  }
};
