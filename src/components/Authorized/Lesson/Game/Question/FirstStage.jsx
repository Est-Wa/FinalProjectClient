import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button  from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import kiwi from './kiwi.jpg'



export default function ActionAreaCard(props) {
    const { activeStep, setActiveStep, setStatus, status } = props;
    const [trialNumber, setTrialNumber] = React.useState(1);

    // function checkAnswer(word) {
    //     if (word == image.name) {
    //         switch (trialNumber) {
    //             case (1):
    //                 setStatus([...status].map((s, i) => { return i == activeStep - 1 ? 'great' : s }));
    //             case (2):
    //                 setStatus([...status].map((s, i) => { return i == activeStep - 1 ? 'ok' : s }));
    //             case (3):
    //                 setStatus([...status].map((s, i) => { return i == activeStep - 1 ? 'pass' : s }));
    //         }
    //         setActiveStep(activeStep + 1); 
    //     }
    //     else if (trialNumber == 3) {
    //         setStatus([...status].map((s, i) => { return i == activeStep - 1 ? 'fail' : s }));
    //         setActiveStep(activeStep + 1);
    //     }
    //     setTrialNumber(trialNumber+1)
    // }

    function checkAnswer(word){
        const arr = ['great','ok','pass','fail']
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        setStatus([...status].map((s, i) => { return i == activeStep - 1 ? item : s }));
        setActiveStep(activeStep + 1); 
    }

    const words = props.words;
    const image = words[4];
    // import imgPath from image.path;
    return (
        <Grid container
            spacing={10}>
            <Grid item >
                <Grid
                    container
                    direction="column"
                    alignItems="center">
                    <>
                        {words.map((word, index) => {
                            return (
                                <Grid item key={index} style={{ width: '100%', margin: '10px' }} >
                                    <Button variant="outlined" onClick={() => { checkAnswer(word) }}>{word}</Button>
                                </Grid>)
                        })}
                    </>
                </Grid>
            </Grid>
            <Grid item  >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{
                            height: 300,
                            width: 300
                        }}
                        image={kiwi}
                        alt='kiwi'
                    />
                </Card>
            </Grid>
        </Grid>
    );
}
