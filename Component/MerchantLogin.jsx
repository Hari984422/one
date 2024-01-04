import { useState } from "react";
import "../Styles/MerchantLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const MerchantLogin = () => {
  let [email, setemai] = useState("");
  let [password, setpassword] = useState("");
  let navigate = useNavigate()

  let checkEmail = () => {
    if(email =="abcd@gmail"  && password == 1234){
      navigate('/merchanthomepage')
      alert("Login Successful")
    }else{
      alert("Invalid Credentials")
    }
    
    // axios
    //   .post(
    //     `http://localhost:1000/Merchant/?email=${email}&password=${password}`
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     alert("Login Was successfull");
    //     navigate("/merchanthomepage")
    //     localStorage.setItem("currentMerchant",JSON.stringify(res.data.data))
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Invalid Username and Password");
    //   });
  };
  return (
    <div className="merchantlogin">
      <form onSubmit={checkEmail} action="">
        <label htmlFor="">
          Email :
          <input value={email} onChange={(e) => { setemai(e.target.value);}} type="email" required placeholder="Enter the UserName"/>
        </label>
        <br />
        <label htmlFor="">
          Password :
          <input value={password} onChange={(e) => {   setpassword(e.target.value); }} type="password" required placeholder="Enter the Password"/>
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default MerchantLogin;
