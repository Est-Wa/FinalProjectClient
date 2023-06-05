import { Card, Button, Typography, Box } from '@mui/material';
import React from 'react'
import { useContext, useState } from "react";
import { LessonContext } from "../../../../context/lessonContext";
import Lesson from '../../Lesson'


function StageFinished({ res }) {
    const { nextStage } = useContext(LessonContext)
    const [backToGame, setBackToGame] = useState(false)
    async function next() {
        await nextStage()
        setBackToGame(true)
    }
    function again() {
        setBackToGame(true)
    }
    return (
        backToGame?<Lesson></Lesson>:
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '80px' }}>
            <Card sx={{ width: '50%', height: '20em', textAlign: 'center', paddingTop: '7em' }}>
                <Typography>You have finished the stage😂😊😂❤</Typography>
                <Typography> Your grade is {res * 20}%</Typography>
                <Button variant='outlined' onClick={()=>next()}>Next Stage</Button>
                <Button variant='outlined' onClick={()=>again()}>Try again</Button>
            </Card></Box>
    )
}

export default StageFinished;