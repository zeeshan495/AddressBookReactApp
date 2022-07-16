import { useDispatch, useSelector } from "react-redux";
import { LogInsliceActions } from "../Store/StoreData";

function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isSignIn = useSelector((state) => state.isSignIn);
  function logOutHandler() {
    dispatch(LogInsliceActions.setLogOut());
  }
  function signUpHandler() {
    dispatch(LogInsliceActions.setIsSignIn());
  }
  return (
    <div id="Navbar">
      <header>
        <a>Address Book</a>
      </header>
      <ul>
        {isSignIn && !isLoggedIn && (
          <li>
            <a onClick={signUpHandler}>Sign In</a>
          </li>
        )}
        {!isSignIn && !isLoggedIn && (
          <li>
            <a onClick={signUpHandler}>Sign Up</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a onClick={logOutHandler}>Logout</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
