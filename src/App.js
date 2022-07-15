import "./App.css";
import Navbar from "./Components/Navbar";
import "./Styles/Navbar.css";
import LoginCard from "./Components/LoginCard";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <body>
        <LoginCard></LoginCard>
      </body>
    </div>
  );
}

export default App;
