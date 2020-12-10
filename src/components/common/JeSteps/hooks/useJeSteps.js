import { useContext } from "react";
import { JeStepsContext } from "../provider/JeStepsProvider";

const useJeSteps = () => {
  const context = useContext(JeStepsContext);
  if (!context) {
    throw new Error(
      "Para poder acceder al contexto, declare sus componentes dentro del componente JeSteps"
    );
  }
  return context;
};

export default useJeSteps;
