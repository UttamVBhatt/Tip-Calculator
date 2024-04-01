import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [friPercentage, setFriPercentage] = useState(0);

  const tip = bill * ((percentage + friPercentage) / 2 / 100);

  function resetBillValues() {
    setBill("");
    setPercentage(0);
    setFriPercentage(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage} onSetPercentage={setPercentage}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        friPercentage={friPercentage}
        onSetPercentage={setFriPercentage}
      >
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={resetBillValues} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSetPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip}) tip
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
