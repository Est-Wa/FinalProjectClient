import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";



export default function HomePage() {
    const navigate = useNavigate();
    const styleForBox = { display: 'grid', gridTemplateColumns: '60% 20% 20%', width: '100%', height: '80%',padding:'10%'};
    const styleForButton = {gridColumn:2, gridRow:4, width:'60%',  justifySelf:'center'};
    return (<Box sx={styleForBox}>
        <Typography variant="h3" sx={{gridColumn:1}}>לשחק, לדעת, להצליח</Typography>
        <Typography variant="h5" sx={{gridColumn:1}}>תרגול קריאה בצורה חווייתית, ברמה וקצב מותאמים אישית,</Typography>
        <Typography variant="h5" sx={{gridColumn:1}}> עם מינימום מאמץ, כל אחד יכול להצליח!</Typography>
        <Button variant="outlined" sx={styleForButton} onClick={()=>navigate('/my-lesson')}>לשיעור שלי</Button></Box>)

}