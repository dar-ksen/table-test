import React from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";

const Table = () => {
  const { rows } = useSelector((state) => state.table);

  const renderRows = () =>
    rows.map((row, index) => {
      const isFirstRow = index === 0;
      const isLastRow = index === rows.length - 1;
      return (
        <TableRow
          key={row.id}
          {...row}
          index={index}
          isFirstRow={isFirstRow}
          isLastRow={isLastRow}
        />
      );
    });

  if (rows.length === 0) {
    return <h2>Empty table</h2>;
  }

  return (
    <table className="table text-center bg-white">
      <thead className="bg-primary">
        <tr className="text-light">
          <th scope="col">Name</th>
          <th scope="col">Value</th>
          <th scope="col" colSpan="3">
            table actions
          </th>
        </tr>
      </thead>
      <tbody className="text-center">{renderRows()}</tbody>
    </table>
  );
};

export default Table;
