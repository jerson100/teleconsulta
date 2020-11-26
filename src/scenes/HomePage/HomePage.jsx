import React from "react";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import "./homePage.scss";
import HomePageBanner from "./components/HomePageBanner/HomePageBanner";

const { Title } = Typography;

const HomePage = () => {
  return (
    <div className="home-page">
      <HomePageBanner />
    </div>
    // <div>
    //   <h1>Aquí irá la página principal del app</h1>
    //   <Button type="primary">
    //     <Link to="/auth/login">Ir al login por ahora</Link>
    //   </Button>
    // </div>
  );
};

export default HomePage;
