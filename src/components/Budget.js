import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = ({ getCurrencySymbol }) => {
  // Receive selectedCurrency as a prop
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  // Define a function to get the currency symbol based on selectedCurrency

  return (
    <div className="alert alert-secondary">
      <span>Budget {getCurrencySymbol()}:</span> {/* Display currency symbol */}
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
