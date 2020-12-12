export const containerStepVariants = {
  hidden: {
    // y: 250,
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    // y: 0,
    scale: 1,
    transition: {
      type: "spring",
      //   mass: 0.4,
      //   damping: 4,
      stiffness: 500,
      when: "beforeChildren", //para orquestar la animación y que se anime antes de los hijos
      //   staggerChildren: 0.04,
      //   staggerDirection: -1,
      //   delayChildren: 0,
    },
  },
};

export const WrapperContentStepVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      //   delay: 0.5,
      stiffness: 500,
      when: "beforeChildren", //para orquestar la animación y que se anime antes de los hijos
      //   staggerChildren: 1000,
    },
  },
};

export const buttonsStepVariants = {
  hidden: {
    scale: 0,
    x: "100%",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      //   delay: 1,
      stiffness: 500,

      //   duration: 0.5,
    },
  },
};
