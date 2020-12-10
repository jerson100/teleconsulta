import React from "react";
import JeSelectCardItem from "./components/JeSelectCardItem/JeSelectCardItem";
import JeSelectCardList from "./components/JeSelectCardList/JeSelectCardList";
import "./jeSelectCard.scss";
import JeSelectCardProvider from "./provider/JeSelectCardProvider";

const JeSelectCard = ({ children, onChange }) => {
  return (
    <div className="je-select-card">
      <JeSelectCardProvider onChange={onChange}>
        <JeSelectCardList>{children}</JeSelectCardList>
      </JeSelectCardProvider>
    </div>
  );
};

JeSelectCard.JeSelectCardItem = JeSelectCardItem;

export default JeSelectCard;
