import React, { useEffect, useState } from "react";
import TextInputForm from "../TextInputFom/TextInputForm";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const tableHeaders = ["Item description", "Quantity", "Price", "Amount"];

const TableForm = ({
  setAddItems,
  setShowInvoice,
  itemDescription,
  setItemDescription,
  price,
  setPrice,
  quantity,
  setQuantity,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setAmount(quantity * price);
  }, [quantity, price, setAmount]);

  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  const handleAddItems = (e) => {
    e.preventDefault();

    const newList = {
      id: uuidv4(),
      itemDescription,
      quantity,
      price,
      amount,
    };

    setItemDescription("");
    setPrice("");
    setQuantity("");
    setAmount("");

    setIsEditing(false);
    setList([...list, newList]);
  };

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((item) => item.id === id);
    setList(list.filter((item) => item.id !== id));

    setIsEditing(true);

    setItemDescription(editingRow.itemDescription);
    setPrice(editingRow.price);
    setQuantity(editingRow.quantity);
    setAmount(editingRow.amount);
  };

  // Delete function
  const deleteRow = (id) => setList(list.filter((item) => item.id !== id));

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
              value={itemDescription}
              onChange={(e) => {
                setItemDescription(e.target.value);
              }}
            />
            <TextInputForm
              type={`number`}
              label="Quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <TextInputForm
              label="Price"
              type={`number`}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />

            <TextInputForm label="Amount" value={amount} />
          </div>

          <div className="flex items-end justify-between">
            <button
              onClick={() => setAddItems(false)}
              className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 font-bold transition-all duration-300"
            >
              Preview
            </button>
            <button
              type="submit"
              className="bg-green-500 py-2 px-8 rounded shadow border-2 border-green-500 text-white hover:bg-transparent hover:text-green-500 font-bold transition-all duration-300"
            >
              {isEditing ? "Editing items" : " Add Item"}
            </button>
          </div>
        </form>

        <div className="my-5">
          {list !== [] ? (
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
                    <td className="amount">{item.amount}</td>

                    <td>
                      <button
                        className="text-red-500 font-bold text-xl"
                        onClick={() => deleteRow(item.id)}
                      >
                        <AiOutlineDelete />
                      </button>
                    </td>
                    <td>
                      <button
                        className="text-green-500 font-bold text-xl"
                        onClick={() => editRow(item.id)}
                      >
                        <AiOutlineEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-gray-400 font-bold">No Items</div>
          )}
        </div>

        <div>
          <h2 className="text-gray-800 text-3xl font-bold">
            Rs.{total.toLocaleString()}
          </h2>
        </div>

        <div className="flex items-end justify-end">
          <button
            onClick={() => setShowInvoice(true)}
            className="bg-orange-500 py-2 px-8 rounded shadow border-2 border-orange-500 text-white hover:bg-transparent hover:text-orange-500 font-bold transition-all duration-300"
          >
            Preview Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableForm;
