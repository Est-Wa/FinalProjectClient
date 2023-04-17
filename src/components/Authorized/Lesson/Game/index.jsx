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
import axios from 'axios';
import { AuthContext } from '../../../../context/authContext'
import { useContext, useEffect, useState } from "react";



async function getWords(userId) {
  let res = await axios.get("http://localhost:3600/api/lesson/words",
    { userId })
  const wordsArray = res.data

  const subArrays = [];
  let i = 0;

  while (i < wordsArray.length) {
    debugger;
    const subArray = [];
    let j = 0;
    while (j < 4 && i < wordsArray.length) {
      subArray.push(wordsArray[i]);
      i++;
      j++;
    }
    subArrays.push(subArray);
  }

  // Fill remaining subarrays with empty strings
  while (subArrays.length < 10) {
    subArrays.push(["", "", "", ""]);
  }

  console.log(`in fetch data` + subArrays);

  return subArrays;

}

function CustomizedSteppers() {

  const { user } = useContext(AuthContext)
  const [words, setWords] = useState();
  const [status, setStatus] = useState(['', '', '', '', '', '', '', '', '', ''])
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await getWords(user.user_id);
      console.log('this is my result'+res)
      setWords(res)
    }
    fetchData()
  }, [])

  return (
    words?
    <Box
      style={{
        position: 'absolute',
        top: '25%',
        left: '25%',
        width: '600px', height: '600px'
      }}>
      <Grid container justifyContent="center">
        <Progress activeStep={activeStep - 1}  ></Progress>
      </Grid>
      <FirstStage status={status} setActiveStep={setActiveStep} activeStep={activeStep} setStatus={setStatus} words={words[activeStep - 1]}></FirstStage>
      <br />
      <Stars status={status}></Stars>
    </Box>:
    <div>loading</div>
  );
}

export default CustomizedSteppers;