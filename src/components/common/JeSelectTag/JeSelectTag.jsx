import React, { useEffect, useMemo, useState } from "react";
import Item from "./components/Item";
import "./jeSelectTag.scss";

const JeSelectTag = ({ children, selectDefaultIndex = -1, handleChange }) => {
  const [selectItem, setselectItem] = useState(selectDefaultIndex);
  const childs = useMemo(
    () =>
      React.Children.toArray(children).map((component, i) => {
        if (component.type.name !== Item.name)
          throw new Error(
            `Solo se admite como hijo directo un componente de tipo ${Item.name}`
          );
        return React.cloneElement(component, {
          isSelected: selectItem === i,
          setselectItem,
          i,
        });
      }),
    [children, selectItem]
  );

  useEffect(() => {
    handleChange(selectItem);
  }, [selectItem, handleChange]);

  return <ul className="je-select-tag">{childs}</ul>;
};

JeSelectTag.Item = Item;

export default JeSelectTag;
