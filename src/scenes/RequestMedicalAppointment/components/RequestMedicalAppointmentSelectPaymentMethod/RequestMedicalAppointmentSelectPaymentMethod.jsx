import { Alert } from "antd";
import React, { useCallback, useState } from "react";
import JeSelectCardItem from "../../../../components/common/JeSelectCard/components/JeSelectCardItem";
import JeSelectCard from "../../../../components/common/JeSelectCard";
import ButtonNav from "./components/ButtonNav";
import Count from "./components/Count";
import ChooseMethod from "./components/ChooseMethod";
import JeSpace from "../../../../components/common/JeSpace";

const RequestMedicalAppointmentSelectPaymentMethod = () => {
  const [method, setmethod] = useState(0);
  const [payNowFile, setPayNowFile] = useState(null);
  const handleChange = useCallback(
    (k) => {
      // console.log(k);
      setmethod(k);
    },
    [setmethod]
  );

  return (
    <div className="request-medical-appointment-select-payment-method">
      <Alert
        message="Información importante"
        description="En este paso solo tiene 10 minutos para terminarlo, de lo contrario regresará al paso anterior."
        type="info"
        showIcon
      />
      <JeSpace size={"sm"} />
      <Count />
      <JeSpace size={"sm"} />
      <JeSelectCard onChange={handleChange}>
        <JeSelectCardItem title="Pagar ahora" selectKey={1} />
        <JeSelectCardItem title="Pagar después" selectKey={2} />
      </JeSelectCard>
      <JeSpace size={"sm"} />
      <ChooseMethod method={method} setPayNowFile={setPayNowFile} />
      <JeSpace size={"sm"} />
      <ButtonNav method={method} payNowFile={payNowFile} />
    </div>
  );
};

export default RequestMedicalAppointmentSelectPaymentMethod;
