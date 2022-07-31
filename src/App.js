import { Routes, Route  } from "react-router-dom";
import AddFestival from "./components/AddFestival/AddFestival";
import MyFestival from "./components/MyFestival/MyFestival";
import Festivals from "./components/Festivals/Festivals";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";
import Parse from 'parse/dist/parse.min.js';
import Logout from "./components/Logout/Logout";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import PrivateRoute from "./components/common/privateRoute/privateRoute";
import Notification from "./components/common/notification/Notification";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import NotFound from "./components/NotFound/NotFound";





const PARSE_APPLICATION_ID = 'N7Xz8vuxjzsKbiffxZeYoXrjo7nBno2e3pksZnai';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'aLbkqUoj7IW2es6QQwiMLdxa9Ly8MYY4UhLqE3dO';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;



function App() {

  return (
    <>    

   <AuthProvider>
    <NotificationProvider>
     <Header />
     <Notification />
    <main>
    <Routes>
    <Route path="/" element={<Home />} />   
      
      <Route path="/home" element={<Home />} />   
      <Route path="/login" element={<Login />} />     
      <Route path="/register" element={<Register />} />
      
      <Route path="/festivals" element={<Festivals />} />
      <Route path="/festivals/:festivalId" element={<Details />} />
      
      <Route element={<PrivateRoute />}>
              <Route path="/add-festival" element={(<AddFestival />)} />
              <Route path="/edit/:festivalId" element={(<Edit />)} />
              <Route path="/my-profile" element={(<MyFestival />)} />
              <Route path="/cart/:userId" element={(<Cart />  )} />
              <Route path="/logout" element={<Logout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes> 
    </main>
    <Footer />
    </NotificationProvider>
    </AuthProvider>
    </>

  );
}

export default App;
