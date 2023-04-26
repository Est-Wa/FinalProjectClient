import React from "react";
import Logo from '../../../images/biglogo.png'
import { CardMedia } from "@mui/material";
import Video from '../../../images/logo.mp4'

function Home(){
    return(<>
    {/* <img src={Logo}></img> */}
    <CardMedia component={'video'} image={Video} autoPlay loop muted></CardMedia>
    </>
    )
}

export default Home