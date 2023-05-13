import "./Footerstyle.css";
// import Hero from "./Hero";
import im from "./img/fivestar.jpg"
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    {/* <h1>Hotel</h1>  */}
                     {/* <p>Choose Your Booking </p>  */}
                      {/* <Hero   */}
     {/* cName ="hero"  */}
         {/* heroimg={require('./img/fivestar.jpg')} width="100px" height="100px"  margin="0 auto"/>  */}
         <img src={im} style={{width:'150px'}}/>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                   
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h2>Quick Links</h2>
                    <a href="/">About Diamonds Five Star Hotel</a>
                    <a href="/">Our Best Rooms</a>
                    <a href="/">Our Photo Gallery</a>
                    <a href="/">Pool Service</a>
                </div>
                <div>
                    <h2>Reservations</h2>
                    <a href="/">Tel:453-3251</a>
                    <a href="/">Phone No: 09125673251</a>
                    <a href="/">Skype: DiamondhotelBooking</a>
                    <a href="/">Reservations@diamondhotel.com</a>
                </div>
                <div>
                    <h2>Our Location</h2>
                    <a href="/">Purok Daisy,Brgy.Enclaro</a>
                    <a href="/">Binalbagan,Negros Occidental</a>
                </div>
            
                    <div>
                    <a href="/">Copyright@2023 All rights</a>
                    <a href="/">reserved | Hotel Management</a>
                    <a href="/">System</a> 
                  </div>
                 

            </div>
        </div>
    )
} 
export default Footer;
