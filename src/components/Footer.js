import React from "react";

const Footer = ({ company }) => {
  return (
    <footer className="footer border-t-2 border-gray-300 pt-5 ">
      <ul className="flex flex-wrap items-center justify-center">
        {company.name && (
          <li>
            {" "}
            <span className="font-bold">Your name: </span>
            {company.name}
          </li>
        )}
        {company.email && (
          <li>
            {" "}
            <span className="font-bold">Email: </span>
            {company.email}
          </li>
        )}
        {company.phoneNumber && (
          <li>
            {" "}
            <span className="font-bold">Phone number: </span>
            {company.phoneNumber}
          </li>
        )}

        {company.bankName && (
          <li>
            {" "}
            <span className="font-bold">Bank name: </span>
            {company.bankName}
          </li>
        )}
        {company.accountHolder && (
          <li>
            {" "}
            <span className="font-bold">Account holder: </span>
            {company.accountHolder}
          </li>
        )}
        {company.accountNumber && (
          <li>
            {" "}
            <span className="font-bold">account number: </span>
            {company.accountNumber}
          </li>
        )}
        {company.website && (
          <li>
            {" "}
            <span className="font-bold">Website: </span>
            <a
              href={company.website | "#"}
              rel="noopenner noreferrer"
              target="_blank"
            >
              {company.website}
            </a>
          </li>
        )}
      </ul>
    </footer>
  );
};

export default Footer;
