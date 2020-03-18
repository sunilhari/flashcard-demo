import React from "react";
import "./index.scss";
import { useHistory, Redirect } from "react-router-dom";
import fetch from "isomorphic-fetch";

function SelectUser() {
 const history = useHistory();
 const [username, setUsername] = React.useState("");
 const [user, setUser] = React.useState({});
 const onChange = event => setUsername(event.target.value);
 const onSubmit = async event => {
  event.preventDefault();
  try {
   const userResponse = await fetch(
    `https://my-json-server.typicode.com/sunilhari/my-json-mock/users/${username}`
   ).then(response => {
    if (response.status >= 400) {
     throw new Error("Bad response from server");
    }
    return response.json();
   });
   setUser(userResponse);
  } catch (e) {
   alert("Invalid User");
  }
 };
 if (Object.keys(user).length > 0) {
  return (
   <Redirect
    to={{
     pathname: "/cards",
     state: { user }
    }}
   />
  );
 }
 return (
  <form className="App-selectuser">
   <label htmlFor="username">Enter your Username</label>
   <input
    type="text"
    id="username"
    name="username"
    placeholder=""
    onChange={onChange}
    value={username}
   />
   <button
    type="submit"
    onClick={onSubmit}
    disabled={username === "" ? "disabled" : ""}>
    Login
   </button>
   <div className="helper">
    Note:Available usernames are <b>stark</b> and <b>rogers</b>
   </div>
  </form>
 );
}

export default SelectUser;
