import { Stack, Typography , Table , TableBody , TableCell , TableContainer , TableHead , TableRow } from '@mui/material'
import { doc  , onSnapshot , updateDoc} from 'firebase/firestore';
import React, { useEffect, useState }  from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { db } from '../firebase';
import { UserAuth } from '../context/UserAuth';

  
const  SavedExercises = () => {

    const [exercises , setExercises]= useState([]); 
    const {user} = UserAuth();
    useEffect (()=>{
        onSnapshot(doc(db,"users",`${user?.email}`),(doc)=>{
            setExercises(doc.data()?.exerciselist)
            console.log(doc.data()?.exerciselist);
        })
        console.log(exercises);
    },[user?.email])
    console.log(exercises);

    const exercisePath = doc(db,"users",`${user?.email}`);

    const deleteExercise = async (passedId)=>{
        try{
            const result = exercises.filter((item)=> item.id !== passedId)
            await updateDoc(exercisePath,{
                exerciselist:result
            })
        } catch(e){
            console.log(e.message);
        }
    }



  return (
    <Stack>
        {exercises?.length === 0 ? (
            <Typography>
            You don't hane any Exercises saved. 
            Please save exercise to add it to your Exercises List.
            {/* <Link to='/Checkout'> Click here to add your sport information and search exercise </Link> */}
         </Typography>
        ):(
            <TableContainer >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Exercise</TableCell> 
                  <TableCell>Body Part</TableCell>
                  <TableCell align='center' >Remove</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {exercises?.map((exercise) => (
                  <TableRow
                    key={exercise.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                        
                       <Stack direction='row'>
                       <Link to={`/exercise/${exercise.id}`}> 
                         <img src={exercise.image} alt={exercise.name} width="80px"/>
                         </Link>
                         <Stack>
                            <Typography sx={{mt:'30px',ml:'15px'}}>
                                {exercise.name}
                            </Typography>
                         </Stack>
                       </Stack>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {exercise.bodyPart}
                    </TableCell>
                    <TableCell align='center' > <AiOutlineClose onClick={()=>deleteExercise(exercise.id) } cursor='pointer'/> </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      
        )}

    </Stack>
  )
}

export default SavedExercises