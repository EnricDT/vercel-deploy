import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardAdmin from "./components/dahsboard-admin";
const Root = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DashboardAdmin />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="*" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Root;
