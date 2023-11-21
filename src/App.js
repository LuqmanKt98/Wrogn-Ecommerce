import LandingPage from "./Components/LandingPage";
import Prodcuts from "./Components/Products"

import { Route, Routes } from "react-router-dom";
import AdminPanel from "./Components/Dashboard/AdminPanel";
// import Add from "./Components/Dashboard/Add";
import RegistrationForm from "./Components/RegistraionForm";
import Cart from "./Components/Cart";
import BadgeState from "./Context/BadgeState";
import CartState from "./Context/CartState";
import SignIn from "./Components/SignIn";
import AboutUs from "./Components/AboutUs";
import Faqs from "./Components/Faqs";
import ContactUs from "./Components/ContactUs";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Shipping from "./Components/Shipping";
import Cancellation from "./Components/Cancellation";
import ReturnRefundPolicy from "./Components/ReturnRefundPolicy";



function App() {
  return (
      <>

       <BadgeState>

      <CartState>
      <Routes>
        
       <Route path="/" element={<LandingPage/>}></Route>
       <Route path="/products" element={<Prodcuts/>} ></Route>
       <Route path="/shirt" element={<Prodcuts/>} ></Route>
       <Route path="/jeans" element={<Prodcuts/>} ></Route>
       <Route path="/t-shirt" element={<Prodcuts/>} ></Route>
       <Route path="/AdminPanel" element={<AdminPanel/>} ></Route>
       <Route path="/register" element={<RegistrationForm/>} ></Route>
       <Route path="/cart" element={<Cart/>} ></Route>
       <Route path="/login" element={<SignIn/>} ></Route>
       <Route path="/about-us" element={<AboutUs/>} ></Route>
       <Route path="/faqs" element={<Faqs/>} ></Route>
       <Route path="/contact-us" element={<ContactUs/>} ></Route>
       <Route path="/privacy-policy" element={<PrivacyPolicy/>} ></Route>
       <Route path="/Shipping" element={<Shipping/>} ></Route>
       <Route path="/Cancellation" element={<Cancellation/>} ></Route>
       <Route path="/return-refund-policy" element={<ReturnRefundPolicy/>} ></Route>

      </Routes>

      </CartState>
      </BadgeState>

      </>
  );
}

export default App;
