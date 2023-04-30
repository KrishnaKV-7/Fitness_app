import React from 'react';
import { Box, Typography ,Button } from '@mui/material';

import HerobannerImage from '../assets/images/websitebanner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt:{ lg:'212px' , xs:'70px'}, ml: {sm: '50px'}}} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Power, perseverance <br /> and discipline
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Never Stay at the Same Level
      </Typography>
      
      <Button variant ="contained" color= "error" href="#exercises" sx={{ backgroundColor: '#ff2625', padding: '10px'}}>
        Explore Workouts
      </Button>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Workouts
      </Typography>
      <img src={HerobannerImage} alt="banner"
      className="hero-banner-img" />
      
    </Box>
  )
}

export default HeroBanner