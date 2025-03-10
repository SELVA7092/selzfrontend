import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Signup from './pages/SignupAndSignin/Signup';
import Signin from './pages/SignupAndSignin/Signin';
import SingleProducts from './pages/Products/Singleproduct';
import Overallproduct from './pages/Products/OverallProduct';


function App() {
  return (
    <BrowserRouter >
            <Routes >
                <Route path="/" element={< Home />} />
                <Route path="/Signup" element={< Signup />} />
                <Route path="/Signin" element={< Signin />} />
                <Route path="/product/:productid" element={<SingleProducts />} />
                <Route path="/product/SearchList/:searchname" element={<Overallproduct />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
