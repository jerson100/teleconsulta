import React from "react";

const JeStepsItem = ({ children }) => {
  const child = React.Children.toArray(children);
  if (child.length > 1) throw new Error("Solo se admite un hijo directo");
  if (child.length === 1 && typeof child[0] !== "string") {
    throw new Error(
      "El hijo directo del componente JeStepsItem debe ser un string"
    );
  }
  return <>{child[0]}</>;
};

export default JeStepsItem;
