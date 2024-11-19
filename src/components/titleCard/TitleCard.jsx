import { useEffect, useRef, useState } from "react"
import cards_data from "../../assets/cards/Cards_data"
import styles from './titleCard.module.css'
import { Link } from "react-router-dom"
export default function TitleCard({title,category}) {
    const cardsRef=useRef()
    const [apiData,setApiData]=useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzJkYjE1ZThmNjAyNzEyMTk4ODhhOWRkZTJkNjdmYyIsIm5iZiI6MTczMjAyMzIyMC45ODk2NTk1LCJzdWIiOiI2NzNjOTEwNDM1NTU0MTc5MTNiMTRmYmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.x25ITeoZdWSf9U9HmlvE6AlZdmJwRFKt0_jERLdR610'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results))
        .catch(err => console.error(err));

    function handleWheel(event){
        event.preventDefault()
        cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect(()=>{
        cardsRef.current.addEventListener('wheel',handleWheel)
    },[])
    return(
        <>
        <div className={styles["container"]}>
            <h2>{title?title:'Popular on netflix'}</h2>
            <div className={styles["cards"]} ref={cardsRef}>
                {
                    apiData.map((card,index)=>{
                        return <Link to={`/play/${card.id}`}  className={styles["card"]} key={index}>
                            <img src={`https://image.tmdb.org/t/p/original/`+card.backdrop_path} alt={card.name} />
                            <p>{card.title} and {card.id}</p>
                        </Link>
                    })
                }
            </div>
            
        </div>
        </>
    )
};
