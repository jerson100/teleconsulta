import React from "react";
import { Typography, DatePicker, Form, Divider } from "antd";
import { Helmet } from "react-helmet";
import SearchMedicalAppointment from "../../components/common/SearchMedicalAppointment/SearchMedicalAppointment";
import AppointmentList from "./components/AppointmentList/AppointmentList";

import "./datingHistory.scss";

const { Title } = Typography;
const { RangePicker } = DatePicker;

const DatingHistory = () => {
  return (
    <>
      <Helmet>
        <title>Historial de citas | teleconsulta</title>
        <meta
          name="description"
          content="Consulta tu historial de citas, por especialidad, fecha o doctor."
        ></meta>
      </Helmet>
      <div className="dating-history">
        <div className="dating-history__search">
          <SearchMedicalAppointment />
        </div>
        <div className="dating-history__date">
          <Form.Item label="Fecha Inicio - Fin">
            <RangePicker bordered={false} />
          </Form.Item>
        </div>
        <div className="dating-history__cities">
          <Title level={3}>Mis citas</Title>
          <Divider />
          <AppointmentList />
        </div>
      </div>
    </>
  );
};

export default DatingHistory;
