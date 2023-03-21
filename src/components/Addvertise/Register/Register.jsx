import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import { useContext } from "react";
import {AuthContext} from '../../../context/authContex'
import { useNavigate } from "react-router-dom";




const steps = [' רישום למערכת', 'פרטים אישיים', 'בחירת ניקוד','עדכון רמה'];


function getStepContent(step) {
  switch (step) {
    case 0:
      return <FirstStep />;
    case 1:
      return <SecondStep />;
    case 2:
      return <ThirdStep />;
    case 3:
      return <FourthStep/>;
    default:
      throw new Error('Unknown step');
  }
}


export default function Register() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    backgroundColor: 'white',
    padding: '2%'
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const {LogedIn,setLogedIn} = useContext(AuthContext)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const closeStepper = () => {
    handleClose();
    setLogedIn(true);
    navigate()
  }

  return (
    <>
      <Button style={{margin:'10px' ,color:'purple' , backgroundColor:'white'}} id='lgnBtn' variant="contained"  onClick={handleOpen}>Sign Up</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      ><Box sx={style}>
          <Typography component="h1" variant="h4" align="center">
            רישום
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            setTimeout(closeStepper,3000),
            <React.Fragment>
            <Typography variant="h5" gutterBottom>
              הרישום הסתיים בהצלחה!
            </Typography>
            <Typography variant="subtitle1">

              מהיום תוכלו ללמוד ולהתקדם

              תוכלו לראות איך תוכנית הלימודים עובדת,

              לעבור ישירות אל השיעור שלכם

              או לעקוב אחר הלמידה

              בהצלחה!

            </Typography>
          </React.Fragment>
            
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    הקודם
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'סיום' : 'הבא'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Modal>
    </>
  );
}
