import { Provider } from "jotai";
import Menu from "./components/Menu";
import Header from "./components/Header";
import { App } from "./components/RemoteApp";
import { App as App2 } from "./components/RemoteApp2";
import useTabState from "./store";

export default function Example() {
  return (
    <div className="h-screen flex w-screen overflow-scroll">
      <Provider>
        <Menu />
        <Header />
        <Content />
      </Provider>
    </div>
  );
}

function Content() {
  const [tabState] = useTabState();
  return (
    <div className="flex-1 flex flex-col overflow-hidden mt-16">
      {tabState === "Dashboard" && <App2 />}
      {tabState === "Table" && <App />}
    </div>
  );
}
