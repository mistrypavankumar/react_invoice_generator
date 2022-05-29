import React, { useState } from "react";
import ClientDetailsForm from "../ClientDetailsForm/ClientDetailsForm";
import CompanyDetails from "../CompanyDetails/CompanyDetails";

const CreateInvoice = ({ state, setState, setShowInvoice }) => {
  const [showClient, setShowClient] = useState(false);
  return (
    <>
      {showClient ? (
        <ClientDetailsForm
          state={state}
          setState={setState}
          setShowInvoice={setShowInvoice}
          setShowClient={setShowClient}
        />
      ) : (
        <CompanyDetails
          state={state}
          setState={setState}
          setShowClient={setShowClient}
        />
      )}
    </>
  );
};

export default CreateInvoice;
