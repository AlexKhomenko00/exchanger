import React, { useState } from "react";
import CurrencyConverter from "react-currency-conv";

const Exchanger = () => {
  return (
    <section className="exchanger">
      <form>
        <select>usd</select>
        <CurrencyConverter from={"USD"} to={"CAD"} value={29} />
        <span>CAD</span>
      </form>
    </section>
  );
};

export default Exchanger;
