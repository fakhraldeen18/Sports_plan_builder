import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { Button , Stack, Typography , Box } from '@mui/material'
import { AiOutlineStar  , AiFillStar} from 'react-icons/ai'
import { UserAuth } from '../context/UserAuth'
import { arrayUnion , doc , updateDoc } from 'firebase/firestore'
import { db } from '../firebase';



function ExerciseCard({exercises}) {

  const [savedExercise , setSavedExercise] = useState(false);
  const { user } = UserAuth();

  const exericsePath = doc(db,"users",`${user?.email}`);

  const saveExercise = async () =>{
    if (user?.email){
      setSavedExercise(true);
      await updateDoc(exericsePath,{
        exerciselist:arrayUnion({
          id:`${exercises.id}`,
          name:`${exercises.name}`,
          image:`${exercises.gifUrl}`,
          bodyPart:`${exercises.bodyPart}`,
          target:`${exercises.target}`,
        }),
      });
    }
  };





  return (
    <React.Fragment>
     
      

<Box className='exercise-card'>
      <Link to={`/exercise/${exercises.id}`}>
                <img src={exercises.gifUrl} alt={exercises.name} loading='lazy'/>
      </Link>
        <Stack direction='row'>

             <Button  onClick={saveExercise} sx={{ color:'#000'}}>
          {savedExercise ? <AiFillStar/> : <AiOutlineStar/>}
          </Button>
          
         <Button sx={{ml:"21px",
          color:'#fff',
          background:'#ffa9a9',
          fontSize:'14px',
          borderRadius:'20px',
          textTransform:'capitalize'}}
          >
            {exercises.bodyPart}
         </Button>
         <Button sx={{ml:"21px",
          color:'#fff',
          background:'#fcc757',
          fontSize:'14px',
          borderRadius:'20px',
          textTransform:'capitalize'}}>
           {exercises.target}
         </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt="11px" pb='10px' textTransform='capitalize' fontSize='22px'>
            {exercises.name}
         </Typography>
        
    </Box>
    </React.Fragment>
  )
}

export default ExerciseCard