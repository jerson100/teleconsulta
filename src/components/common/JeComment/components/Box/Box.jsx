import React from "react";
import JeBox from "../../../JeBox";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import "./box.scss";

const Box = ({ name, img, href, alt, children }) => {
  return (
    <div className="je-comment-box">
      <Avatar alt="" href="" src="" />
      <div className="je-comment-box__box">
        <JeBox
          handleButton={(e) => {
            e.preventDefault();
            console.log("comentando");
          }}
        >
          {children}
        </JeBox>
      </div>
    </div>
  );
};

// const Avatar = React.memo(({ name, img, href, alt }) => {
//   return (
//     <div className="je-comment-box__left">
//       <JeAvatar
//         src={
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
//         }
//         alt="alt"
//         href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
//       />
//     </div>
//   );
// });

Box.propTypes = {
  children: PropTypes.string,
};

Box.defaultProps = {
  children: "",
};

export default Box;
