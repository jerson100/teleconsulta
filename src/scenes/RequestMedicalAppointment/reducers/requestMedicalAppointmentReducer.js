export const REQUEST_MEDICAL_APPOINTMENT_TYPES = {
  ADD_REQUEST_VIRTUAL_MEDICAL_OPTION: "ADD[VIRTUAL_MEDICAL_OPTION]",
  ADD_SPECIALTIES: "ADD[SPECIALTIES]",
  ADD_MEDIC: "ADD[MEDIC]",
  ADD_CATEGORY: "ADD[CATEGORY]",
  RESET_REQUEST_VIRTUAL_MEDICAL_OPTION: "RESET[VIRTUAL_MEDICAL_OPTION]",
  RESET_CATEGORY: "RESET[CATEGORY]",
  RESET_MEDIC: "RESET[MEDIC]",
  RESET_SPECIALTIES: "RESET[SPECIALTIES]",
};

export const RequestMedicalAppointmentDefaultValues = {
  requestVirtualMedicalOption:
    //   {
    //     id: 0,
    //     name: null,
    //   }
    null,
  category:
    //   { id: 0, name: null }
    null,
  specialties:
    //   {
    //     id: 1,
    //     name: null,
    //     order: 0,
    //   }
    null,
  medic:
    //   {
    //     id: 2,
    //     name: null,
    //     order: 0,
    //   }
    null,
};

const RequestMedicalAppointmentReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_REQUEST_VIRTUAL_MEDICAL_OPTION:
      return { ...state, requestVirtualMedicalOption: action.payload };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_SPECIALTIES:
      return { ...state, specialties: action.payload };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_MEDIC:
      return { ...state, medic: action.payload };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_CATEGORY:
      return { ...state, category: action.payload };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_REQUEST_VIRTUAL_MEDICAL_OPTION:
      return { ...state, requestVirtualMedicalOption: null };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_CATEGORY:
      return { ...state, category: null };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_MEDIC:
      return { ...state, medic: null };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_SPECIALTIES:
      return { ...state, specialties: null };
    default:
      return state;
  }
};

export default RequestMedicalAppointmentReducer;
