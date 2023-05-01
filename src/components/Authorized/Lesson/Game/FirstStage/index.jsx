// render every stage by the stage number you get from the server

import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import Question from './Question'
import PropTypes from 'prop-types';
import axios from 'axios';
import { AuthContext } from '../../../../../context/authContext'
import { useContext, useEffect, useState } from "react";
import { Container } from '@mui/material';



async function getWords(userId) {
  let withImg = true;
  let res
  try {
    res = await axios.get(`http://localhost:3600/api/lesson/words?userId=${userId}&withImg=${withImg}`)
  }
  catch (err) {
    console.log(err)
  }
  const wordsArray = res.data.words
  let wordWithImages = res.data.wordsWithImgs
  // wordWithImages = wordWithImages.filter((image,i)=>{i<10})
  const subArrays = [];
  const imagesArray = [];
  let i = 0;

  let k = 0
  while (i < wordsArray.length && i < 30) {
    const subArray = [];
    let j = 0;
    while (j < 3 && i < wordsArray.length) {
      subArray.push(wordsArray[i]);
      j++;
      i++;
    }
    if (wordWithImages[k]) {
      subArray.push(wordWithImages[k].word)
      //shuffle
      imagesArray.push(wordWithImages[k++])
    }
    else {
      imagesArray.push({ word: '' })
    }
    subArrays.push(subArray);
  }

  // Fill remaining subarrays with empty strings
  while (subArrays.length < 10) {
    imagesArray.push({ word: '' })
    subArrays.push(["", "", "", ""]);
  }

  console.log(`in fetch data` + subArrays);
  const dataToReturn = { words: subArrays, images: imagesArray }
  return dataToReturn;

}




function CustomizedSteppers(props) {
    const {setStatus,status,activeStep,setActiveStep,handleFinishStage} = props
  const { user } = useContext(AuthContext)
  const [words, setWords] = useState();
  const [images, setImages] = useState();
  console.log(images)
  useEffect(() => {
    async function fetchData() {
      const res = await getWords(user.user_id);
      console.log('this is my result' + res)
      setWords(res.words)
      setImages(res.images)
    }
    fetchData()
  }, [])

  return (
    words ?
      
          <Question status={status} setActiveStep={setActiveStep} activeStep={activeStep} setStatus={setStatus} words={words[activeStep - 1]} image={images[activeStep - 1]} handleFinishStage={handleFinishStage}></Question>
     :
      <CircularProgress></CircularProgress>
  );
}

export default CustomizedSteppers;

