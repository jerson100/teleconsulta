import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Typography } from "antd";
import JeSection from "../../../../common/JeSection/JeSection";
import Container from "../../../../common/Container";
import { useIntersection } from "react-use";
import { motion } from "framer-motion";
import "./homePageLayoutMessage.scss";
const { Title } = Typography;

const titleVariants = {
  hidden: {
    opacity: 0,
    x: "-100px",
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const subtitleVariants = {
  hidden: {
    opacity: 0,
    x: "100px",
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const HomePageLayoutMessage = () => {
  const messageRef = useRef(null);
  const [animationTitle, setAnimationTitle] = useState("hidden");
  const titleIntersection = useIntersection(messageRef, {
    threshold: 0.1,
    rootMargin: "-200px",
    root: null,
  });
  useEffect(() => {
    console.log(titleIntersection);
    if (titleIntersection?.isIntersecting) {
      setAnimationTitle("visible");
    } else {
      setAnimationTitle("hidden");
    }
  }, [titleIntersection?.isIntersecting]);

  return (
    <JeSection isMargin={false}>
      <div className="home-page-layout-message" ref={messageRef}>
        <Container>
          <Row justify="space-between" align="middle">
            <Col flex="0 1 650px">
              <motion.div
                animate={animationTitle}
                variants={titleVariants}
                className="home-page-layout-message__title"
              >
                <Title
                  level={2}
                  className="home-page-layout-message__title-content"
                >
                  Porque tu salud nos interesa{" "}
                </Title>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                animate={animationTitle}
                variants={subtitleVariants}
                className="home-page-layout-message__logo"
              >
                <Title
                  level={2}
                  className="home-page-layout-message__logo-content"
                >
                  Teleconsulta
                </Title>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </JeSection>
  );
};

export default HomePageLayoutMessage;
