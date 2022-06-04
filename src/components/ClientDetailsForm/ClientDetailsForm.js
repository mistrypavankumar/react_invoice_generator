import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddClientNotes from "../AddClientNotes/AddClientNotes";
import TableForm from "../TableForm/TableForm";
import TextInputForm from "../TextInputFom/TextInputForm";
import { actionCreators } from "../../states";

const clientInitialState = {
  name: "",
  address: "",
  phoneNumber: "",
};

const invoiceInitialState = {
  invoiceNumber: "",
  date: "",
  dueDate: "",
};

const ClientDetailsForm = ({
  state,
  setState,
  setShowInvoice,
  setShowClient,
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
  const [showNotes, setShowNotes] = useState(false);
  const [addItems, setAddItems] = useState(false);

  const [clientDetails, setClientDetails] = useState(clientInitialState);
  const [invoiceDetails, setInvoiceDetails] = useState(invoiceInitialState);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {showNotes ? (
          <AddClientNotes
            state={state}
            setState={setState}
            setShowNotes={setShowNotes}
            setShowInvoice={setShowInvoice}
          />
        ) : (
          <>
            <div>
              {addItems ? (
                <div>
                  <TableForm
                    state={state}
                    setState={setState}
                    itemDescription={itemDescription}
                    setItemDescription={setItemDescription}
                    price={price}
                    setPrice={setPrice}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    amount={amount}
                    setAmount={setAmount}
                    setAddItems={setAddItems}
                    invoiceItem={state.invoiceItem}
                    setShowInvoice={setShowInvoice}
                    list={list}
                    setList={setList}
                    total={total}
                    setTotal={setTotal}
                  />
                </div>
              ) : (
                <>
                  <div className="mb-5 flex justify-between items-center">
                    <h1 className="font-bold text-xl">Client Details</h1>

                    <button
                      onClick={() => setShowNotes(true)}
                      className="bg-green-500 py-2 px-8 rounded shadow border-2 border-green-500 text-white hover:bg-transparent hover:text-green-500 font-bold transition-all duration-300"
                    >
                      Add Notes
                    </button>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="md:grid grid-cols-2 gap-10">
                      <TextInputForm
                        label={"Client name"}
                        value={clientDetails.name}
                        onChange={(e) =>
                          setClientDetails({
                            ...clientDetails,
                            name: e.target.value,
                          })
                        }
                      />
                      <TextInputForm
                        label={"Company address"}
                        value={clientDetails.address}
                        onChange={(e) =>
                          setClientDetails({
                            ...clientDetails,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="md:grid grid-cols-2 gap-10">
                      <TextInputForm
                        label={"Phone number"}
                        type="text"
                        value={clientDetails.phoneNumber}
                        onChange={(e) =>
                          setClientDetails({
                            ...clientDetails,
                            phoneNumber: e.target.value,
                          })
                        }
                      />
                      <TextInputForm
                        label={"Invoice number"}
                        type="text"
                        value={invoiceDetails.invoiceNumber}
                        onChange={(e) =>
                          setInvoiceDetails({
                            ...invoiceDetails,
                            invoiceNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="md:grid grid-cols-2 gap-10">
                      <TextInputForm
                        label={"Invoiced date"}
                        type="date"
                        value={invoiceDetails.date}
                        onChange={(e) =>
                          setInvoiceDetails({
                            ...invoiceDetails,
                            date: e.target.value,
                          })
                        }
                      />

                      <TextInputForm
                        label={"Due date"}
                        type="date"
                        value={invoiceDetails.dueDate}
                        onChange={(e) =>
                          setInvoiceDetails({
                            ...invoiceDetails,
                            dueDate: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      {" "}
                      <button
                        className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 font-bold transition-all duration-300"
                        onClick={() => setShowClient(false)}
                      >
                        previous
                      </button>
                      <button
                        className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 font-bold transition-all duration-300"
                        onClick={() => {
                          setAddItems(true);
                          dispatch(
                            actionCreators.addClientDetails(clientDetails)
                          );
                        }}
                      >
                        Add Items
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ClientDetailsForm;
