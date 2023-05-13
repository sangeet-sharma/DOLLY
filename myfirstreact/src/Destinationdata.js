import './Destination.css';
import { Component } from 'react';
class Destinationdata extends Component{
  render(){
    return(
        <div className={this.props.ClassName}>
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>
           {this.props.text}
            </p>

        </div>
        <div className="image">
            <img  alt="loading" src={this.props.img1}  />
            <img  alt="loading" src={this.props.img2}  />

        </div>
    </div>   
    );
  } 
}
export default Destinationdata;