//stage: props
import React from "react";
import Stars from './Stars'
import FirstStage from './FirstStage'
import Progress from './Progress'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AuthContext } from '../../../../context/authContext'
import { useContext, useEffect, useState } from "react";
import SecondStage from "./SecondStage";
import { LessonContext } from "../../../../context/lessonContext";

const gradeDict = { 'great': 5, 'ok': 3, 'pass': 1, 'fail': 0, '': 0 };

export default function (props) {

  function Stage(props) {
    switch (props.stage) {
      case 1:
        return <FirstStage status={status} setActiveStep={setActiveStep} activeStep={activeStep} setStatus={setStatus} handleFinishStage={handleFinishStage}></FirstStage>
      case 2:
        return <SecondStage></SecondStage>
    }
  }

  const { stage } = props;
  const [status, setStatus] = useState(['', '', '', '', '', '', '', '', '', ''])
  const [activeStep, setActiveStep] = useState(1);
  const { user } = useContext(AuthContext)
  const {setSuccess,updateSuccess,nextStage} = useContext(LessonContext)

  async function handleFinishStage(success) {
    let res = 0
    success.forEach(s => {
      res += gradeDict[s]
    });
    res /= 10;
    res = Math.round(res)
    alert('finished the stage😂😊😂❤')
    setSuccess(res)
    await updateSuccess()
    await nextStage()
  }

  return (
    activeStep != 11 ?
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
        <Stage stage={stage}></Stage>
        <br />
        <Stars status={status}></Stars>
      </Box> : <>Game is finished</>
  )
}