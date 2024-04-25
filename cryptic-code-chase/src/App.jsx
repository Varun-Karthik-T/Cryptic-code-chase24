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
            <Route exact path="/1toyota" element={<Question location={data.locations[0].location} nextClue={data.locations[0].nextclue} id={data.locations[0].id} />} />
            <Route exact path="/2leyland" element={<Question location={data.locations[1].location} nextClue={data.locations[1].nextclue} id={data.locations[1].id} />} />
            <Route exact path="/3benz" element={<Question location={data.locations[2].location} nextClue={data.locations[2].nextclue} id={data.locations[2].id} />} />
            <Route exact path="/4bugatti" element={<Question location={data.locations[3].location} nextClue={data.locations[3].nextclue} id={data.locations[3].id} />} />
            <Route exact path="/5maruti" element={<Question location={data.locations[4].location} nextClue={data.locations[4].nextclue} id={data.locations[4].id} />} />
            <Route exact path="/6skoda" element={<Question location={data.locations[5].location} nextClue={data.locations[5].nextclue} id={data.locations[5].id} />} />
            <Route exact path="/7bmw" element={<Question location={data.locations[6].location} nextClue={data.locations[6].nextclue} id={data.locations[6].id} />} />
            <Route exact path="/8audi" element={<Question location={data.locations[7].location} nextClue={data.locations[7].nextclue} id={data.locations[7].id} />} />
            <Route exact path="/9rolls" element={<Question location={data.locations[8].location} nextClue={data.locations[8].nextclue} id={data.locations[8].id} />} />
            
          </Routes>
        </Router>
      </body>
    </>
  );
}

export default App;