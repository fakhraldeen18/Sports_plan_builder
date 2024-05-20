import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Stack, TextField } from '@mui/material';



  

 
    

export default function PushUpReps({userData,setUserData}) {
    const [trainingExperience, setTrainingExperience] = React.useState('0-1');
        console.log({userData})

        const UserHandler = (e)=>{
          const {name,value} =e.target;
          setUserData((pre)=>{
            return{
              ...pre,
              [name]:value
            }
          })
        }
  return (
    <React.Fragment>
        <Grid container spacing={3}>
          <Stack xs={12} sm={6} alignItems='center'  justifyContent='center' sx={{ml:{lg:'120px',sm:'100px',xs:'30px'}}}>
        <Typography variant="h6"  fontWeight={700} gutterBottom align='center'  justifyContent='center' mb='20px' sx={{ color:"#3A1212"}}>
        How many times do push-up reps?
      </Typography>
    <Grid item xs={3} sm={3}>
                <TextField
                  name="pushUp"
                  required
                  fullWidth
                  id="pushUp"
                  value={userData.pushUp}
                  type='number' 
                  color='error' 
                  onChange={UserHandler}  
                />
              </Grid>
              {userData.pushUp <= 0 && ' ' ?
              <Typography pt='10px' color='error'>
                  Your must inter number
                </Typography>: ' '}
                
              

          </Stack>
          {/* <ToggleButtonGroup
      value={userData['trainingExperience']}
      exclusive
      color='error'
      orientation="vertical"
      onChange={(e) => setUserData({...userData,'trainingExperience':e.target.value})}
      aria-label="Platform"
      size="large" 
      item xs={12} md={6}
      sx={{
        position:'relative',
        mt:'20px',
        pl:{lg:'20px',xs:'0px'},
        left:{lg:'0px',xs:'-30px'},
        color:'error'
      }}
    >
      <ToggleButton value="0-1">0-1</ToggleButton>
      <ToggleButton value="2-3">2-3</ToggleButton>
      <ToggleButton value="4-5">4-5</ToggleButton>
    </ToggleButtonGroup> */}


      </Grid>

    </React.Fragment>
  );
}