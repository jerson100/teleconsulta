import React, { useState } from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";
import Description from "../../../Description";
import {
  MailOutlined,
  HomeOutlined,
  SmileOutlined,
  BookOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
} from "@ant-design/icons";

import { Button } from "antd";
import "./cardMedicalStaff.scss";

const CardMedicalStaff = ({
  image,
  name,
  codeSchool,
  qrCode,
  especialidad,
  correo,
  domicilio,
  descripcion,
  maxWidth,
}) => {
  const [isFront, setisFront] = useState(false);
  const handleHover = (e) => {
    setisFront((f) => !f);
  };
  return (
    <div
      className="card-medical-staff"
      style={{ maxWidth: maxWidth }}
      onClick={handleHover}
    >
      <div
        className={`card-medical-staff__content ${
          isFront ? "card-medical-staff__content--rotate" : ""
        }`}
      >
        <div className="card-medical-staff__data card-medical-staff__front">
          <div className="card-medical-staff__depth">
            <div className="card-medical-staff__header">
              <img src={image} alt={name} className="card-medical-staff__img" />
            </div>
            <div className="card-medical-staff__body">
              <p className="card-medical-staff__title">{name}</p>
              <p className="card-medical-staff__code">
                <b>Número colegiado:</b> {codeSchool}
              </p>
            </div>
            <div className="card-medical-staff__qr-code">
              <QRCode value={qrCode} size={50} />
            </div>
          </div>
          <div className="card-medical-staff__nav">
            <Button
              icon={<CaretRightOutlined />}
              shape="circle"
              type={"primary"}
            />
          </div>
        </div>
        <div className="card-medical-staff__data card-medical-staff__back">
          <div className="card-medical-staff__depth">
            <Description
              label="Especialidad"
              value={especialidad}
              valueColor="#fff"
              labelColor="#ffff"
              icon={<BookOutlined />}
            />
            <Description
              label="Correo"
              icon={<MailOutlined />}
              value={correo}
              valueColor="#fff"
              labelColor="#ffff"
            />
            <Description
              label="Domicilio"
              icon={<HomeOutlined />}
              value={domicilio}
              valueColor="#fff"
              labelColor="#ffff"
            />
            <Description
              label="Descripción"
              value={descripcion}
              icon={<SmileOutlined />}
              valueColor="#fff"
              labelColor="#ffff"
            />
          </div>
          <div className="card-medical-staff__nav">
            <Button
              icon={<CaretLeftOutlined />}
              shape="circle"
              type={"primary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CardMedicalStaff.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  codeSchool: PropTypes.string,
  qrCode: PropTypes.string,
  especialidad: PropTypes.string,
  correo: PropTypes.string,
  domicilio: PropTypes.string,
  descripcion: PropTypes.string,
  maxWidth: PropTypes.string,
};

CardMedicalStaff.defaultProps = {
  image: "",
  name: "...",
  codeSchool: "...",
  qrCode: "",
  especialidad: "...",
  correo: "...",
  domicilio: "...",
  descripcion: "...",
  maxWidth: "350px",
};

export default CardMedicalStaff;
