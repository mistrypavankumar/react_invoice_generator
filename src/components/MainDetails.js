import React from "react";

const MainDetails = ({ company }) => {
  return (
    <section className="flex items-end justify-end flex-col">
      <h2 className="text-xl uppercase font-bold md:text-2xl mb-1">
        {company.name}
      </h2>
      <p>{company.address}</p>
    </section>
  );
};

export default MainDetails;
