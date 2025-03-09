import Navbar from "../Home/Navbar/Navbar.jsx";
import Footer from "../Home/Footer/Footer.jsx";
import "./OverallProduct.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from 'react';
import { Link } from "react-router-dom";

function OverallProduct() {
 
    const { searchname } = useParams();  
    console.log(searchname);
   
    useEffect(()=>{
    
        async function fetchProducts(){
         try{let response= await axios.get('http://localhost:8888/product/homepageview');
         console.log(response)
         setproduct(response.data);}catch(error){
          console.log(error);
        }
      }
        fetchProducts();
        },[]);
       
        
        const [product,setproduct]=useState([]);

  return (
    <>
      <Navbar />
      <hr />
      <div className="producthome">
        <div className="product">

          {product.map((data, index) => (
            <>
              <a className="proview-a" href={`/product/${data.productId}`}> 
              <div className="proview" >
               
                <div className="proviewimg">
                  <img src={data.imageUrl} alt="" />

                </div>
                <div className="proviewdetails">
                  <div className="proviewname">
                    {data.productName}
                  </div>
                  <div className="provieprice">
                    MRP Rs.₹{data.price}
                  </div>
                  <div className="proviedes">
                    {data.description}
                  </div>
                </div>
                
              </div>
              <hr className="hr" />
              </a>
            </>
          ))}


        </div>
      </div>
      <Footer />
    </>
  );
}
export default OverallProduct;