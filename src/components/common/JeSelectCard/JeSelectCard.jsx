import React from "react";
import PropTypes from "prop-types";
import JeSelectCardItem from "./components/JeSelectCardItem/JeSelectCardItem";
import JeSelectCardList from "./components/JeSelectCardList/JeSelectCardList";
import "./jeSelectCard.scss";
import JeSelectCardProvider from "./provider/JeSelectCardProvider";

const JeSelectCard = React.memo(({ children, onChange }) => {
  return (
    <div className="je-select-card">
      <JeSelectCardProvider onChange={onChange}>
        <JeSelectCardList>{children}</JeSelectCardList>
      </JeSelectCardProvider>
    </div>
  );
});

JeSelectCard.propTypes = {
  onChange: PropTypes.func,
};

JeSelectCard.defaultProps = {
  onChange: () => {},
};

JeSelectCard.JeSelectCardItem = JeSelectCardItem;

export default JeSelectCard;
