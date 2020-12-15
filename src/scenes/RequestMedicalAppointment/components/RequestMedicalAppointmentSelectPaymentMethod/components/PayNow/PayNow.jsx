import { Typography, Alert, Image } from "antd";
import { motion } from "framer-motion";
// import ImgCrop from "antd-img-crop";
import React, { useCallback, useEffect, useState } from "react";
import JeDropZone from "../../../../../../components/common/JeDropZone/JeDropZone";
// import FilerobotImageEditor from "filerobot-image-editor";
import JeSpace from "../../../../../../components/common/JeSpace";
// import { InboxOutlined } from "@ant-design/icons";

// const { Dragger } = Upload;

// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }

const PayNow = ({ setPayNowFile }) => {
  const handleChange = useCallback(
    (img) => {
      setPayNowFile(img);
    },
    [setPayNowFile]
  );
  return (
    <motion.div>
      <Header />
      <JeSpace size={"sm"} />
      <Info />
      <JeSpace size="sm" />
      <JeDropZone handleChange={handleChange} />
      {/* <aside style={thumbsContainer}>{thumbs}</aside> */}
      {/* <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal> */}
      {/* <FileEditorImg /> */}
    </motion.div>
  );
};

// const FileEditorImg = () => {
//   const [src, setSrc] = useState(
//     "https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
//   );
//   const [show, toggle] = useState(false);
//   const handleComple = (objC) => {
//     const { canvas } = objC;
//     // URL.createObjectURL
//     setSrc(canvas.toDataURL("image/jpg"));
//   };
//   return (
//     <>
//       <Button
//         type="primary"
//         onClick={() => {
//           toggle(true);
//         }}
//       >
//         Editar
//       </Button>

//       <img src={src} alt="example" />

//       <FilerobotImageEditor
//         show={show}
//         src={src}
//         onComplete={handleComple}
//         onClose={() => {
//           toggle(false);
//         }}
//       />
//     </>
//   );
// };

const Header = () => {
  return (
    <>
      <Typography.Title level={3}>Pagar Ahora</Typography.Title>
      <JeSpace size="sm" />
      <Alert
        // message="Información importante"
        description="Tenga en cuenta que solo puede realizar el pago a las siguientes cuentas"
        type="info"
        showIcon
      />
    </>
  );
};

const Info = () => {
  return (
    <>
      <Image src="https://atencionalcliente.movistar.cl/wp-content/themes/movistar/img/ejemplo-boleta-hogar.jpg" />
      <JeSpace size={"sm"} />
      <Typography.Title level={3}>Seleccione una imagen</Typography.Title>
    </>
  );
};

export default React.memo(PayNow);
