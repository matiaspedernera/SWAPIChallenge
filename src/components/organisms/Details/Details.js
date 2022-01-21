import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(undefined)


  return (
    <h1>Character Details</h1>
  );
};

export default Details;