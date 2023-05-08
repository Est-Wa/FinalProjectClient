import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const LessonContext = createContext();

export const LessonContextProvider = ({ children }) => {
    const [stage, setStage] = useState()
    const [lessonId, setLessonId] = useState()
    const [success, setSuccess] = useState()

    const nextStage = async () => {
        await axios.post(`api/lesson/stage?lessonId=${lessonId}&stage=${stage + 1}`)
    }

    const updateSuccess = async () => {
        try {
            axios.put(`http://localhost:3600/api/lesson/success`, {
                success,
                lessonId,
                stage
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    const values = {stage, lessonId, setSuccess, nextStage,updateSuccess}
    return (
        <LessonContext.Provider value={values}>
            {children}
        </LessonContext.Provider>
    )
}