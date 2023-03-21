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

export default function ActionAreaCard() {
    const words = ['בננה', 'תפוז', 'תפוח', 'קיוי']
    return (
        <Box style={{
            position: 'absolute',
            top: '40%',
            left: '30%'
        }} >
            <Grid container
                spacing={10}>
                <Grid item >
                    <Grid
                        container
                        direction="column"
                        alignItems="center">
                        <>
                            {words.map((word, index) => {
                                return(
                                <Grid item key={index} style={{ width: '100%', margin: '10px' }} >
                                    <Button>{word}</Button>
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
