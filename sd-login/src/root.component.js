import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Root = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/l" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Root;
