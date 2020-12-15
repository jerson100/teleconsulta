export const REQUEST_MEDICAL_APPOINTMENT_TYPES = {
  ADD_REQUEST_VIRTUAL_MEDICAL_OPTION: "ADD[VIRTUAL_MEDICAL_OPTION]",
  ADD_SPECIALTIES: "ADD[SPECIALTIES]",
  ADD_MEDIC: "ADD[MEDIC]",
  ADD_CATEGORY: "ADD[CATEGORY]",
  ADD_SUMMARY: "ADD[SUMMARY]",
  ADD_TYPEOFSERVICE: "ADD[TYPEOFSERVICE]",
  ADD_DATE: "ADD_DATE[CALENDAR]",
  ADD_HOUR: "ADD_HOUR[CALENDAR]",
  RESET_REQUEST_VIRTUAL_MEDICAL_OPTION: "RESET[VIRTUAL_MEDICAL_OPTION]",
  RESET_CATEGORY: "RESET[CATEGORY]",
  RESET_MEDIC: "RESET[MEDIC]",
  RESET_SPECIALTIES: "RESET[SPECIALTIES]",
  RESET_TYPEOFSERVICE: "RESET[TYPEOFSERVICE]",
  RESET_DATE: "RESET_DATE[CALENDAR]",
  RESET_HOUR: "RESET_HOUR[CALENDAR]",
};

export const RequestMedicalAppointmentDefaultValues = {
  summary: [
    //   1 : {
    //       value: "Juan Manuel de la  ---",
    //       label: "Doctor"
    //   }
  ], //view data
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
  typeOfService: null,
  calendar: {
    date: null,
    hour: null,
  },
};

const RequestMedicalAppointmentReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_REQUEST_VIRTUAL_MEDICAL_OPTION:
      return {
        ...state,
        requestVirtualMedicalOption: action.payload,
        summary: [...state.summary, { ...action.payload, label: "Consulta" }],
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_SPECIALTIES:
      return {
        ...state,
        specialties: action.payload,
        summary: [
          ...state.summary,
          { ...action.payload, label: "Especialidad" },
        ],
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_MEDIC:
      return {
        ...state,
        medic: action.payload,
        summary: [...state.summary, { ...action.payload, label: "Médico" }],
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_CATEGORY:
      return {
        ...state,
        category: action.payload,
        summary: [...state.summary, { ...action.payload, label: "Categoría" }],
      };

    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_TYPEOFSERVICE:
      return {
        ...state,
        typeOfService: action.payload,
        summary: [
          ...state.summary,
          { ...action.payload, label: "Tipo de servicio" },
        ],
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_DATE:
      return {
        ...state,
        calendar: {
          ...state.calendar.hour,
          date: action.payload,
        },
        summary: [...state.summary, { ...action.payload, label: "Fecha" }],
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.ADD_HOUR:
      return {
        ...state,
        calendar: {
          ...state.calendar.date,
          hour: action.payload,
        },
        summary: [...state.summary, { ...action.payload, label: "Hora" }],
      };

    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_REQUEST_VIRTUAL_MEDICAL_OPTION:
      return {
        ...state,
        requestVirtualMedicalOption: null,
        summary: state.summary.filter((s) => s.label !== "Consulta"),
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_CATEGORY:
      return {
        ...state,
        category: null,
        summary: state.summary.filter((s) => s.label !== "Categoría"),
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_MEDIC:
      return {
        ...state,
        medic: null,
        summary: state.summary.filter((s) => s.label !== "Médico"),
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_SPECIALTIES:
      return {
        ...state,
        specialties: null,
        summary: state.summary.filter((s) => s.label !== "Especialidad"),
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_TYPEOFSERVICE:
      return {
        ...state,
        typeOfService: null,
        summary: state.summary.filter((s) => s.label !== "Tipo de servicio"),
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_DATE:
      return {
        ...state,
        calendar: {
          ...state.calendar.hour,
          date: null,
        },
        summary: state.summary.filter((s) => s.label !== "Fecha"),
      };
    case REQUEST_MEDICAL_APPOINTMENT_TYPES.RESET_HOUR:
      return {
        ...state,
        calendar: {
          ...state.calendar.date,
          hour: null,
        },
        summary: state.summary.filter((s) => s.label !== "Hora"),
      };
    default:
      return state;
  }
};

export default RequestMedicalAppointmentReducer;
