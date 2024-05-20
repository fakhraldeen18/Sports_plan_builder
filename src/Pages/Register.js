import * as React from 'react';
import { Box, Button, CssBaseline, MenuItem, TextField, Typography, colors } from '@mui/material';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import { db } from '../firebase';
import { doc ,setDoc } from 'firebase/firestore'
import { UserAuth } from '../context/UserAuth';
import { Link, useNavigate } from 'react-router-dom';
import { Field, Form, Formik,ErrorMessage} from 'formik';
import * as Yup from 'yup';



const gender = [
  {
    value: 'male',
    label: 'male',
  },
  {
    value: 'female',
    label: 'female',
  }
];
const initialValues={

  name: "",
  email: "",
  password: "",
  birthdate: "",
  gender: "",
  age: "",
  weight: "",
  height: "",
}



const theme = createTheme();
export default function SignIn() { 

  const [backError,setBackError] = React.useState("")
  
  const {createUser} = UserAuth();
  const navigate = useNavigate();
  const [user,setUser]=React.useState({
    name: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
  })
  const handleSubmit = async (event) => {
  const {name,password,email,birthdate,gender,weight,height,age}=user
    try{
      await createUser(user.email,user.password)
      navigate('/')
    }catch(event){
      setBackError(event.message);
      console.log(event.message);
    }
//--------------------------------    
    console.log({
          email: user.email,
          password:user.password,
          name: user.name,
          birthdate:user.birthdate,
          gender: user.gender,
          weight: user.weight,
          height: user.height,
          age: user.age,

        });
//--------------------------------    
    const adduser = doc(db,"users" , user.email);
    setDoc(adduser,{
      name: user.name,
      email: user.email,
      password: user.password,
      birthdate: user.birthdate,
      gender: user.gender,
      weight: user.weight,
      height: user.height,
      age: user.age,
      exerciselist:[],
    });

  }

  const UserHandler = (e)=>{
    const {name,value} =e.target;
    setUser((pre)=>{
      return{
        ...pre,
        [name]:value
      }
    })
  }

  return (
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontSize:{lg:'44px',xs:"30px"},
            color:"#3A1212"}} >
            Sign up
          </Typography>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {(props)=>(
              <Form>

          <Box noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>

            <Grid item xs={12}>
                <Field as={TextField}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  color='error'
                  value={user.email}
                  onChange={UserHandler} 
                />
              </Grid>

            <Grid item xs={12} sm={6}>
                <Field as={TextField}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  color='error'
                  value={user.name}
                  onChange={UserHandler} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field as={TextField}
                  name="age"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  type='number' 
                  color='error' 
                  value={user.age}
                  onChange={UserHandler}  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field as={TextField}
                  name="birthdate"
                  required
                  fullWidth
                  id="birthdate"
                  label="Birthdate"
                  type='date'
                  color='error'
                  value={user.birthdate}
                  onChange={UserHandler}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field as={TextField}
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  select
                  defaultValue="male"
                  color='error' 
                  value={user.gender}
                  onChange={UserHandler}  
                  >
                  {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                  ))}
                  </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field as={TextField}
                  name="weight"
                  required
                  fullWidth
                  id="weight"
                  label="Weight"
                  color='error'
                  type='number'
                  value={user.weight}
                  onChange={UserHandler}   
                  InputProps={{
                  endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field as={TextField}
                  name="height"
                  required
                  fullWidth
                  id="height"
                  label="Height"
                  type='number' 
                  color='error' 
                  value={user.height}
                  onChange={UserHandler}  
                  InputProps={{
                  endAdornment: <InputAdornment position='end'>Cm</InputAdornment>
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Field as={TextField}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color='error'
                  value={user.password}
                  onChange={UserHandler}
                />
              </Grid>
              <Typography color='red'>
              {backError}
            </Typography>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:'#ff2625'}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="body2" color="#3A1212" >
                  Already have an account? <Link to='/' variant="body2" color="#3A1212" >Sign in</Link></Typography>  
              </Grid>
            </Grid>
          </Box>

              </Form>

            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}