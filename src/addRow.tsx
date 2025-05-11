import { createEffect } from "solid-js";
const log = console.log

export default function AddRow(props) {
  // Not taking advantage of reactivity
  // Don't see any need to?
  const newRow: NewRow = {
    id: props.id,
    date: "",
    amount: null,
    balance: null,
    label: null,
  };

  const addRow = () => {
    log('new row:', newRow)
    props.setStore("rows", (currentRows: Row[]) => [
      ...currentRows,
      {
        id: newRow.id,
        date: new Date(),
        amount: newRow.amount,
        balance: newRow.balance,
        label: newRow.label,
      },
    ]);
    
  };

  const dateChange = (e) => {
    
    const v = e.currentTarget.value
    log('new date:', v)
    newRow.date = v;
  };

  const amountChange = (e) => {
    const v = e.currentTarget.value
    log('new amount:', v)
    newRow.amount = v;
  };

  const lableChange = (e) => {
    const v = e.currentTarget.value
    log('new label:', v)
    newRow.label = v;
  };

  // id: number; date: Date; amount: number; balance: number; label: string;

  return (
    <tr>
      {/* <td>{getNextRowId()}</td> */}
      {/* <td>{new Date().toLocaleDateString()}</td> */}
      <td>
        <input type="date" name="date" onChange={dateChange} />
      </td>
      <td>
        <input type="number" name="amount" onChange={amountChange} />
      </td>
      <td>500</td>
      <td>
        {/* <input type="text" onInput={(e) => console.log("input", e.currentTarget.value)} onChange={(e) => console.log("change", e.currentTarget.value)} />    */}
        <input type="text" name="label" onChange={lableChange} />
      </td>
      {/* <td>
        <input type="button" name="add" value="add" />
      </td> */}
      <td>
        <button name="add" onClick={addRow}>
          Add
        </button>
      </td>
    </tr>
  );
}
