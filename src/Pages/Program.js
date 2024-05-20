import { Stack  , Box , Typography,Button, Paper } from '@mui/material'
import React from 'react'
import SavedExercises from '../components/SavedExercises'
import { UserAuth } from '../context/UserAuth';
import {useNavigate} from 'react-router-dom';
import ProgramList from '../components/ProgramList'
import WeekTabs from '../components/WeekTabs';




const Program = () => {

  const { user , logout } = UserAuth();
  const navigate = useNavigate();  

  const handleLogout = async () =>{
    try{
    await logout();
    navigate('/Login')
    console.log('You are logged out');
    }catch(e){
      console.log(e.message);
    }
}

  return (
    <Stack p='20px'>
      <Stack justifyContent='space-around' my={12} py={5} component={Paper} border='royalblue' padding='20px'>
      <Typography variant='h4'>
        Program
      </Typography>
      <Typography>
        Welcome, {user?.email}
      </Typography>
      <Stack justifyContent='right' direction='row'>
      <Typography>
        <Button  onClick={handleLogout}  href="/" variant="contained" sx={{my:1, mx: 1.5 ,border:'ButtonShadow',borderRadius:'15px' }}
         style={{backgroundColor:'#ff2625'}}
        >
          Sing out
      </Button>

      </Typography>
      </Stack>

      </Stack>

      <Stack component={Paper} p='20px' width='100%'>
        <Typography variant='h5'>
        Saved Exercises List 
        </Typography>
        <SavedExercises/>
   
      </Stack>

      <Stack component={Paper} p='20px' width='100%' mt='40px'>
        <Typography variant='h5'  mb='30px'>
        Exercises List 
        </Typography>
        <WeekTabs/>
   
      </Stack>

      </Stack>
  )
}

export default Program