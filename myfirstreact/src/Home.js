// import Nav from './Nav';
// import Hero from './Hero';
import Destination from './Destination';
import Trip from "./Trip";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import Footer from "./Footer";
function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images7.alphacoders.com/362/362619.jpg"
                        width="100%"
                        height="500px"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>~HOTEL~</h3>
                        <p><b>Enjoy Your Vacation With Hotels!!!</b></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images5.alphacoders.com/362/362711.jpg"
                        width="100%"
                        height="500px"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>~HOTEL~</h3>
                        <p><b>Enjoy Your Vacation With Hotels!!!</b></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://c4.wallpaperflare.com/wallpaper/921/708/937/best-hotels-travel-thailand-tourism-wallpaper-preview.jpg"
                        width="100%"
                        height="500px"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>~HOTEL~</h3>
                        <p>
                        <b>Enjoy Your Vacation With Hotels!!!</b>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <Nav /> */}
            {/* <Hero 
        cName ="hero"
        heroimg={require('./img/h1_hero.jpg')}  
        title="~HOTEL~"
        text="ENJOY YOUR VACATION WITH HOTELS!!"
        
        buttonText="EXPLORE NOW"
        url="/"
        btnClass="show"
        /> */}
            <Destination />
            <Trip />
            {/* <Footer /> */}
        </>
    )
}
export default Home;