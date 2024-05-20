import React, { useState , useEffect} from 'react'
import { Stack, Table , TableBody , TableCell , TableContainer , TableHead , TableRow, Typography } from '@mui/material'
import axios from 'axios';

const UserProgram = ()=> {
    useEffect (()=>{ 
        axios.get('js/data.json').then(res=>{setExercise(res.data.exercise)}) 
         },[])

    const [exercise,setExercise] = useState([]);

    const ee =[{
        'Chest':
         {
        'upper': 'Low To High Cable Fly',
        'middle': 'Dumbbell Press',
        'lower': 'High To Low Cable Fly'
      }
        ,
    
       'Back':
        {'upper': 'Seated Cable Row',
        'lats': 'Pull-ups',
        'traps': 'Barbell Shrugs'}
        ,
    
       'Shoulders': 
       {'front': 'Dumbbell Press',
        'lateral': 'Dumbbell Lateral Raises',
        'rear': 'Face Pulls'}
        ,
    
       'Biceps':
        {
        'long head': 'Hammer Curls',
        'short head': 'Barbell Curls'
        }
       ,
    
       'Triceps':
        {'long head': 'Dumbbell Overhead Extension',
        'medial head': 'Skull Crushers',
        'lateral head': 'Dumbbell Kickbacks'}
        ,
    
       'Legs': 
       {'quads': 'Squats',
        'hamstrings': 'Lying Leg Curls',
        'glutes': 'Hip Thrusts',
        'calves': 'Seated Calf Raises'}
      } ]
     



      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];      

  return (
    <TableContainer>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell style={{fontSize:'15px'}}>Body Part</TableCell>
          <TableCell  style={{fontSize:'15px'}}>Exercises</TableCell>
          {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {exercise.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Stack direction='row'>
                <img src={row.image} width="80px"/>
              <Stack m='20px'>
                <Typography>
                     {row.name}
                </Typography>
              </Stack>
               </Stack>
            </TableCell>
            <TableCell>{row.exercises}</TableCell>
            {/* <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}

export default UserProgram