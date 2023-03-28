import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import kiwi from './kiwi.jpg'

export default function ActionAreaCard(props) {
    const { activeStep, setActiveStep, setStatus, status } = props;
    console.log(status)
    const words = props.words;
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
                                        <Button variant="outlined" onClick={() => { setActiveStep(activeStep + 1); setStatus([...status].map((s,i)=>{return i==activeStep-1?'success':s}));  }}>{word}</Button>
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
