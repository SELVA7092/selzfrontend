import Navbar from "../Home/Navbar/Navbar.jsx";
//import { prodetail } from "../assets/swiperpro.jsx";

import Footer from "../Home/Footer/Footer.jsx";
import "./Singleproduct.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from 'react';


function SingleProducts() {
    const { productid } = useParams();  // Get productid from the URL
    let productId = productid;
    const [product, setProduct] = useState({});
    
    useEffect(() => {
      document.getElementById('product').scrollIntoView({behavior: 'instant', block: 'start'});
      async function fetchProduct() {
        // Use backticks (`) for template literal, not single quotes ('')
        let response = await axios.get(`http://localhost:8888/product/${productId}`);
        console.log(response);
        setProduct(response.data);
      }
      
      fetchProduct();
    },[]);

  return (
    <div id="product">
      <Navbar />
      {/* <hr /> */} 
      <div className="product">
        <div className="productview">
          <div className="productleft">
            <img src={product.imageUrl}  />
          </div>

          <div className="productright">
            <div style={{color:'rgb(233, 68, 96)'}}>SELZ Exclusive</div>
            <div className="porname">{product.productName}</div>
            <div className="pordes">{product.description}</div>
            <div className="porpri"><span style={{color:'rgb(233, 68, 96)'}}>Inclusive all tax</span><span>MRP Rs.₹ {product.price}</span></div>
            <div className="VIEWALLSHADE"><span>VIEW ALL SHADE</span></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SingleProducts;
