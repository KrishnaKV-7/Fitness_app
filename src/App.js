import React from 'react'
import { Route , Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExcerciseDetail from './Pages/ExcerciseDetail';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Box width="400px" sx={{ width: {x1: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/excercise/:id" element={<ExcerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App