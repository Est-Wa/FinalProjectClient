import { Button } from "@mui/material";
import React from "react";
import { LessonContext } from '../../../../../context/lessonContext';
import { useContext, useState } from "react";
import StageFinished from "../StageFinished";


export default function SecondStage(){
    const {success,setSuccess,updateSuccess,stage} = useContext(LessonContext)
    const  [click, setClick]  =  useState(false)
    async function handleFinishStage(){
        setSuccess(0)
        await updateSuccess()
        setClick(true)
    }
    return(click?<StageFinished res={success}></StageFinished>:<>second Stage
    <Button  onClick={()=>handleFinishStage()}>click me for the next stage</Button></>)
}