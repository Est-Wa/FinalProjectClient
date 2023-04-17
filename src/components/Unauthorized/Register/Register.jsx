import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import { useContext } from "react";
import { AuthContext } from '../../../context/authContext'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const steps = [' רישום למערכת', 'פרטים אישיים', 'בחירת ניקוד', 'עדכון רמה'];

export default function Register() {

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:3600/api/auth/register",
        {
          password: password,
          user_name: userName,
          user_firstName: userFirstName,
          user_lastName: userLastName,
          email_address: emailAddress,
          student_firstName: studentFirstName,
          student_lastName: studentLastName,
          birth_date: birthDate,
          gender: gender
        }
      )
      console.log(res);
    }
    catch (err) {
      console.log(err)
    }
  }
  const navigate = useNavigate();
  const [password, setPassword] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userLastName, setUserLastName] = React.useState();
  const [userFirstName, setUserFirstName] = React.useState();
  const [emailAddress, setEmailAddress] = React.useState();
  const [studentFirstName, setStudentFirstName] = React.useState();
  const [studentLastName, setStudentLastName] = React.useState();
  const [birthDate, setBirthDate] = React.useState();
  const [gender, setGender] = React.useState();
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

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <FirstStep
          userName={userName}
          emailAddress={emailAddress}
          password={password}
          handleNext={handleNext}
          setPassword={setPassword}
          setUserName={setUserName}
          setEmailAddress={setEmailAddress} />;
      case 1:
        return <SecondStep
          handleNext={handleNext}
          firstName={userFirstName}
          setUserFirstName={setUserFirstName}
          lastName={userLastName}
          setUserLastName={setUserLastName}
          sLastName={studentLastName}
          setStudentFirstName={setStudentFirstName}
          sFirstName={studentFirstName}
          setStudentLastName={setStudentLastName}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          gender={gender}
          setGender={setGender}/>;
      case 2:
        return <ThirdStep
          handleNext={handleNext}
        />;
      case 3:
        return <FourthStep
          handleNext={handleNext}
        />;
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

  const { LogedIn, setLogedIn, logout } = useContext(AuthContext)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const closeStepper = async () => {
    handleClose();
    setLogedIn(true);
    navigate()
    await register();
  }

  return (
    <>
      <Button style={{ margin: '10px', color: 'purple', backgroundColor: 'white' }} id='lgnBtn' variant="contained" onClick={handleOpen}>Sign Up</Button>
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
            setTimeout(closeStepper, 3000),
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
                {activeStep === steps.length - 1 ?
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {'סיום'}
                  </Button> : <></>}
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Modal>
    </>
  );
}
