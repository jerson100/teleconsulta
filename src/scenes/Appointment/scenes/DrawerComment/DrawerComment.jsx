import { Drawer } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useMatchMedia from "../../../../hooks/useMatchMedia";
import Comment from "./components/Comment";

const DrawerComment = () => {
  const [show, setshow] = useState(true);
  const { push } = useHistory();

  const desktop = useMatchMedia("(min-width: 1024px)");

  const handleClose = () => {
    setshow(false);
    // push("/dashboard/datinghistory/150626");
  };

  return (
    <>
      <Drawer
        title="Comentarios de la cita"
        placement={"right"}
        closable={false}
        onClose={handleClose}
        visible={show}
        key={"right"}
        // maskStyle={{ width: "100%" }}
        afterVisibleChange={() => {
          !show && push("/dashboard/datinghistory/150626");
        }}
        // style={{ maxWidth: "500px", width: "90%" }}
        width={desktop ? "500px" : "80%"}
        zIndex={"10000000"}
      >
        <Comment />
      </Drawer>
    </>
  );
};

export default DrawerComment;
