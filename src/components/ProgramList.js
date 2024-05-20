import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { StepLabel } from '@mui/material';
import styled from '@emotion/styled';
import { Check } from '@mui/icons-material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Week2 from './Week2';
import Week1 from './Week1';
import Week3 from './Week3';
import Week4 from './Week4';








const theme = createTheme();


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

 const ProgramList = () => {

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Week 1', 'Week 2', 'Week 3','Week 4'];



  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Week1 />;
      case 1:
        return <Week2 />;
      case 2:
        return <Week3/>;
      case 3:
        return <Week4/>;
        
      default:
        throw new Error('Unknown step');
    }
  }



  return (
    <ThemeProvider theme={theme}>   
    <Box sx={{ width: '100%' }} mb='30px'>
      <Stepper  activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
        {steps.map((label, index) => (
          <Step sx={{color:'#3A1212'}} disabled key={label}>
            <StepLabel  color="#3A1212"  onClick={handleStep(index)} StepIconComponent={QontoStepIcon}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
</Box>
      <React.Fragment>
      {getStepContent(activeStep)}
      </React.Fragment>
    
    </ThemeProvider>
  );
}
export default ProgramList