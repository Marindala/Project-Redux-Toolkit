import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Home } from "./components/Home/Home";



function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
