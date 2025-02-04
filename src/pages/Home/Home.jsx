import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import { sliderimg } from "../assets/swiper";
import { brandimg } from "../assets/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
function Home(){

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


    return(

<>
<Navbar />
<div className="main">
    <div className="main-slider">
       <div className="slider">
          <Swiper
            id="swiper"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={5}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            

            {sliderimg.map((data, index) => (
              <SwiperSlide key={index} className="imagecontainer">
                <img src={data} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
        <div className="listview">
        <div className="listviewcontent">NEW ARRIVALS</div>
        <div className="listviewcontent">HOT & HAPPENING</div>
        <div className="listviewcontent">BEAUTY UNDER 999</div>
        <div className="listviewcontent">BESTSELLERS</div>
        <div className="listviewcontent">BEST OF MAKEUP</div>
        <div className="listviewcontent">EVERYDAY ESSENTIALS</div>
        </div>
        
      <div className="ShopByBrands">Shop By Brands </div>
      
      <div className="brandslist">
        {brandimg.map((data, index) => (
          <img src={data} alt="" />
        ))}
        {/* <hr style={{ height: "60px"}} /> */}
      </div>
      <div id="main-slider">
        <div className="slider">
          <Swiper
            id="swiper2"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={1}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {product.map((data,index) => ( 
              
              <SwiperSlide onClick={()=>console.log(index)} key={index} className="image-cont">
               <Link to={`/product/${data.productId}`}
                style={{ textDecoration:'none'}} ><div className="SwiperSlideproduct">
               <img src={(data.imageUrl)} alt="" />
                <div className="SwiperSlideproductlist">
                 <div>{data.description}</div> 
                 <div style={{ color:'red'}}>Rs.₹{data.price}</div>
                 </div>
                </div>
                </Link>
              </SwiperSlide>
             

            ))}
          </Swiper>
        </div>
      </div>
       

      
  </div>

<Footer />

</>


    );
}
export default Home;