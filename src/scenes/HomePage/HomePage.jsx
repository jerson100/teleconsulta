import React from "react";
import { Helmet } from "react-helmet";
import "./homePage.scss";
import HomePageBanner from "./components/HomePageBanner/HomePageBanner";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Inicio | teleconsulta</title>
        <meta
          name="description"
          content="Bienvenido a la página principal de teleconsulta, en la que contamos con los mejores profesionales de la salud. Pueden solicitar una cita con un doctor por problemas médicos."
        ></meta>
      </Helmet>
      <div className="home-page">
        <HomePageBanner />
      </div>
    </>
  );
};

export default HomePage;
