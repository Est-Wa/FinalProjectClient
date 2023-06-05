//stage: props
import React from "react";
import Stars from './Stars'
import FirstStage from './FirstStage'
import Progress from './Progress'
import Box from '@mui/material/Box';
import { useContext, useState } from "react";
import SecondStage from "./SecondStage";
import ThirdStage from './ThirdStage'
import { LessonContext } from "../../../../context/lessonContext";
import StageFinished from "./StageFinished";

const gradeDict = { 'great': 5, 'ok': 3, 'pass': 1, 'fail': 0, '': 0 };

export default function Game(props) {

  function Stage(props) {
    switch (props.stage) {
      case 1:
        return <FirstStage status={status} setActiveStep={setActiveStep} activeStep={activeStep} setStatus={setStatus} handleFinishStage={handleFinishStage}></FirstStage>
      case 2:
        return <SecondStage></SecondStage>
        case 3:
          return <ThirdStage status={status} setActiveStep={setActiveStep} activeStep={activeStep} setStatus={setStatus} handleFinishStage={handleFinishStage}></ThirdStage>
    }
  }

  const [status, setStatus] = useState(['', '', '', '', '', '', '', '', '', ''])
  const [activeStep, setActiveStep] = useState(1);
  const {success,updateSuccess,stage} = useContext(LessonContext)

  async function handleFinishStage() {
    let tmp = 0;
    status.forEach(s => {
      tmp += gradeDict[s]
    });
    tmp /= 10;
    tmp = Math.round(tmp)
    await updateSuccess(tmp)
  }

  return (
    activeStep !== 11 ?
    <>
    <Progress activeStep={activeStep - 1}/>

      <Box
        style={{   
          width:'100%',
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',         
        }}>
        <Stage stage={stage}/>
        <Stars status={status}/>
      </Box></> : 
    <StageFinished res={success}></StageFinished>
  )
}