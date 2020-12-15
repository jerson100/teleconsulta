import React from "react";
import PayAfter from "../../components/PayAfter";
import PayNow from "../../components/PayNow";
import { AnimatePresence, motion } from "framer-motion";

const va = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
  close: {
    scale: 0,
    opacity: 0,
  },
};

const ChooseMethod = ({ method, setPayNowFile }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {method === 1 && (
          <motion.div
            key={1}
            variants={va}
            initial="hidden"
            animate="visible"
            exit="close"
          >
            <PayNow setPayNowFile={setPayNowFile} />
          </motion.div>
        )}
        {method === 2 && (
          <motion.div
            key={2}
            variants={va}
            initial="hidden"
            animate="visible"
            exit="close"
          >
            <PayAfter />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChooseMethod;
