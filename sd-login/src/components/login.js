import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    if (userInfo && userInfo?.role === "technician") {
      navigate("/dashboard");
    } else if (userInfo && userInfo?.role === "admin") {
      navigate("/dashboard-admin");
    }
  }, [userInfo]);

  const onTech = () => {
    setUserInfo({ role: "technician" });
  };

  const onAdmin = () => {
    setUserInfo({ role: "admin" });
  };
  return (
    <div>
      <input type="email" placeholder="Email" />
      <input
        style={{ marginRight: "10px", marginLeft: "10px" }}
        placeholder="Password"
      />
      <button
        type="button"
        onClick={() => onTech()}
        style={{ marginRight: "10px", marginLeft: "10px" }}
      >
        TECH IN
      </button>
      <button onClick={() => onAdmin()} type="button">
        ADMIN IN
      </button>
    </div>
  );
};

export default Login;
