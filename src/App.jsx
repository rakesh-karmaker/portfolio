import { Outlet } from "react-router-dom";
import Cursor from "./components/ui/cursor/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <Outlet />
    </>
  );
}

export default App;
