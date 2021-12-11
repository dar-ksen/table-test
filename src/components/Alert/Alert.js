import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const { error } = useSelector((state) => state.table);
  if (!error) {
    return null;
  }
  return (
    <div class="alert alert-danger" role="alert">
      {error}
    </div>
  );
};

export default Alert;
