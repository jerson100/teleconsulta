import { Typography } from "antd";
import React from "react";
import ListCategory from "./components/ListCategory/ListCategory";
// import Sider from "antd/lib/layout/Sider";
import "./dashboard.scss";

const { Title } = Typography;

const Home = () => {
  return (
    <div className="dashboard-scene">
      <Title className="dashboard-scene__title">Últimas Novedades</Title>
      <div className="dashboard-scene__list-categories">
        <ListCategory />
      </div>
    </div>
  );
};

export default Home;
