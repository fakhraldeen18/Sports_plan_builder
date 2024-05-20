import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Footer from './components/Footer';
import Home from './Pages/Home';
import ExerciseDetsil from './Pages/ExerciseDetsil';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Questionnaire from './components/Questionnaire';
import { AuthProvider } from './context/UserAuth';
import HeroBanner from './components/HeroBanner';
import PrivateRoute from './context/PrivateRoute';
import Review from './components/Review';
import Program from './Pages/Program';
import Nav from './components/Nav';
import ProgramExerciseDetils from './components/ProgramExerciseDetils';




 



function App() {
  
  return (
    
   <Box width='400px' sx={{width:{xl:'1488px'}}}m='auto'> 
   
   <AuthProvider>
    <Nav/>
      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='/' element={<PrivateRoute> <Home/> </PrivateRoute>} />
        <Route path='/Questionnaire' element={<Questionnaire/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/HeroBanner' element={<HeroBanner/>} />
        <Route path='/Review' element={<Review/>} />
        <Route path="/exercise/:id" element={<ExerciseDetsil />} />
        <Route path="/programExercise/:name" element={<ProgramExerciseDetils />} />
        <Route path='/Program' element={<Program/>} />
        <Route path='/Nav' element={<Nav/>} />
      </Routes>
      <Footer/>
      </AuthProvider>
      
   </Box>
  );
}

export default App;
