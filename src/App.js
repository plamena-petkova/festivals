import { Routes, Route  } from "react-router-dom";
import AddFestival from "./components/AddFestival/AddFestival";
import MyTickets from "./components/MyTickets/MyTickets";
import Festivals from "./components/Festivals/Festivals";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";




function App() {
  return (
    <>    
     <Header />
    <main>
    <Routes>
    <Route path="/" element={<Home />} />   
      <Route path="/home" element={<Home />} />   
      <Route path="/login" element={<Login />} />     
      <Route path="/register" element={<Register />} />
      <Route path="/add-festival" element={<AddFestival />} />
      <Route path="/festivals" element={<Festivals />} />
      <Route path="/my-tickets" element={<MyTickets />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </main>
    <Footer />
    
    </>

  );
}

export default App;
