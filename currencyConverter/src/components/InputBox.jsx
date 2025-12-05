import { useId } from "react";

const InputBox = ({
  label, // Label shown above the input (e.g., "From", "To")
  className = "", // Extra CSS classes if parent wants to style the component
  amount, // The current amount/value shown inside the input box
  onAmountChange, // Function triggered when user types in the amount input
  onCurrencyChange, // Function triggered when user selects a different currency
  currencyOptions = [], // just in case for app crash we put array in here // (list of all currencies to show in dropdown)
  selectCurrency = "usd", // Currently selected currency (controls the dropdown)
  amountDisable = false, // If true → disables typing in the amount input
  currencyDisable = false, // If true → disables the currency dropdown
}) => {
  const amountInputId = useId();

  return (
    <div>
      <div
        className={`bg-white p-4 rounded-xl shadow-lg border flex items-center justify-between gap-6 ${className}`}
      >
        {/* Amount Input Section */}
        <div className="w-1/2">
          <label
            htmlFor={amountInputId}
            className="text-gray-500 mb-2 inline-block text-sm font-medium"
          >
            {label}
          </label>

          <input
            id={amountInputId}
            type="text"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            amountDisable
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value));
              // set Number because input values come as strings in events
            }}
            className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-300 
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-300 
                       outline-none transition disabled:bg-gray-100 
                       disabled:cursor-not-allowed"
          />
        </div>

        {/* Currency Selector Section */}
        <div className="w-1/2">
          <p className="text-gray-500 text-sm font-medium mb-2">
            Currency Type
          </p>

          <select
            disabled={currencyDisable}
            value={selectCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white 
                       cursor-pointer focus:border-blue-500 focus:ring-2 
                       focus:ring-blue-300 outline-none transition 
                       disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
