import axios from "axios";
import { useState } from "react";

const AddProducts = () => {
    let [name,setname] = useState("")
    let [brand,setbrand] = useState("")
    let [category,setcategory] = useState("")
    let [image_url,setimageurl] = useState("")
    let [cost,setcost] = useState("")
    let [description,setdescrption] = useState("")
    
    let admin = JSON.parse(localStorage.getItem("currentMerchant"))

    let data = {name,brand,category,image_url,cost,description}

    let addData = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8080/products/${admin.id}`,data)
    .then((res)=>{
        alert("Data Added Succesfully")
        console.log(res);
    })
    .catch((err)=>{
        alert("Invalid Data Format")
        console.log(err);
    })

    }
    return (
        <div className="addproduct">
            <form onSubmit={addData} action="">
            <label htmlFor="">
                    Name: <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="Enter the Product Name" />
                </label>
                <br /><br />  <label htmlFor="">
                    Brand: <input  value={brand} onChange={(e)=>{setbrand(e.target.value)}} type="text" placeholder="Enter the Product Brand" />
                </label>
                <br /><br />
                <label htmlFor="">
                    Category: <input  value={category} onChange={(e)=>{setcategory(e.target.value)}} type="text" placeholder="Enter the Product category" />
                </label>
                <br /><br />
                <label htmlFor="">
                    Description: <input  value={description} onChange={(e)=>{setdescrption(e.target.value)}} type="text" placeholder="Enter the Product Description" />
                </label>
                <br /><br />
                <label htmlFor="">
                    Thumbnail url: <input  value={image_url} onChange={(e)=>{setimageurl(e.target.value)}} type="text" placeholder="Enter the Product Thumbnail url" />
                </label>
                <br /><br />
                <label htmlFor="">
                    Price: <input  value={cost} onChange={(e)=>{setcost(e.target.value)}} type="text" placeholder="Enter the Product Price" />
                </label>
                <br /><br />
            <button>Add Product</button>
                
            </form>

        </div> 
     );
}
 
export default AddProducts;