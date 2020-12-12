import { List } from "antd";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useRequestMedicalAppointmentContext from "../../../../hooks/useRequestMedicalAppointmentContext";

const RequestMedicalAppointmentSummaryList = () => {
  const {
    summary,
    // requestVirtualMedicalOption,
    // category,
    // medic,
    // specialties,
  } = useRequestMedicalAppointmentContext();
  return (
    <>
      <List>
        <AnimatePresence>
          {summary.map((s) => (
            // <motion.div
            //   key={s.label}
            //   initial={{ y: "100%", scale: 0 }}
            //   animate={{ scale: 1, y: 0 }}
            //   transition={{ type: "spring", stiffness: 500 }}
            //   exit={{ scale: 5 }}
            // >
            //   {s.label}: <b> {s.name} </b>
            // </motion.div>
            <ItemSummary key={s.label} title={s.label} description={s.name} />
          ))}
        </AnimatePresence>
        {/* {requestVirtualMedicalOption && (
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
        ) : null} */}
      </List>
    </>
  );
};

const ItemSummary = React.memo(({ title, description }) => {
  return (
    <List.Item>
      <motion.div
        initial={{ y: "100%", scale: 0 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 500 }}
        exit={{
          //   scale: 0,
          x: "150px",
          opacity: 0,
          transition: {
            duration: 0.5,
            // type: "spring",
            // stiffness: 100,
          },
        }}
      >
        {title}: <b> {description} </b>
      </motion.div>
    </List.Item>
  );
});

export default RequestMedicalAppointmentSummaryList;
