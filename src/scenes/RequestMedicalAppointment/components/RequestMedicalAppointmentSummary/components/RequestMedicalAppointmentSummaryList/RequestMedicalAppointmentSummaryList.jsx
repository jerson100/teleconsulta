import { List } from "antd";
import React from "react";
import useRequestMedicalAppointmentContext from "../../../../hooks/useRequestMedicalAppointmentContext";

const RequestMedicalAppointmentSummaryList = () => {
  const {
    requestVirtualMedicalOption,
    category,
    medic,
    specialties,
  } = useRequestMedicalAppointmentContext();
  return (
    <>
      <List>
        {requestVirtualMedicalOption && (
          <ItemSummary
            title="Solicitud"
            description={requestVirtualMedicalOption.name}
          />
        )}
        {category && (
          <ItemSummary title="Categoría" description={category.name} />
        )}

        {category ? (
          category.id === 1 ? (
            specialties ? (
              <ItemSummary
                title="Especialidad"
                description={specialties.name}
              />
            ) : null
          ) : medic ? (
            <ItemSummary title="EspeciMédicoalidad" description={medic.name} />
          ) : null
        ) : null}

        {category ? (
          category.id === 1 ? (
            medic ? (
              <ItemSummary title="Médico" description={medic.name} />
            ) : null
          ) : specialties ? (
            <ItemSummary title="Especialidad" description={specialties.name} />
          ) : null
        ) : null}
      </List>
    </>
  );
};

const ItemSummary = React.memo(({ title, description }) => {
  return (
    <List.Item>
      {title}: <b> {description} </b>
    </List.Item>
  );
});

export default RequestMedicalAppointmentSummaryList;
