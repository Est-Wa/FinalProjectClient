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

  const { stage } = props;
  const [status, setStatus] = useState(['', '', '', '', '', '', '', '', '', ''])
  const [activeStep, setActiveStep] = useState(1);
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
    activeStep !== 11 ?
      <Box
        style={{   
          width:'100%',
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center',         
        }}>
        <Progress activeStep={activeStep - 1}/>
        <Stage stage={stage}/>
        <Stars status={status}/>
      </Box> : <>Game is finished</>
  )
}