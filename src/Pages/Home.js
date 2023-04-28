import React from 'react';
import { Box } from '@mui/material';

import Exercises from '../Components/Exercises';

import HeroBanner from '../Components/HeroBanner';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      
      <Exercises />
    </Box>
  )
}

export default Home;