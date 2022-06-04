import React, { useState } from "react";
import ClientDetailsForm from "../ClientDetailsForm/ClientDetailsForm";
import CompanyDetails from "../CompanyDetails/CompanyDetails";

const CreateInvoice = ({
  state,
  setState,
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
  const [showClient, setShowClient] = useState(false);
  return (
    <>
      {showClient ? (
        <ClientDetailsForm
          state={state}
          setState={setState}
          setShowInvoice={setShowInvoice}
          setShowClient={setShowClient}
          itemDescription={itemDescription}
          setItemDescription={setItemDescription}
          price={price}
          setPrice={setPrice}
          quantity={quantity}
          setQuantity={setQuantity}
          amount={amount}
          setAmount={setAmount}
          list={list}
          setList={setList}
          total={total}
          setTotal={setTotal}
        />
      ) : (
        <CompanyDetails setShowClient={setShowClient} />
      )}
    </>
  );
};

export default CreateInvoice;
