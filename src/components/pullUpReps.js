import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';

export default function PullUpReps({userData,setUserData}) {
  
        const [alignmentt, setAlignmentt] = React.useState('three Days');
        const handleChange = (event, newAlignment) => {
            setAlignmentt(newAlignment);
          };

          const UserHandler = (e)=>{
            const {name,value} =e.target;
            setUserData((pre)=>{
              return{
                ...pre,
                [name]:value
              }
            })
          }

          console.log({userData})
    
  return (
    <React.Fragment>
         <Grid container spacing={3}>
         <Stack xs={12} sm={6} alignItems='center'  justifyContent='center' sx={{ml:{lg:'120px',sm:'100px',xs:'30px'}}}>
           <Typography variant="h6"  fontWeight={700} gutterBottom  align='center'  justifyContent='center' mb='20px' sx={{ color:"#3A1212"}}>
                How many times do pull-up reps?
             </Typography>
             <Grid item xs={3} sm={3}>
                <TextField
                  name="pullUp"
                  required
                  fullWidth
                  id="pullUp"
                  value={userData.pullUp}
                  type='number' 
                  color='error' 
                  onChange={UserHandler}  
                />
              </Grid>

              {userData.pullUp <= 0 && ' ' ?
              <Typography pt='10px' color='error'>
                  Your must inter number
                </Typography>: ' '}

          </Stack>
        
        </Grid>

    </React.Fragment>
  );
}