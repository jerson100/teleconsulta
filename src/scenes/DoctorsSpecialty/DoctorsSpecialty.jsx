import { Col, Row, Typography } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Container from "../../components/common/Container";
import JeSection from "../../components/common/JeSection/JeSection";
import DoctorSpecialty from "./components/DoctorSpecialty";
import DoctorsSpecialtySearch from "./components/DoctorsSpecialtySearch";
const { Title } = Typography;

const especialidades = [
  {
    especialty: "Cardiologia",
    image:
      "https://www.clinicainternacional.com.pe/uploads/especialidade/img-portadas/esp-cardiologia.jpg",
  },
  {
    especialty: "Oftalmogía",
    image:
      "https://www.clinicainternacional.com.pe/uploads/especialidade/img-portadas/esp-oftalmologia.jpg",
  },
  {
    especialty: "Oncología",
    image:
      "https://www.clinicainternacional.com.pe/uploads/clinica-internacional-servicio-anciana-doctor.jpg",
  },
  {
    especialty: "Odontología",
    image:
      "https://www.clinicainternacional.com.pe/uploads/especialidade/img-portadas/esp-odontologi-a.jpg",
  },
  {
    especialty: "Traumatología",
    image:
      "https://www.clinicainternacional.com.pe/uploads/especialidade/img-portadas/esp-traumatologia.jpg",
  },
];

const DoctorsSpecialty = () => {
  const { search } = useLocation();
  const [specialties, setSpecialties] = useState([]);
  //   console.log(search);

  useEffect(() => {
    //llamada a la api
    setSpecialties(especialidades);
  }, []);

  const daatSearch = useMemo(() => {
    const s = search.replace("?q=", "")?.toLowerCase();
    // console.log(s);
    if (s === "") return specialties;
    return specialties.filter(
      (ss) => ss.especialty.toLowerCase().indexOf(s) >= 0
    );
  }, [search, specialties]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Nuestra empresa cuenta con una variedad de especialidades."
        ></meta>
        <title>Especialidades | teleconsulta</title>
      </Helmet>
      <div className="doctors-specialty">
        <JeSection>
          <Container>
            <Title level={2}>Buscar: </Title>
            <DoctorsSpecialtySearch search={search} />
            <Row
              gutter={[
                { md: 16, xl: 32 },
                { xs: 16, md: 16, xl: 32 },
              ]}
            >
              {daatSearch.map((e, i) => (
                <Col
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  xl={{ span: 8 }}
                  key={i}
                >
                  <DoctorSpecialty especialty={e.especialty} image={e.image} />
                </Col>
              ))}
            </Row>
          </Container>
        </JeSection>
      </div>
    </>
  );
};

export default DoctorsSpecialty;
