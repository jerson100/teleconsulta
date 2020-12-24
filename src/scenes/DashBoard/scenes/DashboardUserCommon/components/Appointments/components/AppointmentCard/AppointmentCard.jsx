import { Button, Card, Col, Row, Typography } from "antd";
import React from "react";
import Moment from "react-moment";
import JeAvatar from "../../../../../../../../components/common/JeAvatar/JeAvatar";
import JeSpace from "../../../../../../../../components/common/JeSpace";
import SimpleList from "../../../../../../../../components/common/SimpleList/SimpleList";

import {
  DateIcon,
  LocationIcon,
  ZoomIcon,
} from "../../../../../../../../utils/svg";

import "./appointmentCard.scss";

const AppointmentCard = ({
  img,
  name,
  especialty,
  direction,
  date,
  link,
  linkZoom,
  tema,
}) => {
  return (
    <article className="appointment-card">
      <Card>
        <header className="appointment-card__header">
          <div className="appointment-card__doctor">
            <Row gutter={[16, 0]} align="middle">
              <Col>
                <JeAvatar
                  src={img}
                  alt={name}
                  size="md"
                  className="appointment-card__img"
                />
              </Col>
              <Col flex="1 0 0">
                <p className="appointment-card__name">{name}</p>
                <p className="appointment-card__especialty">{especialty}</p>
              </Col>
            </Row>
          </div>
        </header>
        <JeSpace size="sm" />
        <div className="appointment-card__body">
          <SimpleList>
            <SimpleList.Item>
              <div className="appointment-card__item">
                <LocationIcon className="appointment-card__icon" />
                <span className="appointment-card__text">{direction}</span>
              </div>
            </SimpleList.Item>
            <SimpleList.Item>
              <div className="appointment-card__item">
                <DateIcon className="appointment-card__icon" />
                <span className="appointment-card__text">
                  <Moment date={date} format="LLLL" local="es" />
                </span>
              </div>
            </SimpleList.Item>
            <SimpleList.Item>
              <div className="appointment-card__item">
                <ZoomIcon className="appointment-card__icon" />
                <span className="appointment-card__text">
                  <a href={linkZoom} target="_blank">
                    zoom
                  </a>
                </span>
              </div>
            </SimpleList.Item>
          </SimpleList>
          <div className="appointment-card__tema">
            <span>Tema: </span>
            <Typography.Title level={1} className="appointment-card__title">
              {tema}
            </Typography.Title>
          </div>
        </div>
        <JeSpace size="sm" />
        <a className="appointment-card__details" href="">
          Ver detalles
        </a>
      </Card>
    </article>
  );
};

export default AppointmentCard;
