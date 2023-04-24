import Dashboard from "./components/dashboard";
import { BrowserRouter } from "react-router-dom";
export default function Root(props) {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}
