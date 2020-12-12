import React, { createContext, useCallback, useReducer } from "react";
import RequestMedicalAppointmentReducer, {
  RequestMedicalAppointmentDefaultValues,
  REQUEST_MEDICAL_APPOINTMENT_TYPES,
} from "../reducers/requestMedicalAppointmentReducer";

export const RequestMedicalAppointmentContext = createContext();

const RequestMedicalAppointmentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    RequestMedicalAppointmentReducer,
    RequestMedicalAppointmentDefaultValues
  );
  const setRequestVirtualMedicalOption = useCallback((request) => {
    dispatch({
      type:
        REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_REQUEST_VIRTUAL_MEDICAL_OPTION,
      payload: request,
    });
  }, []);

  const setMedic = useCallback((medic) => {
    dispatch({
      type: REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_MEDIC,
      payload: medic,
    });
  }, []);

  const setSpecialties = useCallback((especialties) => {
    dispatch({
      type: REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_SPECIALTIES,
      payload: especialties,
    });
  }, []);

  const setCategory = useCallback((c) => {
    dispatch({
      type: REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_CATEGORY,
      payload: c,
    });
  }, []);

  const resetMedicalOptionLocal = useCallback(() => {
    dispatch({
      type:
        REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_REQUEST_VIRTUAL_MEDICAL_OPTION,
    });
  }, []);

  const resetCategory = useCallback(() => {
    dispatch({
      type: REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_CATEGORY,
    });
  }, []);

  const resetMedic = useCallback(() => {
    dispatch({
      type: REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_MEDIC,
    });
  }, []);

  const resetSpecialties = useCallback(() => {
    dispatch({
      type: REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_SPECIALTIES,
    });
  }, []);

  return (
    <RequestMedicalAppointmentContext.Provider
      value={{
        setRequestVirtualMedicalOption,
        setMedic,
        setSpecialties,
        setCategory,
        resetMedicalOptionLocal,
        resetCategory,
        resetMedic,
        resetSpecialties,
        requestVirtualMedicalOption: state.requestVirtualMedicalOption,
        category: state.category,
        specialties: state.specialties,
        medic: state.medic,
        summary: state.summary,
      }}
    >
      {children}
    </RequestMedicalAppointmentContext.Provider>
  );
};

export default RequestMedicalAppointmentProvider;
