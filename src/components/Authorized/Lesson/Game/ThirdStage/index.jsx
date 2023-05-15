 
import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import Question from './Question'
import PropTypes from 'prop-types';
import axios from 'axios';
import { AuthContext } from '../../../../../context/authContext'
import { useContext, useEffect, useState } from "react";
import { Container } from '@mui/material';


async function getWords(token){
return {words:[['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today'],
['hello', 'how', 'are', 'you', 'today', 'hello', 'how', 'are', 'you', 'today']],
voices:[{voice:"Cave.mp3",word:'hello'},
{voice:"Cave.mp3",word:'hello'},
{voice:"Cave.mp3",word:'hello'},
{voice:"Cave.mp3",word:'hello'},
{voice:"Cave.mp3",word:'hello'},
{voice:"Cave.mp3",word:'hello'},
{voice:"Cave.mp3",word:'hello'},
{voice:"Cave.mp3",word:'hello'},
{voice:"Cave.mp3",word:'hello'},
{voice:"Cave.mp3",word:'hello'}]
}
}

 function CustomizedSteppers(props) {
    const { setStatus, status, activeStep, setActiveStep, handleFinishStage } = props
    const { user, token } = useContext(AuthContext)
    const [voices, setVoices] = useState();
    const [words, setWords] = useState();

    useEffect(() => {
        async function fetchData() {
          const res = await getWords(token);
          console.log('this is my result' + res)
          setWords(res.words)
          setVoices(res.voices)

          console.log(words)
          console.log(voices)
        }
        fetchData()
      }, [])
  
    return (
        words?
        <Question status={status} setActiveStep={setActiveStep} activeStep={activeStep} setStatus={setStatus} words={words[activeStep - 1]} voice={voices[activeStep - 1]} handleFinishStage={handleFinishStage}></Question>
      :
      <CircularProgress></CircularProgress>
    );
  }
  
  export default CustomizedSteppers;