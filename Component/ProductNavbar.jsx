import { Link } from "react-router-dom";
import '../Styles/ProductNavbar.css'
const ProductNavbar = () => {
    return ( 
        <div className="pnavbar">
            <div className="logo">
                <h1>Shop<span>It</span></h1>
            </div>
            <div className="options">
            <Link to="/merchanthomepage/addproduct">Add Product</Link>
           
            <Link to="/">Logout</Link>
            </div>
        </div>
     );
}
 
export default ProductNavbar;