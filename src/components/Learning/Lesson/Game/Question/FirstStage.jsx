import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import kiwi from './kiwi.jpg'

export default function ActionAreaCard(props) {
    const { activeStep, setActiveStep } = props;

    const words = [['בננה', 'תפוז', 'תפוח', 'קיוי'],['zxcvb', 'zxcvbnm,', 'zxcvbn', 'zxcvb'],['בננewrה', 'תwreפוז', 'תפewrוח', 'קיוי'],['af', 'asdjf', 'aklsdjfl', 'fksdjao']]
    return (
        <Box>
            <Grid container
                spacing={10}>
                <Grid item >
                    <Grid
                        container
                        direction="column"
                        alignItems="center">
                        <>
                            {words[activeStep-1].map((word, index) => {
                                return (
                                    <Grid item key={index} style={{ width: '100%', margin: '10px' }} >
                                        <Button variant="outlined" onClick={() => (setActiveStep(activeStep + 1))}>{word}</Button>
                                    </Grid>)
                            })}
                        </>
                    </Grid>
                </Grid>
                <Grid item  >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea >
                            <CardMedia
                                sx={{
                                    height: 300
                                    , width: 300
                                }}
                                image={kiwi}
                                alt='kiwi'
                            />

                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid></Box>
    );
}
