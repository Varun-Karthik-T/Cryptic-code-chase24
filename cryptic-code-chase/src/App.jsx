import {Button} from "@/components/ui/button"
import './App.css'
import { Route,Routes,BrowserRouter as Router } from "react-router-dom"
import Question from "./pages/ques"

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Question />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
