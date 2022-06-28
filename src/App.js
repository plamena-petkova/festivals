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
import Parse from 'parse/dist/parse.min.js';
import Logout from "./components/Logout/Logout";
// import { useState } from "react";
import { AuthContex } from "./context/AuthContext";
import Details from "./components/Details/Details";
// import FestivalCard from "./components/Festivals/FestivalsCard";



const PARSE_APPLICATION_ID = 'N7Xz8vuxjzsKbiffxZeYoXrjo7nBno2e3pksZnai';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'aLbkqUoj7IW2es6QQwiMLdxa9Ly8MYY4UhLqE3dO';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;



function App() {

  // const [] = useState([]);

  // const onLogin = (authData) => {
  //   console.log(authData);
  // }


  return (
    <>    
    <AuthContex.Provider value={true}>
   
     <Header />
    <main>
    <Routes>
    <Route path="/" element={<Home />} />   
      <Route path="/home" element={<Home />} />   
      <Route path="/login" element={<Login />} />     
      <Route path="/register" element={<Register />} />
      <Route path="/add-festival" element={<AddFestival />} />
      <Route path="/festivals" element={<Festivals />} />
      <Route path="/festivals/:festivalId" element={<Details />} />
      <Route path="/my-tickets" element={<MyTickets />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/logout" element={<Logout />} />
    </Routes> 
    </main>
    <Footer />
    </AuthContex.Provider>
    </>

  );
}

export default App;
