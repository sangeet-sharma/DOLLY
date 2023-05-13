import React from 'react'
import './Team.css';
import im from "../img/kritika.jpg"
import im1 from "../img/sangeet.jpeg"

export default function Team() {
    // let message='Hotel Management System';
  return (
    <section className="section-white">
        <div className="container">
            
                <div className="col-md-12 text-center">
                    <h2 className="section-title"><i>Our Team</i></h2>
                    {/* <p className="section-subtitle">
                    {message}
                    </p> */}
                </div>
                <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img src={im1} className="team-img" alt="pic"/>
                        <h3>SANGEET SHARMA</h3>
                        <div className="team-info">
                            <h3>Team Member</h3>
                            <p>
                                Sangeet sharama is a intern in cdac jaipur and persuing 
                                master of computer application from banasthali vidyapith
                            </p>
                            <ul className="team-icon">
                                <li><a href="#" className="twitter">
                                <i className="fa-brands fa-twitter-square"></i>   
                                </a></li>

                                <li><a href="#" className="instagram">
                                <i className="fa-brands fa-instagram-square"></i>   
                                </a></li>

                                <li><a href="#" className="facebook">
                                <i className="fa-brands fa-facebook-square"></i>   
                                </a></li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img src={im} className="team-img" alt="pic"/>
                        <h3>KRATIKA SINGHAL</h3>
                        <div className="team-info">
                            <h3>Team Member</h3>
                            <p>
                                Kratika Singhal is a intern in cdac jaipur and persuing 
                                master of computer application from banasthali vidyapith
                            </p>
                            <ul className="team-icon">
                                <li><a href="/" className="twitter">
                                <i className="fa-brands fa-twitter-square"></i>   
                                </a></li>

                                <li><a href="/" className="instagram">
                                <i className="fa-brands fa-instagram-square"></i>   
                                </a></li>

                                <li><a href="/" className="facebook">
                                <i className="fa-brands fa-facebook-square"></i>   
                                </a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

// fa-brands fa-twitter-square