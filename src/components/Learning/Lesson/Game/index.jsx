// render every stage by the stage number you get from the server

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StarIcon from '@mui/icons-material/Star';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import FirstStage from './Question/FirstStage'

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
}));

function ColorlibStepIcon(props) {
  const { className } = props;
  return (
    <ColorlibStepIconRoot className={className}>
      <StarIcon />
    </ColorlibStepIconRoot>
  );
}

const steps = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const imagesUrl = []
export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useState(1);
  console.log(activeStep)
  return (
    <Box 
      // display="flex"
      // alignItems="center"
      // justifyContent="center" 
      style={{
        position: 'absolute',
        top: '15%',
        left: '30%',
        width: '600px', height: '600px'
      }}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
      <br/>
      <FirstStage setActiveStep={setActiveStep} activeStep={activeStep}></FirstStage>
    </Box>
  );
}
