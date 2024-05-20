import React,{useState} from 'react'
import {Box}from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


function Home() {
    const [bodypart,setBodyPart]= useState('all')
    const [exercises,setExercises]= useState([])

  return (
    <Box>
    <HeroBanner/>
    <SearchExercises
    setExercises={setExercises}
    bodypart={bodypart}
    setBodyPart={setBodyPart}
    />
    <Exercises
    exercises={exercises}
    setExercises={setExercises}
    bodypart={bodypart}
    />
    </Box>

     
)}

export default Home