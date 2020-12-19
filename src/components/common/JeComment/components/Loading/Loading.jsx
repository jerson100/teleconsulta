import { Skeleton } from "antd";
import React, { useMemo } from "react";
import JeSpace from "../../../JeSpace";

const Loading = ({ count, show }) => {
  const data = useMemo(() => {
    const render = [];
    for (let index = 0; index < count; index++) {
      render.push(0);
    }
    console.log(render);
    return render;
  }, [count]);

  if (!show) {
    return null;
  }
  //   console.log(data);
  return (
    <div className="je-comment-loading">
      {data.map((c, i) => (
        <div className="je-comment-loading__item" key={i}>
          <JeSpace />
          <Skeleton loading={true} avatar active />
        </div>
      ))}
    </div>
  );
};

export default React.memo(Loading);
