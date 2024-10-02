import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Home from "./Home";
import axios from "axios";
import { setUserdetails } from "./Storage";
import { isAuthenticated } from "./Auth";

function LoginPage(){

    const navigate= useNavigate()
   const initialInputsValues = {email:"", password:""};
   const initialErrorValues={email : {required : false},
   password : {required : false},customError : null}

   const [errors,setErrors] = useState(initialErrorValues);
   const [inputs,setInputs]=useState(initialInputsValues);
   const [hasError,setHaserror]=useState(true)

   function handleChange(e){
    const {name,value} = e.target;
    setInputs({...inputs,[name]:value})
   }

   function handleSubmit(e){
    let hasErr =false;
    e.preventDefault();
   let errors = initialErrorValues;

   if(inputs.email === ""){
    errors.email.required = true;
    hasErr=true
   }
   if(inputs.password === ""){
    errors.password.required = true;
    hasErr=true
   }

   if(!hasErr){

    let url = 'http://127.0.0.1:5000/user/details/login';

    axios.post(url, {
        username:inputs.name,
        email:inputs.email,
        password:inputs.password
      }).then(function(response) {
        setUserdetails(response.data.accessToken)
      }).catch(function(error) {
        console.log(error);
      })
}

   setErrors({...errors})
   setHaserror(hasError)

   if(isAuthenticated){
    navigate('/dashboard')
  }

   }

    return(
        <>
       <div className="login-page">
      
        <form onSubmit={handleSubmit} className="form-login">
       <div className="form-snippet">
        <h3 className="login-text">Login Form</h3>
        &nbsp;
       <label htmlFor="email" className=""></label>
        <input type="email" name="email" className="email" id="email" onChange={handleChange} placeholder="Email" />
        {errors.email.required ? <div>Enter Your Email</div> : null}
        <br/>
        <br/>
        <label htmlFor="password"></label>
        <input type="password" name="password" className="password" id="password" onChange={handleChange} placeholder="Password" />
        {errors.password.required ? <div>Enter Your Password</div> : null}
        <br/>
        <br/>

        {errors.customError ? <div>{errors.customError}</div> : null}
        <br/>
        <br/>

        <button disabled={!hasError} className="submit-btn">Submit</button>
        <br/>
        <br/>
        <div>Create an Account ? <Link to="/">Register</Link></div>
       </div>
        </form>
       </div>
        </>
    )
}


export default LoginPage;