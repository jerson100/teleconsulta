import { Button, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import Container from "../../components/common/Container";
import JeSpace from "../../components/common/JeSpace";
import RouteWithSubRoutes from "../../components/routers/RouteWithSubRoutes";

const Appointment = ({ routes }) => {
  console.log(routes);
  const { push } = useHistory();
  return (
    <div className="appointment-scene">
      <Container>
        <Typography.Title level={1}>Cita Número 150626</Typography.Title>
        <JeSpace size="sm" />
        <div className="appointment-scene__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
            minus accusantium molestiae vero totam ut magni eaque labore quidem
            debitis possimus nesciunt quis quia mollitia doloribus at
            repudiandae, natus temporibus?
          </p>
        </div>
        <Button
          type="primary"
          onClick={() => {
            push("/dashboard/datinghistory/150626/comments");
          }}
        >
          Ver comentarios
        </Button>
      </Container>

      <>
        {routes.map((r, i) => (
          <RouteWithSubRoutes key={i} {...r} />
        ))}
      </>
    </div>
  );
};

export default Appointment;
