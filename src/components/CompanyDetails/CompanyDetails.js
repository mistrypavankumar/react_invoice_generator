import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TextInputForm from "../TextInputFom/TextInputForm";
import { actionCreators } from "../../states";

const initialState = {
  name: "",
  address: "",
  email: "",
  phoneNumber: "",
  website: "",
  bankName: "",
  accountHolder: "",
  accountNumber: "",
};

const CompanyDetails = ({ setShowClient }) => {
  const [companyData, setCompanyData] = useState(initialState);
  const dispatch = useDispatch();

  return (
    <>
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Company Details</h1>
      </div>
      <div className="flex flex-col justify-center">
        <div className="md:grid grid-cols-2 gap-10">
          <TextInputForm
            label={"Company name"}
            value={companyData.name}
            onChange={(e) =>
              setCompanyData({ ...companyData, name: e.target.value })
            }
          />
          <TextInputForm
            label={"Company address"}
            value={companyData.address}
            onChange={(e) =>
              setCompanyData({ ...companyData, address: e.target.value })
            }
          />
        </div>
        <div className="md:grid grid-cols-3 gap-5">
          <TextInputForm
            label={"Email"}
            type="email"
            value={companyData.email}
            onChange={(e) =>
              setCompanyData({ ...companyData, email: e.target.value })
            }
          />

          <TextInputForm
            label={"Phone number"}
            value={companyData.phoneNumber}
            onChange={(e) =>
              setCompanyData({ ...companyData, phoneNumber: e.target.value })
            }
          />
          <TextInputForm
            label={"Website Link"}
            type="url"
            value={companyData.website}
            onChange={(e) =>
              setCompanyData({ ...companyData, website: e.target.value })
            }
          />
        </div>

        <TextInputForm
          label={"Bank name"}
          value={companyData.bankName}
          onChange={(e) =>
            setCompanyData({ ...companyData, bankName: e.target.value })
          }
        />
        <TextInputForm
          label={"Account holder"}
          value={companyData.accountHolder}
          onChange={(e) =>
            setCompanyData({ ...companyData, accountHolder: e.target.value })
          }
        />
        <TextInputForm
          label={"Account Number"}
          value={companyData.accountNumber}
          onChange={(e) =>
            setCompanyData({ ...companyData, accountNumber: e.target.value })
          }
        />

        <button
          className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 font-bold transition-all duration-300"
          onClick={() => {
            setShowClient(true);
            dispatch(actionCreators.addCompanyDetails(companyData));
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CompanyDetails;
