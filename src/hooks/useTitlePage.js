const { useEffect } = require("react");

export default (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
