import React, {useState} from "react";

export default function Picture(){
   
    function addition(a,b){
        console.log(3+2);  
    }
    return (
        <div className="picture">
        <img onMouseDown={addition} src = './images/memeimg.png' width ="600px"/>
        </div>
    )
}