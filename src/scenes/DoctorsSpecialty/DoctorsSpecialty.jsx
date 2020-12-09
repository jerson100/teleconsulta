import { Col, Row, Typography } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { parse } from "query-string";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Container from "../../components/common/Container";
import JeSection from "../../components/common/JeSection/JeSection";
import { getEspecialty } from "../../services/api/doctorsSpecialty";
import DoctorSpecialty from "./components/DoctorSpecialty";
import DoctorsSpecialtySearch from "./components/DoctorsSpecialtySearch";
const { Title } = Typography;

const gutter = [
  { md: 16, xl: 32 },
  { xs: 16, md: 16, xl: 32 },
];

const DoctorsSpecialty = () => {
  const { search } = useLocation();
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    //llamada a la api
    setSpecialties(getEspecialty());
  }, []);

  const specialtySearch = useMemo(() => {
    const pars = parse(search).q;
    return pars === undefined ? "" : pars;
  }, [search]);

  const daatSearch = useMemo(() => {
    if (specialtySearch === "") return specialties;
    return specialties.filter(
      (ss) => ss.especialty.toLowerCase().indexOf(specialtySearch) >= 0
    );
  }, [specialtySearch, specialties]);

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
            <DoctorsSpecialtySearch search={specialtySearch} />
            <Row gutter={gutter}>
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
