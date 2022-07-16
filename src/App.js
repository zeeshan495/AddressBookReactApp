import "./App.css";
import Navbar from "./Components/Navbar";
import "./Styles/Navbar.css";
import LoginCard from "./Components/LoginCard";
import Home from "./Components/Home";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        {!isLoggedIn && <LoginCard></LoginCard>}
        {isLoggedIn && <Home></Home>}
      </div>
    </div>
  );
}

export default App;
