import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ProgressMobileStepper(props) {
  const {activeStep} = props
  return (
    <MobileStepper
      variant="progress"
      steps={10}
      position="static"
      activeStep={activeStep}
    />
  );
}
