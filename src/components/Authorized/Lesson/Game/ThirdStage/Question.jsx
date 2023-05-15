import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';


function shuffle(array) {
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    return shuffledArray;
}

export default function ActionAreaCard(props) {
    const [locations, setLocations] = useState(
        [{ right: `2%` },
        { right: `40%` },
        { right: `10%` },
        { right: `70%` },
        { right: `4%` },
        { right: `50%` },
        { right: `10%` },
        { right: `25%` },
        { right: `75%` },
        { right: `65%` }]
    )
    const [sizes, setSizes] = useState(
        [{ width: `20%`, fontSize: 'xx-large' },
        { width: `10%`, fontSize: 'large' },
        { width: `20%`, fontSize: 'xx-large' },
        { width: `23%`, fontSize: 'xx-large' },
        { width: `20%`, fontSize: 'x-large' },
        { width: `12%`, fontSize: 'x-large' },
        { width: `17%`, fontSize: 'x-large' },
        { width: `20%`, fontSize: 'xx-large' },
        { width: `9%`, fontSize: 'large' },
        { width: `15%`, fontSize: 'x-large' }])


    useEffect(() => {
        setLocations(shuffle([...locations]));
        setSizes(shuffle([...sizes]));
    }, [])

    console.log(locations[0]);
    console.log(sizes[0]);

    const { activeStep, setActiveStep, setStatus, status, voice, handleFinishStage, words } = props
    let trialNumber = 1;

    function checkAnswer(word) {
        if (word === voice.word) {
            switch (trialNumber) {
                case (1):
                    setStatus([...status].map((s, i) => i == activeStep - 1 ? 'great' : s));
                    break;
                case (2):
                    setStatus([...status].map((s, i) => i == activeStep - 1 ? 'ok' : s));
                    break;
                case (3):
                    setStatus([...status].map((s, i) => i == activeStep - 1 ? 'pass' : s));
                    break;
            }
            if (activeStep == 10) {
                handleFinishStage(status)
            }
            setActiveStep(activeStep + 1);
        }
        else if (trialNumber == 3) {
            setStatus([...status].map((s, i) => i == activeStep - 1 ? 'fail' : s));
            if (activeStep == 10) {
                handleFinishStage(status)
            }
            setActiveStep(activeStep + 1);
        }
        trialNumber += 1
    }

    return (
        <Card sx={{ width: '70vw' }}>
<ReactAudioPlayer
                src={voice.voice}
                controls
            /> 
            {words.map((word, i) => <Button variant='outlined' onClick={() => checkAnswer(word)} key={i} sx={{ ...locations[i], ...sizes[i], position: 'relative', textAlign: 'center', margin: '10px', display: 'block' }}>{word}</Button>)}
        </Card>
    )
}
