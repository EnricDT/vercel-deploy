import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <p>Technician Dashboard</p>
      <Link to="/login" style={{textDecoration: "none"}}>
        <button type="button">Log out</button>
      </Link>
    </div>
  );
};

export default Dashboard;
