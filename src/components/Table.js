import React from "react";

const Table = () => {
  const tableHeaders = ["Item description", "Quantity", "Price", "Amount"];
  return (
    <>
      <table width={"100%"}>
        <thead>
          <tr className="bg-gray-100 p-1">
            {tableHeaders.map((header, index) => {
              return (
                <td className="font-semibold" key={index}>
                  {header}
                </td>
              );
            })}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Bed</td>
            <td>2</td>
            <td>25,000</td>
            <td>50,000</td>
          </tr>
          <tr>
            <td>Bed</td>
            <td>2</td>
            <td>25,000</td>
            <td>50,000</td>
          </tr>
          <tr>
            <td>Bed</td>
            <td>2</td>
            <td>25,000</td>
            <td>50,000</td>
          </tr>
          <tr>
            <td>Bed</td>
            <td>2</td>
            <td>25,000</td>
            <td>50,000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
