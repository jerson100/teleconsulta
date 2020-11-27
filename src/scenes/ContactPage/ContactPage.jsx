import React from "react";
import { Typography } from "antd";
import { Helmet } from "react-helmet";
import Container from "../../components/common/Container";
import "./contactPage.scss";

const { Title } = Typography;

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto | teleconsulta</title>
        <meta
          name="description"
          content="Ponte en contacto con nosotros por cualquier inconveniente o consulta, estamos a su servicio."
        ></meta>
      </Helmet>
      <div className="contact-page">
        <Container>
          <Title style={{ textAlign: "center" }}>
            Página de contacto aún en construcción xD
          </Title>
        </Container>
      </div>
    </>
  );
};

export default ContactPage;
