import React from "react";
// import { Typography } from "antd";
import { Helmet } from "react-helmet";
// import ListCategory from "./components/ListCategory/ListCategory";
import "./dashboard.scss";
import DashboardUserCommon from "./scenes/DashboardUserCommon/DashboardUserCommon";

// const { Title } = Typography;

const Home = () => {
  //Dependiendo del tipo de usuario que accede al sistema mostrar una o otra vista..

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
        <DashboardUserCommon />

        {/* <Title className="dashboard-scene__title">Últimas Novedades</Title>
        <div className="dashboard-scene__list-categories">
          <ListCategory />
        </div> */}
      </div>
    </>
  );
};

export default React.memo(Home, (prevProps, nextProps) => {
  //   console.log(prevProps);
  //   console.log(nextProps);
  return prevProps.match.path === nextProps.match.path;
});
