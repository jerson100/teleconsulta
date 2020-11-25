import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Aquí irá la página principal del app</h1>
      <Button type="primary">
        <Link to="/auth/login">Ir al login por ahora</Link>
      </Button>
    </div>
  );
};

export default HomePage;
