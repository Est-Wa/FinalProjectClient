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
import Login from '../Login/Login'

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
          birth_date: birthDate || null,
          gender: gender != '' || null,
          vowelsForLesson: vowels,
          vowelsForLevel: level
        }
      )
      setRegistered(true);
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
  const [vowels, setVowels] = React.useState([]);
  const [level, setLevel] = React.useState([]);
  const [registered, setRegistered] = React.useState(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    backgroundColor: 'white',
    padding: '2%'
  }
  function handleFinish() {
    console.log(
      `password: ${password}\n
      userName: ${userName}\n
      userLastName: ${userLastName}\n
      userFirstName: ${userFirstName}\n
      emailAddress: ${emailAddress}\n
      studentFirstName: ${studentFirstName}\n
      studentLastName: ${studentLastName}\n
      birthDate: ${birthDate}\n
      gender: ${gender}\n
      vowels: ${vowels}\n
      level: ${level}`)
    handleNext()
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
          setGender={setGender}
          handleBack={handleBack} />;
      case 2:
        return <ThirdStep
          vowels={vowels}
          setVowels={setVowels}
          handleNext={handleNext}
          handleBack={handleBack}
        />;
      case 3:
        return <FourthStep
          level={level}
          setLevel={setLevel}
          handleFinish={handleFinish}
          handleBack={handleBack}
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

  const {setLogedIn, login } = useContext(AuthContext)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const closeStepper = async () => {
    handleClose();
    await register();
    setLogedIn(true);
    navigate('/')
    await login(userName, password)
  }

  return (
    !registered &&
    <>
      <Button style={{ margin: '10px', color: '#DB3349', backgroundColor: 'white' }} id='lgnBtn' variant="contained" onClick={handleOpen}>הרשמה</Button>
      <Modal
        // disableEnforceFocus 
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
            setTimeout(async () => await closeStepper(), 3000),
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
            </React.Fragment>
          )}
        </Box>
      </Modal>
    </>
  );
}
