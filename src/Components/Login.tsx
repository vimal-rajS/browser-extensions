import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./API_URL";
import "./Login.css";

function Login() {
  const [name, setName] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");
  const [data, setData] = useState<any[]>([]);

  const navigate = useNavigate();

  const creatingPage = () => {
    navigate("/");
  };

  const callApi = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    callApi();
  }, [callApi]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const user = data.find(
      (users: any) => users.email === name && users.password === passcode
    );

    if (user) {
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <h1>Welcome to our page</h1>
        <form className="form-div" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            className="login-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-btn" >
            Log in
          </button>
        </form>
        <div className="password-forget">
          <button onClick={creatingPage}>Create New Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
