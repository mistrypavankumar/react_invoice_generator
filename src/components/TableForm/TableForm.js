import React, { useEffect, useState } from "react";
import TextInputForm from "../TextInputFom/TextInputForm";
import { v4 as uuidv4 } from "uuid";

const TableForm = ({ state, setState, setAddItems, invoiceItem }) => {
  useEffect(() => {
    setState({
      ...state,
      invoiceItem: {
        ...state.invoiceItem,
        amount: state.invoiceItem.quantity * state.invoiceItem.price,
      },
    });
  }, [state.invoiceItem.quantity, state.invoiceItem.price]);

  const handleAddItems = (e) => {
    e.preventDefault();

    const newList = {
      id: uuidv4(),
      itemDescription: invoiceItem.itemDescription,
      quantity: invoiceItem.quantity,
      price: invoiceItem.price,
      amount: invoiceItem.amount,
    };

    setState({
      ...state,
      invoiceItem: {
        itemDescription: "",
        quantity: 0,
        price: 0.0,
        amount: 0.0,
      },
    });

    setState({
      ...state,
      listItems: [...state.listItems, newList],
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-5">Add Products</h1>
      </div>
      <div>
        <form onSubmit={handleAddItems}>
          <div className="md:grid grid-cols-4 gap-5">
            <TextInputForm
              label="Item name"
              type={"text"}
              value={state.invoiceItem.itemDescription}
              onChange={(e) => {
                setState({
                  ...state,
                  invoiceItem: {
                    ...state.invoiceItem,
                    itemDescription: e.target.value,
                  },
                });
              }}
            />
            <TextInputForm
              type={`number`}
              label="Quantity"
              value={state.invoiceItem.quantity}
              onChange={(e) => {
                setState({
                  ...state,
                  invoiceItem: {
                    ...state.invoiceItem,
                    quantity: e.target.value,
                  },
                });
              }}
            />
            <TextInputForm
              label="Price"
              type={`number`}
              value={state.invoiceItem.price}
              onChange={(e) => {
                setState({
                  ...state,
                  invoiceItem: { ...state.invoiceItem, price: e.target.value },
                });
              }}
            />

            <TextInputForm label="Amount" value={state.invoiceItem.amount} />
          </div>

          <div className="flex items-end justify-end">
            <button
              type="submit"
              className="bg-green-500 py-2 px-8 rounded shadow border-2 border-green-500 text-white hover:bg-transparent hover:text-green-500 font-bold transition-all duration-300"
            >
              Add Item
            </button>
          </div>
        </form>

        {state.listItems.length > 0 ? (
          <table>
            <thead>
              {state.listItems.map((item) => (
                <tr>
                  <th>{item.itemDescription}</th>
                  <th>{item.price}</th>
                  <th>{item.quantity}</th>
                  <th>{item.price}</th>
                </tr>
              ))}
            </thead>
          </table>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TableForm;
