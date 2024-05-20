import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { UserAuth } from '../context/UserAuth';
import { Link, useNavigate } from 'react-router-dom';



const theme = createTheme();
export default function SignIn() {
  const navigate = useNavigate();
  const [email,setEmail]=React.useState('')
  const [password,setPassword]=React.useState('')
  const [backError,setBackError] = React.useState("")
  const {signin} = UserAuth();

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setBackError('');
    try{
      await signin(email,password);
      navigate('/')
    } catch(event){
         setBackError(event.message)
         console.log(event.message);
    }
      
  }
  return (
    <ThemeProvider theme={theme}>

      <Container maxWidth="xs">
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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
            color:"#3A1212"}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color='error'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color='error'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Typography color='red'>
              {backError}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:'#ff2625'}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2" color="#3A1212">
                Don't have an account? <Link to='/Register' variant="body2" color="#3A1212" >Sign up</Link></Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}