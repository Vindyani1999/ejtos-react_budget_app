import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import RemainingBudget from "./components/Remaining";
import Currency from "./components/Currency";

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); // Default currency is USD
  const getCurrencySymbol = () => {
    switch (selectedCurrency) {
      case "GBP":
        return "$";
      case "USD":
        return "£";
      case "EUR":
        return "€";
      case "RS":
        return "₹";
      default:
        return "$"; // Default to dollar if no matching currency
    }
  };
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-4">
          <div className="col-sm">
            <Budget getCurrencySymbol={getCurrencySymbol} />
          </div>
          <div className="col-sm">
            <RemainingBudget getCurrencySymbol={getCurrencySymbol} />
          </div>
          <div className="col-sm">
            <ExpenseTotal getCurrencySymbol={getCurrencySymbol} />
          </div>
          <div className="col-sm">
            <Currency
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          </div>
        </div>
        <h3 className="mt-3">Allocation</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList getCurrencySymbol={getCurrencySymbol} />
          </div>
        </div>
        <h3 className="mt-3">Change allocation</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AllocationForm getCurrencySymbol={getCurrencySymbol} />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
