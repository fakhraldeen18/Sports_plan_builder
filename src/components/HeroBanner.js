import React,{useState} from 'react';
import { Box,  Typography,Stack } from '@mui/material';
import { UserAuth } from '../context/UserAuth';
import HeroBannerImage from '../assets/images/ryan-hoffman-87mSx1ZlIHY-unsplash.jpg'
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    
    return (
      <Box sx={{ mt: { lg: '0px', xs: '50px' },backgroundImage:`url(${HeroBannerImage})`,width:'100%',height:600,backgroundPosition:'center',backgroundSize:'cover',display:'flex'}} position="relative" p="20px">

        <Box sx={{ mt: { lg: '50px', xs: '70px',background:'rgba(255, 255, 255, 0)' },ml:{lg:'50px'}}}> 
      <Typography  color="#FF2625" fontWeight="600" fontSize="26px">Sports Plan Builder</Typography>
      <Typography fontWeight={700} sx={{ color:'#ffff',fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography color='#ffff' fontWeight={700} fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <Link to="/Questionnaire"   style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Start your program</Link>
      </Stack>
      </Box>
    </Box>

       )  
       }

export default HeroBanner;
