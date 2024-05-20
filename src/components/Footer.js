import React from 'react'
import { Box , Stack , Typography  } from '@mui/material'
import Logo from '../assets/images/Logo-22.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='10px' alignItems='center' px='40px' pt='10px'>
        <img src={Logo} alt='Logo' width='200px' height='40px' />
        <Typography variant='h7' pb='30px' color='#3A1212'>
        copyright &copy; 2023 by ai_sport team
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer