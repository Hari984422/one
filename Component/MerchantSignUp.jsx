import { useState } from "react";
import "../Styles/MerchantSignUp.css";
import axios from "axios";
const MerchantSignUp = () => {
  let [name,setname] = useState("")
  let [phone,setphone] = useState("")
  let [email,setemail] = useState("")
  let [gst,setgst] = useState("")
  let [password,setpassword] = useState("")

  let data = {name,phone,email,gst,password}

  let signUp = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:1000/Merchant',data)
    .then((res)=>{
      console.log(res);
      alert("Data Added Succesfully")
    })
    .catch((err)=>{
      alert("404 Error")
      console.log(err);
    })
  }
  return (
    <div className="merchantsiginup">
      <form onSubmit={signUp} action="">
        <fieldset>
          <legend>Sign Up</legend>
          <label htmlFor="">
            Name : <input value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter the User Name" type="text" />
          </label>
          <br />
          <label htmlFor="">
            Phone : <input value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder="Enter the Phone Number" type="text" />
          </label>
          <br />
          <label htmlFor="">
            Email : <input value={email} onChange={(e)=>{setemail(e.target.value)}}  type="text" placeholder="Enter the Email" />
          </label>
          <br />
          <label htmlFor="">
            GST : <input value={gst} onChange={(e)=>{setgst(e.target.value)}}  placeholder="Entert the GST" type="text" />
          </label>
          <br />
          <label htmlFor="">
            Password : <input value={password} onChange={(e)=>{setpassword(e.target.value)}}  type="text" placeholder="Enter the Password" />
          </label>
          <button>Sign Up</button>
        </fieldset>
      </form>
    </div>
  );
};

export default MerchantSignUp;
