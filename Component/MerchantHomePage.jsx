import { Route, Routes } from "react-router-dom";
import ProductDashoard from "./ProductDashoard";
import ProductNavbar from "./ProductNavbar";
import AddProducts from "./AddProducts";
import ProductUpdate from "./ProductUpdate";

const MercahntHomePage = () => {
    return ( 
        <div className="merchanthomepage">
            <ProductNavbar/>
            <Routes>
                <Route path="/" element={<ProductDashoard/>}/>
                <Route path="/addproduct" element={<AddProducts/>}/>
                <Route path="/updateproduct/:id" element={<ProductUpdate/>}/>
            </Routes>
        </div>
     );
}
 






















































export default MercahntHomePage;