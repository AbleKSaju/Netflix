import React, { useEffect, useState } from "react";
import { api_key,imageUrl } from "../../Constants/constants";
import "./Banner.css";
import axios from '../../axios';
function Banner() {

    const [movie, setMovie] = useState()
    useEffect(()=>{
        const num=Math.floor(Math.random()*20)
        axios.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((res)=>{
            setMovie(res.data.results[num])
        })
    },[])
  return (

<div 
style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path :""})`}}
className="banner">
      <div className="content">
        <h1 className="title">{movie?movie.title:""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
         {movie?movie.overview:""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
