import React from "react";

const Table = ({ list, total }) => {
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
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.itemDescription}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-10">
        <h2 className="flex items-end justify-end text-gray-800 text-3xl font-bold">
          Rs.{total.toLocaleString()}
        </h2>
      </div>
    </>
  );
};

export default Table;
