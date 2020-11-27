import React from "react";
import {
  Calendar,
  Badge,
  Divider,
  Form,
  Input,
  Button,
  InputNumber,
} from "antd";
import { Helmet } from "react-helmet";
import "./requestMedicalAppointment.scss";
import SearchMedicalAppointment from "../../components/common/SearchMedicalAppointment/SearchMedicalAppointment";

const RequestMedicalAppointment = () => {
  return (
    <>
      <Helmet>
        <title>Solicitar Cita Médica | teleconsulta</title>
        <meta
          name="description"
          content="Solicita una cita médica con uno de nuestros médicos, que son altamente calificados."
        ></meta>
      </Helmet>

      <div className="request-medical-appointment">
        <div className="request-medical-appointment__search">
          <SearchMedicalAppointment />
        </div>
        <Divider orientation="right">Calendario</Divider>
        <div className="request-medical-appointment__calendar">
          <div className="request-medical-appointment__calendar-content">
            <Calendar
              fullscreen
              dateCellRender={dateCellRender}
              monthCellRender={monthCellRender}
            />
          </div>
        </div>
        <Divider orientation="right">Registro de Cita</Divider>
        <div className="request-medical-appointment__register">
          <Form
            layout="horizontal"
            labelCol={{ sm: 12, lg: 12 }}
            wrapperCol={{ sm: 12, lg: 4 }}
          >
            <Form.Item label="Costo">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item label="Código Pago">
              <Input type="text" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                sm: { span: 24 },
                lg: { span: 5, offset: 11 },
              }}
              style={{ textAlign: "right" }}
            >
              <Button type="primary">Registrar Cita</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export default RequestMedicalAppointment;
