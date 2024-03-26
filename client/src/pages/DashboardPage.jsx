import "../styles/dashboardPage.css";
import { useState } from "react";

// Components
import Sidebar from "../components/Sidebar";
import StudentPanel from "../components/StudentPanel";
import AttendancePanel from "../components/AttendancePanel";

const DashboardPage = () => {
  const [panel, setPanel] = useState("STUDENT");
  return (
    <div className="DashboardCont w-full h-[100vh] bg-white flex">
      <Sidebar setPanel={setPanel} />

      {panel === "STUDENT" ? <StudentPanel /> : <AttendancePanel />}
    </div>
  );
};

export default DashboardPage;
