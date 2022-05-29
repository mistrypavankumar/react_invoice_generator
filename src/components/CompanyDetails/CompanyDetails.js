import React from "react";
import TextInputForm from "../TextInputFom/TextInputForm";

const CompanyDetails = ({ state, setState, setShowClient }) => {
  return (
    <>
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Company Details</h1>
      </div>
      <div className="flex flex-col justify-center">
        <div className="md:grid grid-cols-2 gap-10">
          <TextInputForm
            label={"Company name"}
            value={state.company.name}
            onChange={(e) =>
              setState({
                ...state,
                company: { ...state.company, name: e.target.value },
              })
            }
          />
          <TextInputForm
            label={"Company address"}
            value={state.company.address}
            onChange={(e) =>
              setState({
                ...state,
                company: { ...state.company, address: e.target.value },
              })
            }
          />
        </div>
        <div className="md:grid grid-cols-3 gap-5">
          <TextInputForm
            label={"Email"}
            type="email"
            value={state.company.email}
            onChange={(e) =>
              setState({
                ...state,
                company: { ...state.company, email: e.target.value },
              })
            }
          />

          <TextInputForm
            label={"Phone number"}
            value={state.company.phoneNumber}
            onChange={(e) =>
              setState({
                ...state,
                company: { ...state.company, phoneNumber: e.target.value },
              })
            }
          />
          <TextInputForm
            label={"Website Link"}
            type="url"
            value={state.company.website}
            onChange={(e) =>
              setState({
                ...state,
                company: { ...state.company, website: e.target.value },
              })
            }
          />
        </div>

        <TextInputForm
          label={"Bank name"}
          value={state.company.bankName}
          onChange={(e) =>
            setState({
              ...state,
              company: { ...state.company, bankName: e.target.value },
            })
          }
        />
        <TextInputForm
          label={"Account holder"}
          value={state.company.accountHolder}
          onChange={(e) =>
            setState({
              ...state,
              company: { ...state.company, accountHolder: e.target.value },
            })
          }
        />
        <TextInputForm
          label={"Account Number"}
          value={state.company.accountNumber}
          onChange={(e) =>
            setState({
              ...state,
              company: { ...state.company, accountNumber: e.target.value },
            })
          }
        />

        <button
          className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 font-bold transition-all duration-300"
          onClick={() => setShowClient(true)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CompanyDetails;
