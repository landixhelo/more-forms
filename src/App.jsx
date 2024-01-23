import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const UserForm = (props) => {
  const [username, Firstname] = useState("");
  const [lname, LastName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, PasswordOne] = useState("");
  const [repPassword, RepeatPassword] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUserName = (e) => {
    Firstname(e.target.value);
    if (e.target.value.length == 0) {
      setUserNameError("");
    } else if (e.target.value.length < 3) {
      setUserNameError("First name must be at least 2 characters");
    } else {
      setUserNameError("");
    }
  };

  const handleLastName = (e) => {
    LastName(e.target.value);
    if (e.target.value.length == 0) {
      setLastNameError("");
    } else if (e.target.value.length < 3) {
      setLastNameError("More than two character");
    } else {
      setLastNameError("");
    }
  };

  const handleEmail = (e) => {
    SetEmail(e.target.value);
    if (e.target.value.length == 0) {
      setEmail("");
    } else if (e.target.value.length < 3) {
      setEmail("Email must be at least 2 characters");
    } else {
      setEmail("");
    }
  };
  const handlePassword = (e) => {
    setPasswordError(e.target.value);
    if (e.target.value.length == 0) {
      setPasswordError("");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { username, lname, email, password, repPassword };
    console.log("Welcome", newUser);
    Firstname("");
    LastName("");
    SetEmail("");
    PasswordOne("");
    RepeatPassword("");
    setHasBeenTyping(true);
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <label>First Name</label>
          <input type="text" onChange={handleUserName} />
          <p>{usernameError ? <span>{usernameError}</span> : ""}</p>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange={handleLastName} />
          <p>{lastNameError ? <span>{lastNameError}</span> : ""}</p>
        </div>
        <div>
          <label>Email</label>
          <input type="text" onChange={handleEmail} />
          <p>{emailError ? <span>{emailError}</span> : ""}</p>
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input type="password" onChange={handlePassword} />
          <p>{passwordError ? <span>{passwordError}</span> : ""} </p>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => RepeatPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Create User" />
      </form>
    </>
  );
};

export default UserForm;
