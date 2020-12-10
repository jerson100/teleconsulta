import { useContext } from "react";
import { JeSelectCardContext } from "../provider/JeSelectCardProvider";

const useJeSelectCardContext = () => {
  const context = useContext(JeSelectCardContext);
  if (!context) {
    throw new Error(
      "No se puede acceder al contexto, el componente debe estar dentro del componente JeSelectCard"
    );
  }
  return context;
};

export default useJeSelectCardContext;
