import { useEffect, useState } from "react";

const useIndexMenuItemLocation = (routes, pathname, defaultValue = ["0"]) => {
  const [selectedIndexMenuItem, setSelectedIndexMenuItem] = useState(
    defaultValue
  );
  useEffect(() => {
    const index = routes.findIndex((r) => r.path === pathname);
    setSelectedIndexMenuItem(index >= 0 ? [`${index}`] : defaultValue);
  }, [routes, pathname]);
  return selectedIndexMenuItem;
};

export default useIndexMenuItemLocation;
