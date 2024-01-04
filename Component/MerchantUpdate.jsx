import { useEffect, useState } from 'react'
import '../Styles/UpdateMerchant.css'
import axios from 'axios'
const UpdateMerchant = () => {
    let [name,setname] = useState("")
    let [phone,setphone] = useState("")
    let [email,setemail] = useState("")
    let [gst,setgst] = useState("")
    let [password,setpassword] = useState("")



  //  let  x =  localStorage.getItem("currentMerchant")
  //  let admin =  JSON.parse(x)
  //   console.log(admin);
    let adminData = {name,phone,email,gst,password}

   let updateAdmin = (e) =>{
    e.preventDefault()
    axios.put(`http://localhost:1000/Merchant/1`,adminData)
    .then((res)=>{
      console.log(res);
      alert("data Updated Successfully")
    })
    .catch((err)=>{
      console.log(err);
      alert("Invalid Error")
    })
   }


    useEffect(()=>{
        axios.get(`http://localhost:1000/Merchant/1`)
    .then((res)=>{
        console.log(res.data);
        setname(res.data.name)
        setemail(res.data.email)
        setgst(res.data.gst)
        setpassword(res.data.password)
        setphone(res.data.phone)
        
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])
    return ( 
        <div className="merchantsiginup">
             <form onSubmit={updateAdmin} action="">
        <fieldset>
          <legend>Edit Signup</legend>
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
}
 
export default UpdateMerchant;