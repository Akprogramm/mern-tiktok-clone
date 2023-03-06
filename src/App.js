// import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';
import Video from "./components/Video";
import axios from "axios";
import { useState} from 'react';


function App() {
  
  const[variable,setVariable]=useState([]);


  useEffect(()=>{

    async function fetchdata(){
    const response=await axios.get("http://localhost:4000/data");
    if(response){
    console.log(response.data);
    setVariable(response.data);
    }
    else{
      console.log("fghg ghf fgh");
    }

    return response;
  }

    fetchdata();
  
},[]);

   


  return (
    //BEM naming conversion
    <div className="app">
      <header className="App-header">

        {
          variable.map(({url,channel,description,song,likes,comment,share})=>{
             return <Video url={url} channel={channel} description={description} song={song} likes={likes} comment={comment} share={share} />;
          })
        }


        {/* <h1>Full Stck MERN stack</h1>
        <Video url="This is a url" channel="AK khan" description="This is a description" song="I am a song" likes="5757" comment="546" share="43" />
        <Video url="This is a url" channel="AK khan" description="This is a description" song="I am a song" likes="5757" comment="546" share="43" />
        <Video url="This is a url" channel="AK khan" description="This is a description" song="I am a song" likes="5757" comment="546" share="43" />
        <Video url="This is a url" channel="AK khan" description="This is a description" song="I am a song" likes="5757" comment="546" share="43" />
        <Video url="This is a url" channel="AK khan" description="This is a description" song="I am a song" likes="5757" comment="546" share="43" /> */}
      </header>
    </div>
  );
}

export default App;
