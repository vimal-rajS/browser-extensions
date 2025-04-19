import { API_URL } from "./API_URL";
import { useState } from "react";
import "./Interface.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Interface() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const store = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      email,
      password,
    });
    navigate("/login");
  };

  return (
    <div className="create-container">
      <div className="create-page">
        <h1>Create Account</h1>

        <form
          action=""
          className="form-div"
          onSubmit={(e: any) => {
            e.preventDefault();
            store();
          }}
        >
          <input
            type="text"
            className="create-acc-input"
            placeholder="First Name"
            onChange={(e: any) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
          <input
            type="text"
            className="create-acc-input"
            placeholder="Last Name"
            onChange={(e: any) => setLastName(e.target.value)}
            value={lastName}
          />
          <input
            type="email"
            className="create-acc-input"
            placeholder="Email ID"
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            className="create-acc-input"
            placeholder="Password"
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button className="creating-btn" type="submit">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Interface;
