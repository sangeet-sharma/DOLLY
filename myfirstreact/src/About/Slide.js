import React from 'react'
import people from './datta';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slide.css';

function Slide() {
    const data = (people)
    return (
        <div className='container mt-3'>
            <div className='row d-flex justify-conter-center align-items-center'>
                {
                    data.map((element) => {
                        return (
                            <> 
                                <Card style={{ width: '20rem', border:'none' }} className='mx-2 mt-4 card-style' key={element.id}>
                                    <Card.Img variant="top" src={element.url} style={{height:'16rem' }} className="mt-3" />
                                    
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>


    )
}
export default Slide;