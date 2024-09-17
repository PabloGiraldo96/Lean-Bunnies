import "./App.css";
import LoginScreenComponent from "./components/LoginScreen";
import QuestionsComponent from "./components/Questions";
import ScoreboardComponent from "./components/Scoreboard";
import Example from "./components/StartingScreen";

function App() {
  return (
    <div>
      <Example />
      <LoginScreenComponent />
      {/*<QuestionsComponent />*/}
      {/*<ScoreboardComponent />*/}
    </div>
  );
}

export default App;
