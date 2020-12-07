import React, { useState } from "react";
import QRCode from "qrcode.react";
import Description from "../../../../components/common/Description";
import {
  MailOutlined,
  HomeOutlined,
  SmileOutlined,
  BookOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
} from "@ant-design/icons";

import "./cardMedicalStaff.scss";
import { Button } from "antd";

const CardMedicalStaff = ({
  image,
  name,
  codeSchool,
  qrCode,
  especialidad,
  correo,
  domicilio,
  descripcion,
}) => {
  const [isFront, setisFront] = useState(false);
  const handleHover = (e) => {
    setisFront((f) => !f);
  };
  return (
    <div className="card-medical-staff" onClick={handleHover}>
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

export default CardMedicalStaff;
