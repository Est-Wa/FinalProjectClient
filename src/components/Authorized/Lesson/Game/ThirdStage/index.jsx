
import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import Question from './Question'
import PropTypes from 'prop-types';
import axios from 'axios';
import { AuthContext } from '../../../../../context/authContext'
import { useContext, useEffect, useState } from "react";
import { Container } from '@mui/material';

function shuffle(array) {
  const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
  return shuffledArray;
}

async function tryGetWordWithSound(token) {
  let res
  try {
    res = await axios.get(`http://localhost:3600/api/lesson/words?withSound=true`, { headers: { Authorization: `Bearer ${token}` } })
  }
  catch (err) {
    console.log(err)
  }
  const wordsArray = res.data.words
  const wordsWithSounds = res.data.wordsWithSounds
  const subArrays = [];
  let i = 0;
  let k = 0
  while (i < wordsArray.length && i < 100) {
    let subArray = [];
    let j = 0;
    while (j < 9 && i < wordsArray.length) {
      subArray.push(wordsArray[i]);
      j++;
      i++;
    }
    subArray.push(wordsWithSounds[k++])
    subArray = shuffle(subArray)
    subArrays.push(subArray);
  }
  while (subArrays.length < 10) {
    subArrays.push(["", "", "", "",wordsWithSounds[k++]]);
  }
  const dataToReturn = { words: subArrays, sounds: wordsWithSounds }
  return dataToReturn;

}
async function getWords(token) {
  return {
    words: [['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
    ['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
    ['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
    ['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
    ['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
    ['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
    ['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
    ['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
    ['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
    ['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today']],
  }
}

function CustomizedSteppers(props) {
  const { setStatus, status, activeStep, setActiveStep, handleFinishStage } = props
  const { user, token } = useContext(AuthContext)
  const [sounds, setSounds] = useState();
  const [words, setWords] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await tryGetWordWithSound(token);
      console.log('this is my result' )
      console.log(res)
      setWords(res.words)
      setSounds(res.sounds)
    }
    fetchData()
  }, [])

  return (
    words ?
      <Question status={status} setActiveStep={setActiveStep} activeStep={activeStep} setStatus={setStatus} words={words[activeStep - 1]} sound={sounds[activeStep - 1]} handleFinishStage={handleFinishStage}></Question>
      :
      <CircularProgress></CircularProgress>
  );
}

export default CustomizedSteppers;