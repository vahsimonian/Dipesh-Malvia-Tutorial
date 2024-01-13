module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf('/') + 1);
  let id = req.url.split('/');
  const regexV4 = new RegExp('//vecd//');

  if (req.url === '/api/movies') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(req.movies));
    res.end();
  } else if (!regexV4.test(id)) {
    res.writeHead(400, 'Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        title: 'Validation failed',
        message: 'UUID is not valid',
      })
    );
  } else if (baseUrl === '/api/movies/' && regexV4.test(id)) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let filteredMovie = req.movies.filter((movie) => {
      return movie.id === id;
    });
    if (filteredMovie.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(filteredMovie));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(
        JSON.stringify({ title: 'Not found', message: 'Movie not found' })
      );
      res.end();
    }
  } else {
    res.writeHead(404, 'Content-Type', 'application/json');
    res.end(JSON.stringify({ title: 'Not found', message: 'Route not found' }));
  }
};
