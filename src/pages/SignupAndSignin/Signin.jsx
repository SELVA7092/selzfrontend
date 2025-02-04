import "./Signin.scss";
import { useState } from "react";
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import { storeToken } from "./Tokeninfo.jsx";

function Signup() {

 const [tok, setCookie ] = useCookies(['token'])
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
    
      userName: "",
      password: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Signup Data Submitted:", formData);
      // Handle signup logic (e.g., send data to an API)
      respond();
      
    }; 



    async function respond(){
      
      try {
      let res = await axios.post('http://localhost:8888/login',formData)
      if(res.status === 200){
       setCookie('token', res.data,{ path: '/', expires: new Date(Date.now() + 3600 * 1000) })
        //console.error(res.data);
        storeToken(res.data);
        alert("Signup login successful");
        navigate('/');
      
      }else{
        
        alert(res.status+"response : "+res);
      }
      } catch (error) {
        console.error(error);
      }
    }
  
  return (
    <div className="bodycontainer">
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">SignIn</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              id="email"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="signup-button">
            SignIn
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
export default Signup

