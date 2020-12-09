import { Card, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useHistory } from "react-router-dom";
import "./doctorEspecialty.scss";

const { Title } = Typography;

const DoctorSpecialty = ({ especialty, image }) => {
  const { push } = useHistory();
  const handleClick = () => {
    push(`/especialidades/${especialty}`);
  };
  return (
    <article className="doctor-specialty">
      <Card
        hoverable
        cover={
          <div className="doctor-specialty__header">
            <img
              src={image}
              alt={especialty}
              className="doctor-specialty__img"
            />
          </div>
        }
        onClick={handleClick}
      >
        <Meta
          title={
            <Title level={3} className="doctor-specialty__title">
              {especialty}
            </Title>
          }
        />
      </Card>
    </article>
  );
};

export default DoctorSpecialty;
