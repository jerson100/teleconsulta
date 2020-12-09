import { Col, Row, Typography } from "antd";
import React from "react";
import Container from "../../../../components/common/Container";

const DoctorSpecialtySceneDescription = () => {
  return (
    <Container>
      <Row gutter={[{ md: 32 }, { md: 32 }]}>
        <Col flex={"1 0 350px"} className="doctor-specialty-scene__col-left">
          <div className="doctor-specialty-scene__right">
            <Typography.Title level={2}>Descripción</Typography.Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio quis possimus, perferendis tempore libero deleniti nihil
              natus cumque cum ipsum officiis, accusantium quo nisi quas! Ea
              aspernatur recusandae cumque.
            </p>
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          flex={"0 0 400px"}
          className="doctor-specialty-scene__col-right"
        >
          <div className="doctor-specialty-scene__left">
            <div className="doctor-specialty-scene__img-container">
              <img
                src="https://www.clinicainternacional.com.pe/uploads/especialidade/cardio/cita.jpg"
                alt="cardilogía"
                className="doctor-specialty-scene__img"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorSpecialtySceneDescription;
