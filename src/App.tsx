import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Example from "./components/StartingScreen";
import LoginScreenComponent from "./components/LoginScreen";
import QuestionsComponent from "./components/Questions";
import ScoreboardComponent from "./components/Scoreboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/login" element={<LoginScreenComponent />} />
        <Route path="/questions" element={<QuestionsComponent />} />
        <Route path="/scoreboard" element={<ScoreboardComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
