import { useState } from 'react';
import './Footer.scss';

function Footer(){
    const [color, setColor] = useState("black")
  const handleColor=()=>{
    setColor("red")
  }
return (

<div>
<hr />
      <div className="footer" >
        <div className="footerview">
          <div className="aboutus">ABOUT US </div>
          <div>About Sephora</div>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <div>Sitemap</div>
          <div>International</div>
        </div>
        
        <div className="footerview">
          <div className="aboutus">CUSTOMER CARE</div>
          
          <div onMouseEnter={handleColor} style={{color:`${color}`}}>FAQ</div>
          <div>Delivery</div>
          <div>Find a Store</div>
          <div>Beauty Services</div>
          <div>Contact Us</div>
        </div>
      </div>
      <hr />

      <div className="copyrig"><span> © 2024 Sephora India</span></div>
</div>



);

}
export default Footer;