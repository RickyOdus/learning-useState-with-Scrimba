import React, {useState} from "react";
import memesData from "./memesdata"

export default function Body(){
const [memeImage, setMemeImage] = useState("")


    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    };

    return (
        <main className="font">
        <div className="sentence-css">
     <input className="form-one" type = "text" placeholder="Top text"/>
     <input className="form-two" type = "text" placeholder="Bottom text"/>
        </div>
        <div className="button">
    <button onClick = {getMemeImage}>Get a new meme image 🖼</button>
        </div>

        <div className="picture">
        <img src = {memeImage} width ="700px"/>
        </div>
        {/* <p >Shut up</p>  
        <p >and take my money</p>   */}
        </main>
    )
}