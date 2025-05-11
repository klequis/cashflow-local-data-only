import { createEffect, For } from "solid-js";
import { createStore } from "solid-js/store";
import AddRow from "./addRow"
const log = console.log


const [store, setStore] = createStore({
  rowCount: 1,
  rows: [
    {
      id: 0,
      date: new Date("05/09/2025"),
      amount: 8449,
      balance: 8449,
      label: "availableCash",
    },
  ],
});

// Move the setStore for the new row here
function AddNewRow(newRow: NewRow) {
  // do it all here.
}


export default function TblFlow() {
  createEffect(() => {
    console.log("store", store);
  });

  createEffect(() => {
    console.log("new row in store", store.rows.at(-1));
    setStore("rowCount", store.rows.length);
  });

  return (
    <>
      <h1>Cash Flow</h1>
      <table>
        <tbody>
          <For each={store.rows}>
            {(row) => {
              return (
                <tr>
                  {/* <td>{row.id}</td> */}
                  <td>{row.date.toLocaleDateString()}</td>
                  <td>{row.amount}</td>
                  <td>{row.balance}</td>
                  <td>{row.label}</td>
                </tr>
              );
            }}
          </For>
          <AddRow id={store.rows.length} setStore={setStore}/>
        </tbody>
      </table>
    </>
  );
}

// {
  /* <>
      <h1>Cash Flow</h1>
      <table>
        <tbody>
          <tr>
            <td>HI</td>
            <td>
              <select name="amountCol" onChange={setStore}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </> */
// }
