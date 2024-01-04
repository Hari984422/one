import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/ProductDashBoard.css";
import { useNavigate } from "react-router-dom";
const ProductDashoard = () => {
  // let x = localStorage.getItem("currentMerchant")
  // let admin = JSON.parse(x)
  let [data, setdata] = useState([]);
  let navigate = useNavigate()


  let updItem = (id) =>{
    navigate(`/merchanthomepage/updateproduct/${id}`)
  }


  let DeleteProduct =(id,name) =>{
    axios.delete(`http://localhost:8080/products/${id}`)
    .then((res) => {
      console.log(res.data);
     alert(`${name} has been deleted`)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:1000/Products`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);





  
  return (
    <div className="dashboard">
      {data.map((x) => {
        return (
          <div className="productslist">
            <div className="im_age">
              <span id="dd1">{x.category}</span>
              <img src={x.img} alt="" />
            </div>
          

            <div className="details">
              <p>
                {x.name} by <b>{x.brand}</b>
              </p>
              <span>
                MRP :<strike>{x.cost}</strike>
              </span>
              <br />
              <span>
                Discount Price: {x.cost - x.cost * 0.5} <b>$</b>{" "}
              </span>
              <br />
              <span>
                Desciption : <i>{x.description}</i>
              </span>
              <button onClick={()=>{updItem(x.id)}}>Edit</button>




              
              <img id="remicon"  onClick={()=>{DeleteProduct(x.id,x.name)}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGimjlcRrO73BDoAhnhFrXgTfmf9l3eRWHJO0W1QhrJg&s" alt="" />
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default ProductDashoard;
