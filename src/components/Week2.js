import { Box, Card, CardContent, CardMedia, Typography,Grid, Container, Stack, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/UserAuth';
import { db } from '../firebase';
import { doc  , onSnapshot , updateDoc} from 'firebase/firestore';
import { Link } from 'react-router-dom';





const Week2 = () => {

    const [exercises , setExercises]= useState([]); 
    const {user} = UserAuth();
    useEffect (()=>{
        onSnapshot(doc(db,"userData",`${user.email}`),(doc)=>{
            setExercises(doc.data()?.Program)
        })
    },[])

      const week ='Week2';
      const exercisesWeek = exercises?.filter((item)=>item.week.includes(week))
      console.log({exercisesWeek});

      
      


  return (


    <Container sx={{py:5}} maxWidth='md'>
       < Grid container spacing={3}>
        {exercisesWeek?.map((exercise) =>{
            return(
                 <Grid item key={exercise.name} xs={12} sm={6} md={4}>
                        <Card sx={{display:'flex', borderRadius:'30px' , boxShadow:'5'}} >
                            <CardContent sx={{flex: 1 }}>
                            <Link to={`/programExercise/${exercise.name}`} variant="button" style={{textDecoration:'none'}}>
                                <Typography gutterBottom  variant="h6"  fontWeight='600' color='black'>
                                    {exercise.name}
                                </Typography>
                                </Link>
                                {/* <Typography variant="body2" color="#3A1212"  textTransform='capitalize'>
                                {exercise.bodyPart}
                                </Typography> */}
                                <Stack direction='row' mt='9px'>
                                <Typography sx={{
                                color:'#fff',
                                background:'#ffa9a9',
                                fontSize:'14px',
                                width:'100',
                                borderRadius:'20px',
                                p:'10px',
                                textTransform:'capitalize'}}
                                >
                                 {exercise.bodyPart}
                                </Typography>

                                <Typography sx={{ml:"21px",
                                color:'#fff',
                                background:'#fcc757',
                                fontSize:'14px',
                                borderRadius:'20px',
                                width:'100',
                                p:'10px',
                                textTransform:'capitalize'}}>
                                 {exercise.week}
                                </Typography>

                                </Stack>

                                <Stack direction='row' spacing={4}  mt='10px' ml='8px'>
                                    <Stack>
                                reps: {exercise.reps}
                            </Stack>
                            <Stack>
                                sets: {exercise.sets}
                            </Stack>
                                </Stack>
                                
                            </CardContent>
                           
                            </Card>
                    </Grid>
             

            )
}  )}   
     </Grid>
 </Container>
  )
}

export default Week2