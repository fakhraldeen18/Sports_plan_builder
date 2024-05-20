import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { UserAuth } from '../context/UserAuth';
import { doc , getDoc,  } from 'firebase/firestore';
import { db } from '../firebase';




export default function Review({userData,setUserData}) {

  const { user } = UserAuth();
  const [weightAndHeight,setWeightAndHeight] = React.useState([]);

  React.useEffect(()=>{
    const q = doc(db,'users',`${user?.email}`);
    getDoc(q)
    .then((doc)=>{
      setWeightAndHeight(doc.data())
      console.log(doc.data());
      console.log({weightAndHeight});
    })

  },[`${user?.email}`])




 const Data = [
  {
    name: 'Push up reps:',
    price: `${userData.pushUp}`,
  },
  {
    name: 'Pull up reps:',
    price: `${userData.pullUp}`,
  },
  {
    name: 'squat reps:',
    price: `${userData.squat}`,
  },
  {
    name: 'Weight:',
    price: `${weightAndHeight.weight}`,
  },
  {
    name: 'Height:',
    price: `${weightAndHeight.height}`,
  },
  
]; 
    
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom fontSize={'25px'} color={'#3A1212'}>
        summary
      </Typography>
      <List disablePadding>
        

        {Data.map((Data) => (
          <ListItem  sx={{ py: 1, px: 0 }}>
            <ListItemText primary={Data.name} secondary={Data.desc} color={'#3A1212'}/>
            <Typography variant="body2" color={'#3A1212'}>{Data.price}</Typography>
          </ListItem>
        ))}
        

        {/* <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem> */}
      </List>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid> */}
        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}