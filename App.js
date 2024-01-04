import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import MerchantLogin from './Component/MerchantLogin';
import MerchantSignUp from './Component/MerchantSignUp';
import MercahntHomePage from './Component/MerchantHomePage';
import UpdateMerchant from './Component/MerchantUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/merchantlogin" element={<MerchantLogin/>}/>
        <Route path='/merchantsignup' element={<MerchantSignUp/>}/>
        <Route path="/merchanthomepage/*" element={<MercahntHomePage/>}/>
        <Route path='/updatemerchant' element={<UpdateMerchant/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
