//what is the current stage 
//game props : stage
//video on the first time

import React from "react";
import Game from "./Game";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from '../../../context/authContext'
import axios from 'axios'

async function getStage(userId) {
    let res
    try {
        res = await axios.get(`http://localhost:3600/api/lesson/stage?userId=${userId}`)
    }
    catch (err) {
        console.log(err)
    }
    return res
}

export default function () {
    const { user } = useContext(AuthContext)

    const [stage, setStage] = useState();
    useEffect(() => {
        async function fetchData() {
            const res = await getStage(user.user_id);
            console.log('The current stage is:' + res.data.current_stage)
            setStage(res.data.current_stage)
        }
        fetchData()
    }, [])

    return (
        <Game stage={stage}></Game>)
}