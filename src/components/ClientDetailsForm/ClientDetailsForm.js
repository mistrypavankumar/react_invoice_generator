import React, { useState } from "react";
import AddClientNotes from "../AddClientNotes/AddClientNotes";
import TableForm from "../TableForm/TableForm";
import TextInputForm from "../TextInputFom/TextInputForm";

const ClientDetailsForm = ({
  state,
  setState,
  setShowInvoice,
  setShowClient,
}) => {
  const [showNotes, setShowNotes] = useState(false);
  const [addItems, setAddItems] = useState(false);

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
                    setAddItems={setAddItems}
                    invoiceItem={state.invoiceItem}
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
                        value={state.client.name}
                        onChange={(e) =>
                          setState({
                            ...state,
                            client: { ...state.client, name: e.target.value },
                          })
                        }
                      />
                      <TextInputForm
                        label={"Company address"}
                        value={state.client.address}
                        onChange={(e) =>
                          setState({
                            ...state,
                            client: {
                              ...state.client,
                              address: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="md:grid grid-cols-2 gap-10">
                      <TextInputForm
                        label={"Phone number"}
                        type="text"
                        value={state.client.phoneNumber}
                        onChange={(e) =>
                          setState({
                            ...state,
                            client: {
                              ...state.client,
                              phoneNumber: e.target.value,
                            },
                          })
                        }
                      />
                      <TextInputForm
                        label={"Invoice number"}
                        type="text"
                        value={state.invoice.invoiceNumber}
                        onChange={(e) =>
                          setState({
                            ...state,
                            invoice: {
                              ...state.invoice,
                              invoiceNumber: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="md:grid grid-cols-2 gap-10">
                      <TextInputForm
                        label={"Invoiced date"}
                        type="date"
                        value={state.invoice.date}
                        onChange={(e) =>
                          setState({
                            ...state,
                            invoice: { ...state.invoice, date: e.target.value },
                          })
                        }
                      />

                      <TextInputForm
                        label={"Due date"}
                        type="date"
                        value={state.invoice.dueDate}
                        onChange={(e) =>
                          setState({
                            ...state,
                            invoice: {
                              ...state.invoice,
                              dueDate: e.target.value,
                            },
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
                        onClick={() => setAddItems(true)}
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
