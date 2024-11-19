import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export default function Player() {

    const {id} = useParams()
    const navigate =useNavigate()
    const [apiData,setApiData]=useState({
        name:'',
        key:'',
        type:'',
        published_at:''
    })
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzJkYjE1ZThmNjAyNzEyMTk4ODhhOWRkZTJkNjdmYyIsIm5iZiI6MTczMjAyMzIyMC45ODk2NTk1LCJzdWIiOiI2NzNjOTEwNDM1NTU0MTc5MTNiMTRmYmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.x25ITeoZdWSf9U9HmlvE6AlZdmJwRFKt0_jERLdR610'
        }
    };
      
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
    },[])

    console.log(apiData.type);
    return(
        <div className="player-container">
            <img src={back_arrow_icon} alt="back_arrow_icon" onClick={()=>navigate(-2)}/>
            <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%' title='trailer' allowFullScreen frameborder="0" ></iframe>
            <div className="info-about-vd">
                <p>{apiData.published_at}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
};
