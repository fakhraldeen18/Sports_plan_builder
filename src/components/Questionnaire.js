import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Box , Paper , Container , Stepper , Step, StepLabel , Button , Typography , styled  } from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SquatWeight from './SquatWeight';
import PushUpReps from './PushUpReps';
import Review from './Review';
import PullUpReps from './pullUpReps';
import PropTypes from 'prop-types';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { UserAuth } from '../context/UserAuth';
import { useNavigate } from 'react-router-dom';
import { doc , getDoc,  } from 'firebase/firestore';
import { db } from '../firebase';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#3A1212',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#3A1212',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));
  
  const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#3A1212',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#3A1212',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));
  
  function QontoStepIcon(props) {
    const { active, completed, className } = props;
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }
  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
  };

const steps = ['Push up reps', 'Pull up reps','Squat reps','Review'];





const theme = createTheme();


export default function Questionnaire() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [userData,setUserData] = React.useState([]);
    const navigate = useNavigate();
    const {uData,user} = UserAuth();


    const [weightAndHeight,setWeightAndHeight] = React.useState([]);

    React.useEffect(()=>{
      const q = doc(db,'users',`${user?.email}`);
      getDoc(q)
      .then((doc)=>{
        setWeightAndHeight(doc.data())
      })
  
    },[`${user?.email}`])

    const handleSubmit= async (event)=>{
      event.preventDefault();
      try{
        await uData(user.email,weightAndHeight.weight,weightAndHeight.height,userData.pushUp,userData.pullUp,userData.squat)
        navigate('/Program')
      }catch(event){
        console.log(event.message);
      } 
    }



    function getStepContent(step) {
  switch (step) {
    case 0:
      return <PushUpReps userData={userData} setUserData={setUserData}/>;
    case 1:
      return <PullUpReps userData={userData} setUserData={setUserData}/>;
    case 2:
      return <SquatWeight userData={userData} setUserData={setUserData} user={user}/>;
    case 3:
      return <Review userData={userData} setUserData={setUserData}/>;

    default:
      throw new Error('Unknown step');
  }
}



  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component='form' maxWidth="sm" sx={{ mb: 4}}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }}}>
          <Stepper  activeStep={activeStep} sx={{ pt: 3, pb: 5 , color:'' }} alternativeLabel connector={<QontoConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your time.
              </Typography>
              <Typography variant="subtitle1">
                .......
              </Typography>
              <Button color='error' onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>

                  <Button variant="contained"
                  color='error' onClick={handleSubmit} sx={{ mt: 3, ml: 1 }}>
                    Submit
                  </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>

                {activeStep !== 0 && (
                  <Button color='error' onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                

                <Button
                  variant="contained"
                  color='error'
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1}}
                >
                  {activeStep === steps.length - 1 ? 'Confirm information' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        
      </Container>
    </ThemeProvider>
  );
}