
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import VisionArticle from "./Vision"

export default function Routing (){
  return <>
<Routes>
  <Route path="/my-lesson" element={<></>} />
  <Route path="/personal-area" element={<></>} />
  <Route path="/our-vision" element={<VisionArticle></VisionArticle>} />
  <Route path="/learning-plan" element={<></>} />
</Routes></>

}