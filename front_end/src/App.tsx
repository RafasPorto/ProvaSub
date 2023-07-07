import { Outlet } from "react-router-dom";
import Nav from "./components/layouts/nav";


function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
