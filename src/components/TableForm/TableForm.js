import React from "react";
import TextInputForm from "../TextInputFom/TextInputForm";

const TableForm = ({ state, setState, setAddItems }) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-5">Add Products</h1>
      </div>
      <div>
        <TextInputForm label="Item name" />
        <TextInputForm label="Quantity" />
        <TextInputForm label="Price" />
      </div>
    </div>
  );
};

export default TableForm;
