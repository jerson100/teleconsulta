import React, { useState } from "react";
import { Radio } from "antd";
import "./requestVirtualMedical.scss";

const RequestVirtualMedical = () => {
  const [
    requestVirtualMedicalOption,
    setrequestVirtualMedicalOption,
  ] = useState(1);
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };
  const onChange = (e) => {
    setrequestVirtualMedicalOption(e.target.value);
  };
  return (
    <div className="request-virtual-medical">
      <div className="request-virtual-medical__content">
        <Radio.Group onChange={onChange} value={requestVirtualMedicalOption}>
          <Radio style={radioStyle} value={1}>
            Option A
          </Radio>
          <Radio style={radioStyle} value={2}>
            Consulta Médica Virtual
          </Radio>
          <Radio style={radioStyle} value={3}>
            Option C
          </Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default RequestVirtualMedical;
