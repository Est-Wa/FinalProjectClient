import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import { Box } from '@mui/material';

export default function ProgressMobileStepper(props) {
  
  const {activeStep} = props
  return (
    <Box sx={{width:'50%',position:'relative', right:'35%'}}>
    <MobileStepper
      variant="progress"
      steps={11}
      position='static'
      activeStep={activeStep}      
      sx={{ maxWidth: 700,}}
    />
    </Box>
  );
}
