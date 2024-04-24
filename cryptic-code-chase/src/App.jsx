import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Question from "./pages/ques";
import data from "./data.json";
import bg from "/background.svg";


function App() {
  return (
    <>
      <body className={`bg-background-dark`}
        style={{
          backgroundImage: `url(${bg})`, // Fix: Use `bg` directly as the image source
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          fontFamily: "Roboto, sans-serif",
        }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<p>Vanakkam da mapla</p>} />
            <Route exact path="/loc0" element={<Question location={data.locations[0].location} nextClue={data.locations[0].nextclue} id={data.locations[0].id} />} />
            <Route exact path="/loc1" element={<Question location={data.locations[1].location} nextClue={data.locations[1].nextclue} id={data.locations[1].id} />} />
            <Route exact path="/loc2" element={<Question location={data.locations[2].location} nextClue={data.locations[2].nextclue} id={data.locations[2].id} />} />
            <Route exact path="/loc3" element={<Question location={data.locations[3].location} nextClue={data.locations[3].nextclue} id={data.locations[3].id} />} />
            <Route exact path="/loc4" element={<Question location={data.locations[4].location} nextClue={data.locations[4].nextclue} id={data.locations[4].id} />} />
            <Route exact path="/loc5" element={<Question location={data.locations[5].location} nextClue={data.locations[5].nextclue} id={data.locations[5].id} />} />
          </Routes>
        </Router>
      </body>
    </>
  );
}

export default App;