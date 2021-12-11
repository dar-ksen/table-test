import React from "react";
import { useActions } from "../../hooks/useActions";

const AddButton = () => {
  const { addEmptyRow } = useActions();
  return (
    <div className="d-flex justify-content-between mb-5">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => addEmptyRow()}
      >
        Добавить новую строку
      </button>
    </div>
  );
};

export default AddButton;
