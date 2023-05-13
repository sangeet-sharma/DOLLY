import React,{useState,useEffect} from "react";
import './switch.css';
function LDmode(){
  
    const [Dark,setMode]=useState(false)
    useEffect(()=>{
        localStorage.setItem("mode",JSON.stringify(Dark))
    },[Dark])
   
    return(
        <div className={Dark?"app dark-mode":""}>
            <div className="nav">
                <label className="switch">
                    <input type="checkbox" onChange={(e)=>setMode(!Dark)}/>
                    <span className="slider round"></span>
                </label>

            </div>
            <div className="content">
                <h1>{Dark?"":""}</h1>
                <p style={{fontSize:"20px"}}></p>

            </div>

        </div>
    );
}
export default LDmode;