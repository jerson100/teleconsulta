import React from "react";
import { Typography } from "antd";
import { Helmet } from "react-helmet";
import ListCategory from "./components/ListCategory/ListCategory";
import "./dashboard.scss";

const { Title } = Typography;

const Home = (props) => {
  //   console.log("home");
  //   console.log(props);
  return (
    <>
      <Helmet>
        <title>Dashboard | teleconsulta</title>
        <meta
          name="description"
          content="Página principal de la aplicación - Teleconsulta"
        ></meta>
      </Helmet>
      <div className="dashboard-scene">
        <Title className="dashboard-scene__title">Últimas Novedades</Title>
        <div className="dashboard-scene__list-categories">
          <ListCategory />
        </div>
      </div>
    </>
  );
};

export default React.memo(Home);
