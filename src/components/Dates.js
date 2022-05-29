import React from "react";

const Dates = ({ invoice }) => {
  return (
    <article className="my-5 flex items-end justify-end">
      <ul>
        <li className="p-1">
          <span className="font-bold">Invoicer number:</span>{" "}
          {invoice.invoiceNumber}
        </li>
        <li className="p-1 bg-gray-100">
          <span className="font-bold">Invoice date: </span> {invoice.date}
        </li>
        {invoice.dueDate && (
          <li className="p-1">
            <span className="font-bold">Due date: </span>
            {invoice.dueDate}
          </li>
        )}
      </ul>
    </article>
  );
};

export default Dates;
