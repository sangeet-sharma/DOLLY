import React, { useState } from 'react';
function Form(){
    const[nm,setName]=useState(" ")
    const[gen,setGender]=useState(" ")
    const[tnc,setTnc]=useState(true)
    const[nm1,setName1]=useState(nm)
    const[gen1,setGender1]=useState(gen)
    const[tnc1,setTnc1]=useState(tnc)
    
    function getformdata(e)
    {

        setName(nm);
        setGender(gen);
        setTnc(tnc); 
        console.log(nm,gen,tnc);
        e.preventDefault();
        showdata();
    }
    
    function showdata(){
        setName1(nm);
        setGender1(gen);
        setTnc1(tnc);
    }


    return(
    <div>
        <h1>form:</h1>
     
    <form onSubmit={getformdata}>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="name"></input><br></br>
        <select onChange={(e)=>setGender(e.target.value)}>
            <option>select gender</option>
            <option>Male</option>
            <option>Female</option>
        </select><br></br>
        <input type="checkbox" name="gender" value={tnc} onChange={(e)=>setTnc(e.target.value)}></input><span>checkbox</span>
        <br></br><button type="submit" onClick={showdata}>submit</button>
    </form>
    <div>name:{nm1} </div>
    <div>gender:{gen1}</div>
    <div>checkbox:{tnc1}</div>
    </div>
    );
}
export default Form;