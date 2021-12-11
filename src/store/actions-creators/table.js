import { uid } from "uid";
import * as types from "../types";

export const addEmptyRow = () => {
  const rowData = {
    id: uid(),
    name: "",
    value: "",
  };
  return { type: types.ADD_ROW, payload: rowData };
};

export const deleteRow = (id) => ({ type: types.DELETE_ROW, payload: id });
export const editRow = (rowData) => {
  return { type: types.EDIT_ROW, payload: rowData };
};

export const changeRows = (payload) => ({ type: types.CHANGE_ROWS, payload });

export const setTable = (textAreaData) => (dispatch) => {
  dispatch({
    type: types.SET_ERROR,
    payload: null,
  });
  try {
    const data = JSON.parse(textAreaData);

    dispatch({
      type: types.SET_TABLE,
      payload: data.map((row) => ({ id: uid(), ...row })),
    });
  } catch (e) {
    dispatch({
      type: types.SET_ERROR,
      payload: "Ошибка преобразования строки",
    });
  }
};
