import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductUpdate = () => {
    let [name,setname] = useState("")
    let [brand,setbrand] = useState("")
    let [category,setcategory] = useState("")
    let [image_url,setimageurl] = useState("")
    let [cost,setcost] = useState("")
    let [description,setdescrption] = useState("")

    let param = useParams()

    useEffect(()=>{        
    axios.get(`http://localhost:8080/products/${param.id}`)
    .then((res)=>{
        console.log(res.data);
        setname(res.data.data.name)
        setbrand(res.data.data.brand)
        setdescrption(res.data.data.description)
        setcost(res.data.data.cost)
        setimageurl(res.data.data.image_url)

    })
    .catch((err)=>{
        console.log(err);
    })
        },[])

    return ( 
        <div className="productUpdate">
             <form  action="">
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
 
export default ProductUpdate;