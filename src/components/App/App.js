import React from "react";
import AddButton from "../AddButton";
import Alert from "../Alert";
import Table from "../Table";
import TextArea from "../TextArea";

const App = () => {
  return (
    <div className="container">
      <Table />
      <AddButton />
      <TextArea />
      <Alert />
    </div>
  );
};

export default App;
