
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Game from './Lesson/Game'
export default function Routing (){
return <>
<Routes>
  <Route path="/MyLesson" element={<Game></Game>} />
  <Route path="/PersonalArea" element={<></>} />
  <Route path="/Ourvision" element={<></>} />
  <Route path="/learningplan" element={<></>} />
</Routes></>

}