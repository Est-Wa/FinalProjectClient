//what is the current stage 
//game props : stage
//video on the first time

import React from "react";
import Game from "./Game";
import { useState, useEffect, useContext } from "react";
import axios from 'axios'
import { LessonContext } from "../../../context/lessonContext";

export default function Lesson() {
 const {getStage,stage} = useContext(LessonContext)
    useEffect(() => {
        async function fetchData() {
            await getStage();
        }
        fetchData()
    }, [])

    return (
        <Game stage={stage}></Game>)
}