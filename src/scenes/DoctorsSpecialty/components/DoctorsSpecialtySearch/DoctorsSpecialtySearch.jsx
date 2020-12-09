import React from "react";
import { Form, Input } from "antd";
import "./doctorsSpecialtySearch.scss";
import { useHistory } from "react-router-dom";

const DoctorsSpecialtySearch = ({ search }) => {
  const { push } = useHistory();
  const handleSubmit = (e) => {
    // console.log(e);
    push(`/especialidades${e.specialty === "" ? "" : `?q=${e.specialty}`}`);
  };
  //   console.log(search);
  return (
    <div className="doctors-specialty__search">
      <Form onFinish={handleSubmit}>
        <Form.Item name="specialty" initialValue={search.replace("?q=", "")}>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(DoctorsSpecialtySearch);
