import React from "react";
import { useActions } from "../../../hooks/useActions";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const TableRow = ({ id, name, value, index, isFirstRow, isLastRow }) => {
  const { deleteRow, editRow, changeRows } = useActions();

  return (
    <tr>
      <td>
        <input
          className="text-center"
          name={"name" + id}
          type="text"
          value={name}
          onChange={(e) => {
            editRow({ id, name: e.target.value, value });
          }}
        />
      </td>
      <td>
        <input
          className="text-center"
          name={"value" + id}
          type="text"
          value={value}
          onChange={(e) => {
            editRow({ id, name, value: e.target.value });
          }}
        />
      </td>

      <td>
        <button
          className="btn btn-danger"
          onClick={() =>
            changeRows({ firstIndex: index, secondIndex: index - 1 })
          }
          disabled={isFirstRow}
        >
          <FaChevronUp />
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() =>
            changeRows({ firstIndex: index, secondIndex: index + 1 })
          }
          disabled={isLastRow}
        >
          <FaChevronDown />
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteRow(id)}>
          <FaTimes />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
