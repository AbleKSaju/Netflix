import React, { useEffect,useState  } from 'react'
import "./RowPost.css"
import YouTube from 'react-youtube'
import axios from '../../axios'
import { imageUrl,api_key } from '../../Constants/constants'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      setMovies(response.data.results)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  };
  const handleMovie =(id)=>{
    console.log(id,"iddd");
    axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
      console.log(response.data.results[0],"keeeyyyyyy");
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log(response.data.results.length);
      }
    })
  }
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
      {movies.map((val)=>
          <img onClick={()=>{handleMovie(val.id)}} className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl+val.backdrop_path}`} />
          )}
    </div>
    {urlId && <YouTube opts={opts} videoId={urlId.key} />}
</div>  
)
}

export default RowPost