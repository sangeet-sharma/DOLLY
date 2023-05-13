import React,{useState} from 'react';
import './box.css';

function Boxshad(){
    const[Hori,setHori]=useState(10);
    const[Veri,setVeri]=useState(10);
    const[Blur,setBlur]=useState(10);
    const[Color,setColor]=useState("");
    const[Color1,setColor1]=useState("");

    return(
      
       
      <div class="main">
        
        <div class="left">
            <label>horizontal</label><br></br>
            <input type="range" min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} /><br></br>
            <label>Vertical</label><br></br>
            <input type="range" min="0" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)}/><br></br>
            <label>Blur</label><br></br>
            <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)}/><br></br>
            <label>boxshadow-Color</label><br></br>
            <input type="color"  value={Color} onChange={(e)=>setColor(e.target.value)}/><br></br>
            <label>background-Color</label><br></br>
            <input type="color"  value={Color1} onChange={(e)=>setColor1(e.target.value)}/>


        </div>
        <div class="right">
            <div class="result" style={{boxShadow:`${Hori}px ${Veri}px ${Blur}px ${Color}`,background:`${Color1}`}}>

                <p>boxShadow:${Hori}px ${Veri}px ${Blur}px ${Color}</p>

            </div>

        </div>
      </div>
    );
}
export default Boxshad;