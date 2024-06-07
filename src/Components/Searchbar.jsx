import React from "react";

const Searchbar = ({handleChange}) => {
  return (
    <>
      <section>
        <input
          type="text"
          placeholder=" 🔍 Search Resources "
          className="rounded-3xl px-12 py-2 bg-slate-200 outline-none font-poppins"
          onChange={(e)=>handleChange(e.target.value)}
         
        />

      </section>
    </>
  );
};

export default Searchbar;
