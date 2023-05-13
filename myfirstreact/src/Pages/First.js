import React,{useState} from 'react';

function First(){
    const[state,setState]=useState(true);//state is variable declaration usestate means ki variable ki value kya hogi 
    return(
        <>
        {state?<h1>this is hide</h1>:null}
        <button onClick={() =>setState(!state)}>Toggle</button>


        </>
    );
}
export default First;