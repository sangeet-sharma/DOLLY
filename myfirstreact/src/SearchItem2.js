import "./SearchItem2.css";
import im from "./img/pr.jpg";
import im1 from "./img/p2.webp";
import im2 from "./img/p3.jpg";
import im3 from "./img/p4.jpg";
import im4 from "./img/p5.webp";
import im5 from "./img/p6.jpg";
import { Link } from 'react-router-dom';

const SearchItem = () => {
  return (
    <div className="main">
    <div className="searchItem2">
        <img src={im}  alt="" className="siImg" />
        <div  className="siDesc">
            <h1 className="siTitle">Presidential Suite</h1>
            <span className="siPrice"> Price : 10,000 Rs</span>
            <span className="siCap"> Max Capacity : 2 people</span>
            <span className="siType"> AC Room</span>

            <span className="siFeatures">
                Entire Structure  -  King Bed + Sofa + Dining
            </span>
            <span className="siFood">Breakfast + Lunch + Dinner </span>

      </div>
      <br></br>
      <div className="siDetails">
        <br></br>
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
     </div>

<div className="searchItem">
    <img src={im1}  alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Presidential Suite</h1>
            <span className="siPrice"> Price : 9000 Rs</span>
            <span className="siCap"> Max Capacity :  2 people</span>
            <span className="siType"> AC Room</span>

            <span className="siFeatures">
                Entire Structure - King Bed + Balcony View
            </span>
            <span className="siFood">Breakfast + Lunch + Snacks</span>

    </div>
    <br></br>
    <div className="siDetails">
        <br></br>
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
    </div>

    <div className="searchItem">

    <img src={im2}  alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Presidential Suite</h1>
            <span className="siPrice"> Price : 9500 Rs</span>
            <span className="siCap">Max Capacity : 2 people</span>
            <span className="siType">AC Room</span>

            <span className="siFeatures">
                Entire Structure - King Bed + Sofa + Balcony
            </span>
            <span className="siFood">Breakfast + Lunch</span>

    </div>
    <br></br>
    <div className="siDetails">
        <br></br>
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
    </div>
   

    <div className="searchItem">

<img src={im3}  alt="" className="siImg" />
    <div className="siDesc">
        <h1 className="siTitle">Presidential Suite</h1>
        <span className="siPrice"> Price : 11,000 Rs</span>
        <span className="siCap">Max Capacity : 2 people</span>
        <span className="siType">  AC Room</span>

        <span className="siFeatures">
            Entire Structure -  Luxury Bed + Balcony
        </span>
        <span className="siFood">Breakfast + Lunch </span>

</div>
<br></br>
<div className="siDetails">
    <br></br>
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
</div>


<div className="searchItem">

    <img src={im4}  alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Presidential Suite</h1>
            <span className="siPrice">Price : 10,000 Rs</span>
            <span className="siCap">Max Capacity : 2 people</span>
            <span className="siType">AC Room</span>

            <span className="siFeatures">
                Entire Structure -  King Bed
            </span>
            <span className="siFood">Breakfast + Lunch + Snacks</span>

    </div>
    <br></br>
    <div className="siDetails">
        <br></br>
    <Link  type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
    </div>
    

    <div className="searchItem">

    <img src={im5}  alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Presidential Suite</h1>
            <span className="siPrice">Price : 12,000 Rs</span>
            <span className="siCap">Max Capacity : 2 people</span>
            <span className="siType">AC Room</span>

            <span className="siFeatures">
                Entire Structure -  King Bed + Sofa + Dining + Balcony
            </span>
            <span className="siFood">Breakfast + Lunch</span>

    </div>
   <br></br>
    <div className="siDetails">
    <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link>
    </div>
    </div>

   

 </div>
  )
}

export default SearchItem
