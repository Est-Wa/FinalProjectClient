// LessonCard.jsx

import { Card, Typography, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function LessonCard(props) {
    const { title, content, isCurrentLesson } = props;
    const navigate = useNavigate(); // Initialize navigate

    const redirectToCurrentLesson = () => {
        // Implement logic to determine the URL for the current lesson
        const currentLessonURL = '/my-lesson'; // Replace with the actual URL
        navigate(currentLessonURL); // Use navigate for redirection
    };

    return (
        <Card sx={{ width: '20%', backgroundColor: isCurrentLesson ? '#e6faff' : '' }}>
            <Typography variant='h4'>{title}</Typography>
            <Typography variant='h5'>{content}</Typography>
            {isCurrentLesson && (
                <>
                    <Typography variant='h6'>אתה נמצא כאן</Typography>
                    <Button onClick={redirectToCurrentLesson}>למעבר לשיעור</Button>
                </>
            )}
        </Card>
    );
}
