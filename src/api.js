const url = 'http://localhost:4000/api/'

const getProducts = () => {
  return fetch(`${url}products`)
}

const getProductBySlug = (slug) => {
  return fetch(`${url}products/show/slug/${slug}`)
}

const getProductsByCategory = (id) => {
  return fetch(`${url}products/category/${id}`)
}

module.exports = {
  getProducts,
  getProductBySlug,
  getProductsByCategory
}