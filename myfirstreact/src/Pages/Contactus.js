import "./Contactstyle.css";
function Contactus(){
    return(
        <div className="form-cont">
        <h1>Send a message to us</h1> 
        <form>
           
        <input placeholer="name" /> 
        <input placeholer="Email" />
        <input placeholer="Subject" />
        <textarea placeholder="message"></textarea>
        <button>Send message</button>

            </form>   
        </div>
    )
}
export default Contactus;