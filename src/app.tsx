import { createSignal } from "solid-js";
import "./app.css";
import TblFlow from "./tblFlow";

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main>
      <TblFlow />      
    </main>
  );
}
