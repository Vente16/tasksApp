
 
export default  {
     
  validateSesion: () =>{
    let session = (localStorage.getItem("Logged")) ? true: false;
    return session;
  },

  login: (email, pass) =>{
      
    let valid = false;
      if (email == 'jvente18@gmail.com' && pass == '123') {
        valid = true;
      }
    return valid;
  }





};