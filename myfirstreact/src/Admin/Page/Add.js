import React from 'react'
import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';
import Sidenav from '../../Components/Sidenav';
import Navbar from '../../Components/Navbar';

export default function Add() {
  return (
   <>
   <Navbar/>
   <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <Box component="main" sx={{flexGrow:1,p: 3}}>
    <h1>Add</h1>
    </Box>
    </Box>
    </>
  );
}
