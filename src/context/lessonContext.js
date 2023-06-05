import { createContext, useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './authContext'

export const LessonContext = createContext();

export const LessonContextProvider = ({ children }) => {
    const [stage, setStage] = useState()
    const [success, setSuccess] = useState()
    const { token } = useContext(AuthContext)

    const nextStage = async () => {
        await axios.post(`http://localhost:3600/api/lesson/stage`, { stage }, { headers: { Authorization: `Bearer ${token}` } })
    }

    async function getStage() {
        let res
        try {
            res = await axios.get(`http://localhost:3600/api/lesson/stage`, { headers: { Authorization: `Bearer ${token}` } })
        }
        catch (err) {
            console.log(err)
        }
        setStage(res.data.current_stage)
    }

    const updateSuccess = async (res) => {

        setSuccess(res)

    }

    useEffect(() => {
        async function update() {
            try {
                await axios.put(`http://localhost:3600/api/lesson/success`, {
                    success,
                    stage
                },
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    })
            }
            catch (err) {
                console.log(err)
            }
        }
        update()
    }, [success])

    const values = { success, getStage, stage, setSuccess, nextStage, updateSuccess }
    return (
        <LessonContext.Provider value={values}>
            {children}
        </LessonContext.Provider>
    )
}