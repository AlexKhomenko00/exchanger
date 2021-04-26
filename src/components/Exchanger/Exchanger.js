import CurrencySelector from "../../containers/CurrencySelectorContainer";
import s from "./Exchanger.module.css";

const Exchanger = ({
  baseCurrencyState,
  cptyCurrencyState,
  handleCurrencyValueChange,
  handleCurrencyChange,
}) => {
  const disableFormSubmit = (e) => e.preventDefault();
  return (
    <section className={s.exchanger}>
      <h3 className={s.exchangerTitle}>Convert your currency</h3>
      <form className={s.currencyForm} onSubmit={disableFormSubmit}>
        <input
          name="base"
          type="number"
          className={s.currencyInput}
          value={baseCurrencyState.value}
          onChange={handleCurrencyValueChange}
          autocomplete="off"
        />
        <CurrencySelector
          handleCurrencyChange={handleCurrencyChange}
          startCurrencyProp={baseCurrencyState.currency}
          name={"base"}
        />
      </form>
      <form className={s.currencyForm} onSubmit={disableFormSubmit}>
        <input
          type="number"
          name="cpty"
          className={s.currencyInput}
          value={cptyCurrencyState.value}
          onChange={handleCurrencyValueChange}
          autocomplete="off"
        />
        <CurrencySelector
          handleCurrencyChange={handleCurrencyChange}
          startCurrencyProp={cptyCurrencyState.currency}
          name={"cpty"}
        />
      </form>
    </section>
  );
};

export default Exchanger;
