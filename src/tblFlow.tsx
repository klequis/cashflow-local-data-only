import { createEffect, For } from "solid-js";
import { createStore } from "solid-js/store";

type id = Number | null;
type date = Date;
type amount = Number;
type balance = Number;
type label = String;

// type Row = {
//   id: Number | null,
//   date: Date,
//   amount: Number,
//   balance: Number,
//   label: String
// }

const [store, setStore] = createStore({
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

// let currentId = -1

function getNextRowId() {
  // currentId++
  // return currentId
  return store.rows.length;
}

function NewRow() {
  const [row, setRow] = createStore({
    id: getNextRowId(),
    date: null,
    amount: null,
    balance: null,
    label: ""
  })
  // const dateChange = ()
  createEffect(() => {
    console.log("row", {
      date: row.date,
      amount: row.amount,
      balance: row.balance,
      label: row.label
    })
  })
  const dateChange = (e) => {
    setRow("date", e.currentTarget.value)
  }
  const amountChange = (e) => {
    setRow("amount", e.currentTarget.value)
  }
  const lableChange = (e) => {
    // console.log('e', e)
    setRow("label", e.currentTarget.value)
  }

  return (
    <tr>
      <td>{getNextRowId()}</td>
      {/* <td>{new Date().toLocaleDateString()}</td> */}
      <td>
        <input type="date" name="date" onChange={dateChange} />
      </td>
      <td>
        <input type="number" name="amount" onChange={amountChange}  />
      </td>
      <td>500</td>
      <td>
        {/* <input type="text" onInput={(e) => console.log("input", e.currentTarget.value)} onChange={(e) => console.log("change", e.currentTarget.value)} />    */}
        <input type="text" name="label" onChange={lableChange} />
      </td>
      <td>
        <input type="button" name="add" value="add" />
      </td>
    </tr>
  );
}

export default function TblFlow() {
  createEffect(() => {
    console.log("store", store);
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
                  <td>{row.id}</td>
                  <td>{row.date.toLocaleDateString()}</td>
                  <td>{row.amount}</td>
                  <td>{row.balance}</td>
                  <td>{row.label}</td>
                </tr>
              );
            }}
          </For>
          <NewRow />
        </tbody>
      </table>
    </>
  );
}

{
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
}
