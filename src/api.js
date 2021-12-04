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

// Categories
const getCategories = () => {
  return fetch(`${url}categories/`)
}

const getUsers = () => {
  return fetch(`${url}users/`)
}

const postUser = (data = {}) => {
  return fetch(`${url}users/add`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  //TODO: Check this
    //.then(res => res.json())
    //.catch(error => console.error('Error:', error))
    //.then(response => console.log('Success:', response));
}

const updateUser = (data = {}, id="") => {
  return fetch(`${url}users/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

module.exports = {
  // products
  getProducts,
  getProductBySlug,
  getProductsByCategory,
  // categories
  getCategories,
  // users
  getUsers,
  postUser,
  updateUser,
}