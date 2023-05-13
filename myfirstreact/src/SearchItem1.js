import "./SearchItem1.css";
import im from "./img/1.jpg";
import im1 from "./img/21.webp";
import im2 from "./img/33.jpg";
import im3 from "./img/4.jpg";
import im4 from "./img/5.jpg";
import im5 from "./img/66.jpg";
import { Link } from 'react-router-dom';

const SearchItem = () => {
    
  return (
    <div className="main">
    <div className="searchItem1">
        <img src={im}  alt="" className="siImg" />
        <div  className="siDesc">
            <h1 className="siTitle">Double Room</h1>
            <span className="siPrice"> Price : 1200 Rs</span>
            <span className="siCap"> Max Capacity : 2 people</span>
            <span className="siType"> AC Room</span>

            <span className="siFeatures">
                Entire Structure  -   1 Sofa  +  1 Double bed
            </span>
            <span className="siFood"> Free Breakfast Included</span>

      </div>
      <br></br>
      <div className="siDetails">
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
     </div>

<div className="searchItem">
    <img src={im1}  alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Double Room</h1>
            <span className="siPrice"> Price : 1700 Rs</span>
            <span className="siCap"> Max Capacity :  2 people</span>
            <span className="siType">AC Room</span>

            <span className="siFeatures">
                Entire Structure - 1 Double bed with Balcony
            </span>
            <span className="siFood">Free Breakfast & Lunch Included</span>

    </div>
    <br></br>
    <div className="siDetails">
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
    </div>

    <div className="searchItem">

    <img src={im2}  alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Double Room</h1>
            <span className="siPrice"> Price : 1000 Rs</span>
            <span className="siCap">Max Capacity : 2 people</span>
            <span className="siType">NON - AC Room</span>

            <span className="siFeatures">
                Entire Structure - Only Double Bed
            </span>
            <span className="siFood">Free Breakfast Included</span>

    </div>
    <br></br>
    <div className="siDetails">
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
    </div>
   

    <div className="searchItem">

<img src={im3}  alt="" className="siImg" />
    <div className="siDesc">
        <h1 className="siTitle">Double Room</h1>
        <span className="siPrice"> Price : 2000 Rs</span>
        <span className="siCap">Max Capacity : 2 people</span>
        <span className="siType">  AC Room</span>

        <span className="siFeatures">
            Entire Structure -  Luxury Room With Sofa & Dininng 
        </span>
        <span className="siFood">Breakfast & Lunch Included</span>

</div>
<br></br>
<div className="siDetails">
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
</div>


<div className="searchItem">

    <img src={im4}  alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Double Room</h1>
            <span className="siPrice">Price : 1100 Rs</span>
            <span className="siCap">Max Capacity : 2 people</span>
            <span className="siType">AC Room</span>

            <span className="siFeatures">
                Entire Structure -  Double Bed with Table & Chair
            </span>
            <span className="siFood">Free Breakfast Included</span>

    </div>
    <br></br>
    <div className="siDetails">
        <br></br>
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
    </div>
    

    <div className="searchItem">

    <img src={im5}  alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Double Room</h1>
            <span className="siPrice">Price : 1000 Rs</span>
            <span className="siCap">Max Capacity : 2 people</span>
            <span className="siType">NON - AC Room</span>

            <span className="siFeatures">
                Entire Structure -  Only Double Bed
            </span>
            {/* <br></br> */}
            <span className="siFood">Free Breakfast Included</span>

    </div>
   <br></br>
    <div className="siDetails">
        <br></br>
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
    </div>

   

 </div>
  )
}

export default SearchItem
