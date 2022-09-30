// import Currency from "../Currency/Currency";

const Currencies = (props) => {
  // props.currencies.map((currency) => console.log(currency));

  const currencyList = props.currencies;
  const currencyItems = currencyList.map((currency) => (
    <li>
      {currency.name} {currency.symbol}{" "}
    </li>
  ));
  console.log(currencyItems);
  //Setting State for data
  return (
    <div>
      <ul>
        {currencyList.map((currency) => (
          <li>
            {currency.name} {currency.symbol}{" "}
          </li>
        ))}
        ;
      </ul>
    </div>
  );
  // return props.currencies.map((currency) => (
  // <Currency data/={currency}></Currency>
  // ));
};

export default Currencies;
