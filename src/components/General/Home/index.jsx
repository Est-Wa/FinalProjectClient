import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import Video from '../../../images/logo.mp4'

function Home(){
    return(<Box sx={{display:'grid', gridTemplateColumns:'70% 30%', margin:'3%'}}>
        <Typography variant="h3" sx={{gridColumn:1, gridRow:1, position:'relative' ,top:'20%'}}>לשחק, לדעת, להצליח</Typography>
        <Typography variant="h5" sx={{gridColumn:1, gridRow:1, position:'relative' ,top:'40%'}}>תרגול קריאה בצורה חווייתית, ברמה וקצב מותאמים אישית,</Typography>
        <Typography variant="h5" sx={{gridColumn:1, gridRow:1, position:'relative' ,top:'50%'}}> עם מינימום מאמץ, כל אחד יכול להצליח!</Typography>
    <CardMedia component={'video'} image={Video} style={{gridColumn:2, gridRow:1}} autoPlay loop muted></CardMedia>
    </Box>
    )
}

export default Home