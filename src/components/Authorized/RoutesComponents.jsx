
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Game from './Lesson/Game'
import Personal from "./PersonalArea"
import Alerts from "./PersonalArea/alertPopup"
import Profile from "./PersonalArea/profile"
export default function Routing() {
  return <>
    <Routes>
      <Route path="/my-lesson" element={<Game></Game>} />
      <Route path="/personal-area" element={<Personal></Personal>} />
      <Route path="/our-vision" element={<></>} />
      <Route path="/learning-plan" element={<></>} />
      <Route path="/alerts" element={<Alerts></Alerts>} />
      <Route path="/profile" element={<Profile></Profile>} />
    </Routes>
  </>
}