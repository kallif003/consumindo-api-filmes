import { useEffect, useState } from "react"
import { key } from "../../config"
import { ContainerMovies, Image, Title, Ul, Li, Span, Movie} from "../../components/home"
import { Link, Router, useNavigate } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies]= useState([])
    const path: string = "https://image.tmdb.org/t/p/w500/"
    const navigation = useNavigate()

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
      
    })


    return (
 
        <ContainerMovies>
             <Title>Movies</Title>
           
             <Ul>
            {movies.map((movie:any) => (               
                <Movie key={movie.id}>
                    
                    <Li>
                         <Link to={`/details/${movie.id}`}>
                          <Image src={`${path}${movie.poster_path}`} alt={movie.title}/>
                          </Link>
                          <Span>{movie.title}</Span>
                          
                      
                    </Li>
                    
                </Movie>
                    
       ))}
         </Ul>   
     </ContainerMovies>
  
    )
}

export default Home