import { Alert, Typography } from "antd";
import { motion } from "framer-motion";
import React from "react";
import JeSpace from "../../../../../../components/common/JeSpace";

// const variantsTitle = {
//   hidden: {
//     x: "100%",
//     opacity: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       delay: 0.5,
//     },
//   },
// };
const variantsAlert = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

const PayAfter = () => {
  return (
    <>
      {/* <motion.div variants={variantsTitle}> */}
      <Typography.Title level={3}>Pagar Después</Typography.Title>
      {/* </motion.div> */}
      <JeSpace size="sx" />
      <motion.div variants={variantsAlert}>
        <Alert
          // message="Información importante"
          description="Si desea pagar después por favor siga las siguientes instrucciones"
          type="info"
          showIcon
        />
      </motion.div>
    </>
  );
};

export default React.memo(PayAfter);
