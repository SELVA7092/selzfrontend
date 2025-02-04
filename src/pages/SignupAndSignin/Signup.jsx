import "./Signup.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signin() {

    const [formData, setFormData] = useState({
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Signup Data Submitted:", formData);
      // Handle signup logic (e.g., send data to an API)
      respond();
      alert("Signup successful! Check the console for submitted data.");
      navigate('/');
    }; 



     async function respond(){
      console.log(formData);
      try{
        let res=await axios.post("http://localhost:8888/register",formData)
         console.log("status :"+res.status);
          
        }catch(e) {
          console.log("error: " + e.message);
        }

      }

      

  
  return (
    <div className="bodycontainer">
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Signup</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
export default Signin;