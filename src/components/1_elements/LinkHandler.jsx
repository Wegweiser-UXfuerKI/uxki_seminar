import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

export const LinkHandler = ({ to, children, ...props }) => {
  const { isDevMode } = useContext(AppContext);
  const finalTo = isDevMode ? `/dev${to}` : to;

  return (
    <Link to={finalTo} {...props}>
      {children}
    </Link>
  );
};
