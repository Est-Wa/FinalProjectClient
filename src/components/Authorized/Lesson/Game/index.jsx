// render every stage by the stage number you get from the server

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Grid from '@mui/material/Grid';
import StepLabel from '@mui/material/StepLabel';
import StarIcon from '@mui/icons-material/Star';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import FirstStage from './Question/FirstStage'
import PropTypes from 'prop-types';
import Stars from './Stars'
import Progress from './Progress';

const words = [['בננה', 'תפוז', 'תפוח', 'קיוי'],
['zxcvb', 'zxcvbnm,', 'zxcvbn', 'zxcvb'],
['zxcvb', 'zxcvbnm,', 'zxcvbn', 'dfjkaso'],
['zxcvb', 'zxcvbnm,', 'sdkfjoeiw', 'zxcvb'],
['zxcvb', 'sdfjoew,', 'zxcvbn', 'zxcvb'],
['djfoi', 'zxcvbnm,', 'zxcvbn', 'zxcvb'],
['zxcvb', 'ifjoi,', 'djfoal', 'zxcvb'],
['בננewrה', 'תwreפוז', 'תפewrוח', 'קיוי'],
['בננewrה', 'תwreפוז', 'תפewrוח', 'jdfhi'],
['af', 'asdjf', 'aklsdjfl', 'fksdjao']]
export default function CustomizedSteppers() {

  const [status, setStatus] = React.useState(['','','','','','', '','','', ''])
  const [activeStep, setActiveStep] = React.useState(1);
  console.log(activeStep)
  return (
    <Box
      style={{
        position: 'absolute',
        top: '25%',
        left: '25%',
        width: '600px', height: '600px'
      }}>
      <Grid container justifyContent="center">
        <Progress activeStep={activeStep-1}  ></Progress>
      </Grid>
      <FirstStage status = {status} setActiveStep={setActiveStep} activeStep={activeStep} setStatus={setStatus} words={words[activeStep - 1]}></FirstStage>
      <br />
      <Stars status = {status}></Stars>
    </Box>
  );
}
