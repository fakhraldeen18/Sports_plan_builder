import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData  ,youtubeOptions} from '../utils/fetchData';
import  ProgramExerciseVideos  from '../components/ProgramExerciseVideos'




const ProgramExerciseDetils = () => {

  const [exerciseVideos,setExerciseVideos]= useState([]);
  const {name}=useParams();

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchExercisesData = async ()=>{

      const youtubeSearchUrl  ='https://youtube-search-and-download.p.rapidapi.com';

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${name}`,youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      
      
    }
    fetchExercisesData();
  },[name])



  return (
   <Box>
      <ProgramExerciseVideos exerciseVideos={exerciseVideos} name ={name}/>
   </Box>
  )
}

export default ProgramExerciseDetils