import React, {useState} from "react";
import axios from "axios";


function Login(){
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
    const hadleSave =(e) => {
        e.preventDefault();
        console.log(name, password)
    
    const url ='https://localhost:7172/api/Identity/Login'; 
    const data = {
      Username: name,
      Password: password
    }

    axios.post(url,data)
    .then((result) => {
      const dt = result.data;
    })
    .catch((error) =>{
      console.log(error);
    })
  }
    return(
<form>

  <div class="form-outline mb-4">
    <input 
        type="email" 
        id="form2Example1" 
        class="form-control" 
        onChange={(e) => setName(e.target.value)}
    />
    <label class="form-label" for="form2Example1">User Name</label>
  </div>


  <div class="form-outline mb-4">
    <input 
        type="password" 
        id="form2Example2" 
        class="form-control" 
        onChange={(e) => setPassword(e.target.value)}
    />
    <label class="form-label" for="form2Example2">Password
    </label>
  </div>


  <div class="row mb-4">
    <div class="col d-flex justify-content-center">

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
  
      <a href="#!">Forgot password?</a>
    </div>
  </div>


  <button 
    type="button" 
    class="btn btn-primary btn-block mb-4"
    onClick={(e) => hadleSave(e)}>Sign in</button>

  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
    )
}
export default Login;