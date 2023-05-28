
import emailjs from '@emailjs/browser';
import Nav from './Nav';
import Footer from './Footer';
import { useRef } from 'react';
import { Container,Row,Col } from "react-bootstrap";
import { contactConfig } from "./content_opinion";
import './Contact.css'


const Contact=()=>{
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        // emailjs.sendForm('service_kyca41p', 'template_hd7jcyu', form.current, 'fTW8nxo_BOOe8N6Is')
        emailjs.sendForm('service_ne0hzzo', 'template_w76s0yc', form.current, 's3ogM0NMr9PTZ91AE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return(
        <>
         <Nav/>
        <div className='me'>
           
        <Container>
            <Row className="mb-5 mt-3">
                <Col Lg='8'>
                    <h1 className="display-4 mb-4">
                        Contact Us
                    </h1>
                </Col>
            </Row>
            <Row className="sec_sp">
                <Col Lg='5' className="mb-5">
                    <h3 className="color_sec py-4">Get in touch</h3>
                    <address>
                        <strong>
                            Email : skdevmanagement@gmail.com
                        </strong>
                        <br/>
                        <br/>
                        {/* <p> */}
                            <strong>Phone : +917896543210</strong>
                        {/* </p> */}
                    </address>
                    <p className='st'>If You Have Any Query Then Feel Free To Contact Us!!</p>
                </Col>
                <Col Lg='7' className="d-flex align-items-center">
                    <form ref={form} className="contact_form w-100" onSubmit={sendEmail}>
                        <Row>
                            <Col Lg='6' className="form-group">
                                <input
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Name"
                                type="text"
                                />
                            </Col>
                            <Col Lg='6' className="form-group">
                                <input
                                className="form-control rounded-0"
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="text"
                                />
                            </Col>
                        </Row>
                        {/* <br/> */}
                        {/* <br/> */}
                        <textarea 
                        className="form-control rounded-0" id="message"
                         name="message"
                         placeholder=" Message"
                         rows='5'>
                         </textarea>
                         <br/> 
                        <Row>
                            <Col Lg='12' className="form-group">
                                {/* <button className="btn ac_btn" type="submit">Send</button> */}
                                <button className="bt">Send</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    
          </div>
          <Footer/>
          </>
        )
        }

export default Contact;

