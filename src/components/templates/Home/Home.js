import * as React from 'react';
import { Box } from '@mui/material';
import './Home.scss';

const Home = () => {
  return (
    <div className='Container'>
      <Box
        className='Container__image'
        component="img"
        sx={{
          height: 467,
          width: 550,
          maxHeight: { xs: 233, md: 467 },
          maxWidth: { xs: 350, md: 550 },
        }}
        alt="Star Wars Logo"
        src="https://www.rockandpop.cl/wp-content/uploads/2017/11/Star-Wars.jpg"
      />
    </div>
  );
};

export default Home;