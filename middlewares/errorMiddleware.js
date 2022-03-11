module.exports = (error, _req, res, _next) => {
  console.log(error.message);
  
  return res.status(500).json('Deu Ruim...');
};