import { Outlet } from "react-router-dom";
import Cursor from "./components/ui/cursor/Cursor";

function App() {
  return (
    <>
      {window.innerWidth > 768 && <Cursor />}
      <Outlet />
    </>
  );
}

export default App;
