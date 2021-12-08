import jwt_decode from "jwt-decode";


const getUserFromToken = () => {

  if ( localStorage.getItem('token') ) {

    let user = jwt_decode( localStorage.getItem('token'))

    if ( user.name ) {
      user = { 
        ...user,
        logged: true 
      }
    }

    return user
  }
  else {

    return { logged: false }
  }  
}

export default getUserFromToken