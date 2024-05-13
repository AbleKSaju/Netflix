import React, { useEffect,useState  } from 'react'
import "./RowPost.css"
import YouTube from 'react-youtube'
import axios from '../../axios'
import { imageUrl,api_key } from '../../Constants/constants'
import Shimmer from '../../Components/Shimmer/Shimmer'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      setMovies(response.data?.results)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  };
  const handleMovie =(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
      if(response.data?.results?.length!==0){
        setUrlId(response.data?.results[0])
      }
    })
  }
  return ( movies?.length===0)?(<Shimmer/>):(
       <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
      {movies.map((val)=>
          <img key={val.id} onClick={()=>{handleMovie(val.id)}} className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl+val.poster_path}`} />
          )}
    </div>
    {urlId && <YouTube opts={opts} videoId={urlId.key} />}
</div>  
  )

}

export default RowPost