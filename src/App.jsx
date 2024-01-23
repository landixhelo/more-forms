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
  const [hasBeenTyping, setHasBeenTyping] = useState(false);
  const [usernameError, setUserNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleUserName = (e) => {
    Firstname(e.target.value);
    if (e.target.value.length == 0) {
      setUserNameError("");
    } else if (e.target.value.length < 2) {
      setUserNameError("First name must be at least 2 characters");
    } else {
      setUserNameError("");
    }
  };

  const handleLastName = (e) => {
    SetEmail(e.target.value);
    if (e.target.value.length == 0) {
      setUserNameError("");
    } else if (e.target.value.length < 2) {
      setLastNameError("More than two character");
    } else {
      setLastNameError("");
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
          <input type="text" onChange={(e) => SetEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            onChange={(e) => PasswordOne(e.target.value)}
          />
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
