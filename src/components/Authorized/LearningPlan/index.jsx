// LearningPlan.jsx

import { Box } from "@mui/material";
import React, {useContext} from "react";
import LessonCard from "./LessonCard";
import { LessonContext } from "../../../context/lessonContext";

export default function LearningPlan() {

    const { stage } = useContext(LessonContext); // Access the LessonContext
    const elements = {
        'חלק א': '...', // Your content here
        'חלק ב': '...', // Your content here
        'חלק ג': '...', // Your content here
        'חלק ד': '...', // Your content here
    };

    const currentLesson = stage - 1; // Replace with the actual current lesson

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            {Object.keys(elements).map((e, i) => (
                <LessonCard
                    key={i}
                    title={e}
                    content={elements[e]}
                    isCurrentLesson={i === currentLesson} // Check if it's the current lesson
                />
            ))}
        </Box>
    );
}
