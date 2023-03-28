
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Game from './Lesson/Game'
export default function Routing() {
  return <>
    <Routes>
      <Route path="/my-lesson" element={<Game></Game>} />
      <Route path="/personal-area" element={<></>} />
      <Route path="/our-vision" element={<></>} />
      <Route path="/learning-plan" element={<></>} />
    </Routes>
  </>
}