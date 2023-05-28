import { Card, Typography } from '@mui/material';
import React from 'react';

export default function LessonCard(props) {
    const { title, content } = props;
    return ( <Card sx={{width:'20%', backgroundColor:'#e6faff'}}>
            <Typography variant='h4'>{title}</Typography>
            <Typography variant='h5'>{content}</Typography>
        </Card>)
}