import { Typography, List } from "antd";
import React from "react";
import JeSection from "../../../../components/common/JeSection/JeSection";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";
import "./requestMedicalAppointmentSummary.scss";

const RequestMedicalAppointmentSummary = () => {
  const {
    requestVirtualMedicalOption,
    category,
    medic,
    specialties,
  } = useRequestMedicalAppointmentContext();
  return (
    <JeSection isMargin={false}>
      <div className="request-medical-appointment-summary">
        <Typography.Title level={2}>Resumen</Typography.Title>
        <div className="request-medical-appointment-summary__list">
          <List>
            {requestVirtualMedicalOption && (
              <List.Item>
                Request: <b> {requestVirtualMedicalOption.name} </b>
              </List.Item>
            )}
            {category && (
              <List.Item>
                Categoría: <b> {category.name} </b>
              </List.Item>
            )}

            {category ? (
              category.id === 1 ? (
                specialties ? (
                  <List.Item>
                    Especialidad: <b> {specialties.name} </b>
                  </List.Item>
                ) : null
              ) : medic ? (
                <List.Item>
                  Médico: <b> {medic.name} </b>
                </List.Item>
              ) : null
            ) : null}

            {category ? (
              category.id === 1 ? (
                medic ? (
                  <List.Item>
                    Médico: <b> {medic.name} </b>
                  </List.Item>
                ) : null
              ) : specialties ? (
                <List.Item>
                  Especialidad: <b> {specialties.name} </b>
                </List.Item>
              ) : null
            ) : null}

            {/* {specialties ? (
              category.id === 1 ? (
                <List.Item>
                  Especialidad: <b> {specialties.name} </b>
                </List.Item>
              ) : null
            ) : (
              medic && (
                <List.Item>
                  Médico: <b> {medic.name} </b>
                </List.Item>
              )
            )}

            {medic ? (
              category.id === 1 ? (
                <List.Item>
                  Médico: <b> {medic.name} </b>
                </List.Item>
              ) : (
                specialties && (
                  <List.Item>
                    Especialidad: <b> {specialties.name} </b>
                  </List.Item>
                )
              )
            ) : null} */}
          </List>
        </div>
      </div>
    </JeSection>
  );
};

export default RequestMedicalAppointmentSummary;
