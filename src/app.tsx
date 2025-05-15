import { createSignal } from "solid-js";
import "./app.css";
import TblFlow from "./tblFlow";
import { Link, MetaProvider } from "@solidjs/meta";

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <MetaProvider>
      <Link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-    EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <main>
        <TblFlow />
      </main>
    </MetaProvider>
  );
}
