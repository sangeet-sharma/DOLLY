import React,{useState} from 'react';
function Read(){
    const[txtval,settxtval]=useState(null)
    function getdata(val)
    {
        settxtval(val.target.value);
    }
    return(
        <>
        <p>{txtval}</p>
        <input type="text" onChange={getdata}></input>
        </>
    );
}
export default Read;