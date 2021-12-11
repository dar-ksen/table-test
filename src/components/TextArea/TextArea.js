import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import "./TextArea.css";

const TextArea = () => {
  const [textValue, setTextValue] = useState();
  const { rows } = useSelector((state) => state.table);
  const { setTable } = useActions();

  useEffect(() => {
    setTextValue(JSON.stringify(visibleRows));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const visibleRows = rows.map(({ name, value }) => ({ name, value }));

  const onClick = () => {
    setTextValue(JSON.stringify(visibleRows));
  };
  const onChange = (e) => {
    setTextValue(e.target.value);
  };
  return (
    <div className="mb-5">
      <textarea
        className="textarea"
        value={textValue}
        onChange={onChange}
      ></textarea>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-primary" onClick={onClick}>
          Сохранить
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setTable(textValue)}
        >
          Загрузить
        </button>
      </div>
    </div>
  );
};

export default TextArea;
