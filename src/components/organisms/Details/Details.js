
import { CircularProgress, Box, Card, CardMedia, CardContent } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import './Details.scss'

const fetchCharactersDetail = async (queries) => {
  const res = await fetch(`https://swapi.dev/api/people/${queries.queryKey[1]}`);
  return res.json();
}

const Details = () => {
  const { id } = useParams();
  const { data, status, isLoading } = useQuery(['characterDetail', id], fetchCharactersDetail, {
  })
  console.log(data)

  return (
    <>
      <h1>Character Details</h1>
      <h2>{status}</h2>
      {isLoading ? (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <CircularProgress />
        </Box>
      ) : (
        <Card className='characterCard'>
          <CardMedia
            className='characterCard__photo'
            component={'img'}
            image={
              'https://i.blogs.es/26ba45/star-wars-eras/1366_2000.jpeg'
            }
            
          />
          <CardContent className="characterCard__content">
            <h3 className="characterCard__content--title">{data.name}</h3>
            <ul className="characterCard__content--info">
              <li>Birth Year: {data.birth_year}</li>
              <li>Gender: {data.gender}</li>
              <li>Height: {data.height}</li>
              <li>Mass: {data.mass}</li>
            </ul>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Details;