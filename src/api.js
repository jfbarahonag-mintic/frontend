const url = 'http://localhost:4000/api/'

const getProducts = () => {
  return fetch(`${url}products`)
}

module.exports = {
  getProducts
}