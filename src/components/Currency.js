const Currency = ({ selectedCurrency, setSelectedCurrency }) => {
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <select value={selectedCurrency} onChange={handleCurrencyChange}>
      <option value="GBP">$ Dollar</option>
      <option value="USD">£ Pound</option>
      <option value="EUR">€ Euro</option>
      <option value="RS">₹ Rupee</option>
    </select>
  );
};

export default Currency;
