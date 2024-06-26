import React,{useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar'


function SearchExercises( {setExercises,bodypart,setBodyPart}) {

    const [search,setSearch]= useState('')
    const [bodyParts,setBodyParts] = useState([]);


    useEffect(()=>{
        const fetchExercisesData= async () =>{
            const bodypartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            setBodyParts(['all', ...bodypartsData])

        }
        fetchExercisesData();
    },[])

    const handleSeach = async () =>{
        if(search){
            const exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

            const searchedExercises = exercisesData.filter((item) => 
                       item.name.toLowerCase().includes(search)
                       || item.target.toLowerCase().includes(search)
                       || item.equipment.toLowerCase().includes(search)
                       || item.bodyPart.toLowerCase().includes(search)
              );
        
              window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        
              setSearch('');
              setExercises(searchedExercises);
            }
          };
  return (
    <Stack alignItems='center'  sx={{mt:{lg:'100px',xs:'37px'}}}  justifyContent='center' p='20px'>
        <Typography fontWeight={700} sx={{
            fontSize:{lg:'44px',xs:"30px"},
            color:"#3A1212"
        }} mb='50px' textAlign='center'>
         Awesome Exercise You<br/>
         Should Know   
        </Typography>
     <Box position='relative' mb='72px'>
        <TextField  sx={{
           input:{
            fontWeight:'700',
            border:'none',
            borderRadius:'4px',
           } ,
           width:{lg:'1274px',xs:'310px'},
           backgroundColor:'#fff',
           borderRadius:'4px'
        }}
        height='76px'
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'
        />
        <Button className='search-btn' sx={{
            bgcolor:'#ff2625',
            color:'#fff',
            textTransform:'none',
            width:{lg:'175px',xs:'14px'},
            fontSize:{lg:'20px',xs:'14px'},
            height:'56px',
            position:'absolute',
            right:{lg:0}
        }}
        onClick={handleSeach}
        >
            Search
        </Button>
        </Box>  
        <Box sx={{position:'relative' , width:'100%',p:'20px'}}>
            <HorizontalScrollbar data={bodyParts} bodypart={bodypart} setBodyPart={setBodyPart} isBodyParts />
            </Box> 
    </Stack>
  )
}

export default SearchExercises