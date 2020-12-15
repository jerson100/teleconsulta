import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import Dropzone from "react-dropzone";
import JeSpace from "../JeSpace";
import Preview from "./components/Preview";
import "./jeDropZone.scss";

const JeDropZone = ({ handleChange }) => {
  const [file, setfile] = useState(null);
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      URL.revokeObjectURL(file);
      //   handleChange(null);
    },
    [file]
  );
  return (
    <div className="je-drop-zone">
      <Dropzone
        onDrop={(f) => {
          setfile(
            Object.assign(f[0], {
              preview: URL.createObjectURL(f[0]),
            })
          );
          handleChange(
            Object.assign(f[0], {
              preview: URL.createObjectURL(f[0]),
            })
          );
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({
              className: "je-drop-zone__zone",
              // onDrop: (event) => event.stopPropagation(),
            })}
          >
            <div className="je-drop-zone__icon">
              <InboxOutlined
                style={{ color: "#40a9ff", fontSize: "48px" }}
                // size={"150px"}
              />
            </div>
            <JeSpace />
            <input {...getInputProps()} multiple={false} />
            <p className="je-drop-zone__title">
              Haga click o arraste el archivo a esta área para cargar el archivo
            </p>
            <p className="je-drop-zone__text">
              Soporte para una carga única. Sólo se admiten imagenes, cualquier
              otro tipo de archivo será rechazado.
            </p>
          </div>
        )}
      </Dropzone>
      <JeSpace />
      <Preview img={file} />
    </div>
  );
};

export default React.memo(JeDropZone);
