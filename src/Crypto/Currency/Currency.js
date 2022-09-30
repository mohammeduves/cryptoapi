const Currency = (currency) => {
  return (
    <div>
      <span>{currency.name}</span>
      <span>{currency.symbol}</span>
    </div>
  );
};

export default Currency;
