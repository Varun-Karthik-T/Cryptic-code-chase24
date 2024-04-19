import { Button } from "@/components/ui/button"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Question from "./pages/ques"
import data from "./data.json"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="https://cryptic-code-chase24.onrender.com/" element={ <p>Vanakkam da mapla</p>} />
          <Route path="https://cryptic-code-chase24.onrender.com/loc0" element={<Question location={data.locations[0].location} nextClue={data.locations[0].nextclue} id={data.locations[0].id} />} />
          <Route path="https://cryptic-code-chase24.onrender.com/loc1" element={<Question location={data.locations[1].location} nextClue={data.locations[1].nextclue} id={data.locations[1].id} />} />
          <Route path="/loc2" element={<Question location={data.locations[2].location} nextClue={data.locations[2].nextclue} id={data.locations[2].id} />} />
          <Route path="/loc3" element={<Question location={data.locations[3].location} nextClue={data.locations[3].nextclue} id={data.locations[3].id} />} />
          <Route path="/loc4" element={<Question location={data.locations[4].location} nextClue={data.locations[4].nextclue} id={data.locations[4].id} />} />
          <Route path="/loc5" element={<Question location={data.locations[5].location} nextClue={data.locations[5].nextclue} id={data.locations[5].id} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
