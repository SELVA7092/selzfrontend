import React from 'react';
import "./Navbar.scss";
import { IoManSharp } from "react-icons/io5";
import { MdBrightnessHigh } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdMenu } from "react-icons/md";
import profileImage from '../../../source/Profile-PNG-Photo.png';
import { useCookies } from 'react-cookie'
import axios from "axios";
import { useState } from 'react';
import { Value } from 'sass';

function Navbar() {

  const [cookies, setCookie, removeCookie] = useCookies()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [userDetails, setUserDetails] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
  });

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  React.useEffect(()=>{
    getUser();
  },[])

  const getUser = async() => {
    if (cookies.token!=undefined){
      
      try {
        let response = await axios.get('http://localhost:8888/user/getUserDetails', {headers: {'Authorization': 'Bearer '+cookies.token}})
       
        if (response.status === 200)
          setUserDetails({ userName: response.data.userName, email: response.data.email, phoneNumber: response.data.phoneNumber });
      } catch (e) {
        if(e.message === "Network Error")
          alert("Server is Not Working, please try again later....!")
        console.log("Error : "+e.message)
        
        if(e.message === "Request failed with status code 401")
          alert("Please Login")
        removeCookie('token');
      }
    }else{
      console.log('please login');
    }
  };

  React.useEffect(() => {console.log(userDetails)}, [userDetails])

  const logout = () => {
    removeCookie('token');
    setUserDetails({ userName: '', email: '', phoneNumber: '' });
  }


  const serchview=(value)=>{
    console.log(value);

  }

    return (
      <div className="bodytag">
        <div className="navbar">
          <div className="navleft">

           {cookies.token==undefined ? <div className="sign">
                <IoManSharp /><Link to={"/signin"}><a>Sign-In</a></Link> / <Link to={"/Signup"}><a>Sign-up</a></Link>
            </div>
            :
            <div className="profileViewContain"><a href="#" >Profile </a>
            <div className="profileView" style={{ display: `${userDetails.userName===''?'none':'flex'}` }}>
              <img src={profileImage} alt="Profile Pic" />
              <div className="profile-contain">
                <div className="profileusername">{userDetails.userName}</div>
                <div className="profileemail">{userDetails.email}</div>
                <div className="profilepho">{userDetails.phoneNumber}</div>
                <div className="butttonview"><button onClick={()=>logout()}>signout</button></div>
              </div>
            </div>
            </div>
             }   
            <div className="sign">
                <MdBrightnessHigh /><a href="#">Beauty Pass</a>
            </div>
           


                </div>
                <div className="navright">
                    <div className="sign">
                        <FaLocationDot /><a href="#">Stores & Events</a>
                    </div>
                    <div className="sign">
                        <FaHeart /> <a href="#">Wishlist</a>
                    </div>
                    <div className="sign">
                        <FaShoppingBag /><a href="#">Bag</a>
                    </div>
                    <div className="menu">
                        

                        <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MdMenu className="large-menu-icon" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>User</MenuItem>
        <MenuItem onClick={handleClose}>Monitor</MenuItem>
        <MenuItem onClick={handleClose}>Admin</MenuItem>
        
      </Menu>
    </div>

                       
                    </div>
                </div>

            </div>



            <div className="search">
                <p>SELZ</p>
                <div className="searchframe">
                   <div className="search-box">
                      <input type="text" placeholder='search hear...' onChange={e=>serchview(e.target.value)}/>
                   </div>
                   {/* <div className="search-result">
                     <div>A</div>
                     <div>A</div>
                     <div>A</div>
                     <div>A</div>
                   </div> */}
                </div>   
             </div>

            <div className="menus">
                <a className="menulist" href="#">NEW</a>
                <a className="menulist" href="#">BRAND</a>
                <a className="menulist" href="#">MAKEUP</a>
                <a className="menulist" href="#">SKINCARE</a>
                <a className="menulist" href="#">HAIR</a>
                <a className="menulist" href="#">TOOLS & BRUSHES</a>
                <a className="menulist" href="#">BOTH & BODY</a>
                <a className="menulist" href="#">FRAGRANCE</a>
                <a className="menulist" href="#">CLEAN</a>
                <a className="menulist" href="#">GIFT</a>
                <a className="menulist" href="#">SALE</a>
            </div>

        </div>
    );
}
    export default Navbar;