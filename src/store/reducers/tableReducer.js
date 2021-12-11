import * as types from "../types";

const initialState = {
  rows: [
    { id: "1", name: "test1", value: "1" },
    { id: "2", name: "test2", value: "2" },
    { id: "3", name: "test3", value: "3" },
    { id: "4", name: "test4", value: "4" },
  ],
  error: null,
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TABLE:
      console.log("test");
      return { ...state, rows: action.payload };
    case types.ADD_ROW:
      return { ...state, rows: [...state.rows, action.payload] };
    case types.SET_ERROR:
      return { ...state, error: action.payload };
    case types.EDIT_ROW:
      return {
        ...state,
        rows: state.rows.map((row) => {
          const { id, ...rowChange } = action.payload;
          if (row.id === id) {
            return {
              ...row,
              ...rowChange,
            };
          }
          return row;
        }),
      };
    case types.DELETE_ROW:
      return {
        ...state,
        rows: state.rows.filter((row) => row.id !== action.payload),
      };
    case types.CHANGE_ROWS:
      const { firstIndex, secondIndex } = action.payload;
      const changedRows = [...state.rows];
      if (!changedRows[firstIndex] || !changedRows[secondIndex]) {
        return state;
      }
      const changedRow = changedRows[firstIndex];
      changedRows[firstIndex] = changedRows[secondIndex];
      changedRows[secondIndex] = changedRow;

      return {
        ...state,
        rows: changedRows,
      };
    default:
      return state;
  }
};

export default tableReducer;
