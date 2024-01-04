import { Link } from "react-router-dom";
import '../Styles/MerchantNavbar.css'
const MerchantNavbar = () => {
    return ( 
        <div className="merchantNavbar">
            <div className="logo">
                <h1>Shop<span>It</span></h1>
            </div>
            <div className="options">
            <Link to="/merchantlogin">Log in</Link>
            <Link to="/merchantsignup">Sign up</Link>
            <Link to="/updatemerchant">Update Merchant</Link>
            <Link to="/">Logout</Link>
            </div>
        </div>
     );
}
 
export default MerchantNavbar;