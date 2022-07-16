import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogInsliceActions } from "../Store/StoreData";

function LoginCard() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isSignIn = useSelector((state) => state.isSignIn);

  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPwd, setEnteredPwd] = useState("");
  const [enteredCPwd, setEnteredCPwd] = useState("");
  const [errorLog, setErrorLog] = useState("");
  const [isError, setIsError] = useState(false);
  const [isPwdError, setIsPwdError] = useState(false);
  const reset = () => {
    setIsError(false);
    setIsPwdError(false);
    setErrorLog("");
  };
  function logInHandler(e) {
    e.preventDefault();
    if (enteredMail === "" || enteredPwd === "") {
      setIsError(true);
      setErrorLog("Enter proper credentials!");
      return;
    }
    let pwd = localStorage.getItem(enteredMail);
    if (pwd != enteredPwd) {
      setIsError(true);
      setErrorLog("Invalid credentials!");
      return;
    }
    dispatch(LogInsliceActions.setLogInfo(enteredMail));
  }
  function signUpHandler(e) {
    e.preventDefault();
    if (enteredMail === "" || enteredPwd === "") {
      setIsError(true);
      setErrorLog("Enter proper credentials!");
      return;
    }
    if (localStorage.getItem(enteredMail)) {
      setIsError(true);
      setErrorLog("Already Exists!");
      return;
    }
    if (enteredPwd != enteredCPwd) {
      setIsPwdError(true);
      setErrorLog("Password doesn't match!");
      return;
    }
    localStorage.setItem(enteredMail, enteredCPwd);
    dispatch(LogInsliceActions.setLogInfo(enteredMail));
  }
  function changeMailHandler(event) {
    //setIsError(false);
    setEnteredMail(event.target.value);
  }
  function changePwdHandler(event) {
    //setIsPwdError(false);
    setEnteredPwd(event.target.value);
  }
  function changeCPwdHandler(event) {
    //setIsPwdError(false);
    setEnteredCPwd(event.target.value);
  }
  useEffect(reset, [enteredMail, enteredPwd, enteredCPwd, isSignIn]);

  return (
    <>
      {!isSignIn && (
        <form onSubmit={logInHandler}>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={enteredMail}
              onChange={changeMailHandler}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPwd}
              onChange={changePwdHandler}
            />
          </div>
          {isError && (
            <h6 className="error-text" style={{ color: "red" }}>
              {errorLog}
            </h6>
          )}
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      )}
      {isSignIn && (
        <form onSubmit={signUpHandler}>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={enteredMail}
              onChange={changeMailHandler}
            />
            {isError && (
              <h6 className="error-text" style={{ color: "red" }}>
                {errorLog}
              </h6>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPwd}
              onChange={changePwdHandler}
            />
          </div>
          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              id="cPassword"
              value={enteredCPwd}
              onChange={changeCPwdHandler}
            />
            {isPwdError && (
              <h6 className="error-text" style={{ color: "red" }}>
                {errorLog}
              </h6>
            )}
          </div>
          <div>
            <button type="submit">Sign In</button>
          </div>
        </form>
      )}
    </>
  );
}

export default LoginCard;
