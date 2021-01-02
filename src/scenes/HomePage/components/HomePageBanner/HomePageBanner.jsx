import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row, Typography } from "antd";

import { motion } from "framer-motion";

import "./homePageBanner.scss";
import Container from "../../../../components/common/Container/Container";

import bgBanner from "../../services/img/bg3.jpg";

const { Title } = Typography;

const bannerVariants = {
  hidden: {
    filter: "blur(100px)",
    y: "-100%",
  },
  visible: {
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.3,
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.3,
      //   delayChildren: 1,
    },
  },
};

const titleVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};

const textVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};
const buttonVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};

const HomePageBanner = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={bannerVariants}
      className="home-page-banner"
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      <Container>
        <Row>
          <Col sm={{ span: 24 }} lg={{ span: 9 }}>
            <div className="home-page-banner__content">
              <Title className="home-page-banner__title">
                <motion.div variants={titleVariants}>
                  ♥ Aquí va un título ♥
                </motion.div>
              </Title>
              <motion.p
                className="home-page-banner__description"
                variants={textVariants}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                est rerum impedit possimus eveniet in perferendis corrupti
                adipisci, architecto cum nesciunt doloremque a expedita quo odio
                itaque aut quidem cupiditate.
              </motion.p>
              <motion.div
                className="home-page-banner__buttons"
                variants={buttonVariants}
              >
                <Button
                  size="large"
                  type="primary"
                  className="home-page-banner__buttons-btn"
                >
                  <Link to="/auth/register">Registrarme</Link>
                </Button>
                <Button
                  size="large"
                  type="primary"
                  className="home-page-banner__buttons-btn"
                >
                  <Link to="/auth/login">Ingresar</Link>
                </Button>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default HomePageBanner;
