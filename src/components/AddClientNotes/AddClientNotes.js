import React from "react";

const AddClientNotes = ({ setShowNotes, state, setState, setShowInvoice }) => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-5">Additional Notes</h1>
      </div>
      <div className="flex flex-col justify-center">
        <textarea
          className="outline-none bg-gray-50   border-2 border-gray-500/50 rounded resize-none mb-5 w-full h-64 p-4"
          name="notes"
          id="notes"
          cols={30}
          rows={10}
          placeholder="Additional notes to the client ..."
          value={state.notes}
          onChange={(e) => setState({ ...state, notes: e.target.value })}
        />

        <div className="flex justify-between items-center">
          {" "}
          <button
            className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 font-bold transition-all duration-300"
            onClick={() => setShowNotes(false)}
          >
            back
          </button>
          <button
            className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 font-bold transition-all duration-300"
            onClick={() => setShowInvoice(true)}
          >
            Preview Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClientNotes;
