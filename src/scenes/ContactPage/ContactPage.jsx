import React from "react";
import { Typography } from "antd";
import Container from "../../components/common/Container";
import "./contactPage.scss";

const { Title } = Typography;

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Container>
        <Title style={{ textAlign: "center" }}>
          Página de contacto aún en construcción xD
        </Title>
      </Container>
    </div>
  );
};

export default ContactPage;
