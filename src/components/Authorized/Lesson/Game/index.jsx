// render every stage by the stage number you get from the server

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import StepLabel from '@mui/material/StepLabel';
import StarIcon from '@mui/icons-material/Star';
import FirstStage from './Question/FirstStage'
import PropTypes from 'prop-types';
import Stars from './Stars'
import Progress from './Progress';
import axios from 'axios';
import { AuthContext } from '../../../../context/authContext'
import { useContext, useEffect, useState } from "react";
import { Container } from '@mui/material';



async function getWords(userId) {
  let withImg=true;
  let res
  try{
  res = await axios.get(`http://localhost:3600/api/lesson/words?userId=${userId}&withImg=${withImg}`)}
  catch(err){
    console.log(err)
  }
  const wordsArray = res.data.words
  let wordWithImages = res.data.wordsWithImgs
  // wordWithImages = wordWithImages.filter((image,i)=>{i<10})
  const subArrays = [];
  let i = 0;

  let k = 0
  while (i < wordsArray.length && i<30) {
    const subArray = [];
    let j = 0;
    while (j < 3 && i < wordsArray.length) {
      subArray.push(wordsArray[i]);
      j++;
      i++;
    }
    if(wordWithImages[k]){
    subArray.push(wordWithImages[k].word)}
    //shuffle
    subArray.push(wordWithImages[k++])
    subArrays.push(subArray);
  }

  // Fill remaining subarrays with empty strings
  while (subArrays.length < 10) {
    subArrays.push(["", "", "", ""]);
  }

  console.log(`in fetch data` + subArrays);

  return subArrays;

}

const gradeDict = {'great':5,'ok':3,'pass':1,'fail':0};

function handleFinishStage(success){
  let res
    success.forEach(s => {
      res+=gradeDict[s]
    });
    res /=10;
    res = Math.round(res)
    //axios setSuccess;
    return res;
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