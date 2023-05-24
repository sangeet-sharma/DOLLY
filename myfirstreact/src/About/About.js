import React from 'react'
import './About.css'
import Slide from './Slide'
import Team from './Team'
import Alert from 'react-bootstrap/Alert';
import Nav from '../Nav';
import Footer from '../Footer';

export default function About() {
    return (
        <>
        <Nav/>
        <div>
            <h1>Gallery</h1>
            <Slide />

            <Alert variant="success" style={{ margin: '5%' }}>
                <Alert.Heading>About Us</Alert.Heading>
                <p>
                    <i>We are a luxury hotel located in the heart of the city. Our hotel offers a range of amenities and services
                        to ensure that your stay with us is comfortable and enjoyable.At our hotel, we believe that every guest
                        deserves the best possible experience. That's why we offer a range of room types to suit every need and
                        budget, from standard rooms to suites.</i>
                </p>
                <p>
                    <i>In addition to our comfortable rooms, we also offer a range of amenities and services to help make your
                        stay with us even more enjoyable. These include a fitness center, a swimming pool, a spa, and a restaurant
                        serving delicious cuisine. We pride ourselves on providing exceptional customer service, and our staff
                        is always available to assist you with any requests or questions you may have during your stay with us.</i>
                </p>
                <hr />
                <p className="mb-0">
                    <b><i>Thank you for considering our hotel for your upcoming stay. We look forward to welcoming you and providing you
                        with an unforgettable experience.</i></b>
                </p>
            </Alert>

            <Team />
        </div>
        <Footer/>
        </>
    )
}
