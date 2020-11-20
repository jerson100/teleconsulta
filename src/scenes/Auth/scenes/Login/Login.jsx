import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = (props) => {
  console.log(props);
  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <p className="login__content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti et
        sint libero vero vitae eos maxime a sed at nesciunt! Dolorem, doloremque
        quia cum suscipit ducimus tenetur consectetur adipisci voluptate.
      </p>
      <Link
        to={{
          pathname: "/auth/register",
        }}
      >
        Register
      </Link>
    </div>
  );
};

export default Login;
