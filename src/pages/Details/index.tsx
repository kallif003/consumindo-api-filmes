import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { key } from '../../config';
import { ContainerDetails, DivDetails, Title, Image } from '../../components/details';

const Details: React.FC = () => {
  const { id } = useParams()
const [movie, setMovie] = useState<any>({})

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      const movie = {
        id: data.id,
        title: data.title,
        image: `${imagePath}${data.poster_path}`,
        sinopse: data.overview,
        releaseDate: data.release_date
      }
      setMovie(movie)
    })
  }, [id])

  return(
    <ContainerDetails>
      <Image src={movie.image}/>
      <DivDetails>
      <Title>{movie.title}</Title>
       <p>{movie.sinopse}</p>
       <h3>{movie.releaseDate}</h3>
       <Link to={"/"}>
          <button>Go Back</button>
       </Link>
      </DivDetails>
    </ContainerDetails>
  )
}

export default Details