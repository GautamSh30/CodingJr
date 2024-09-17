import React from "react";
import Sidebar from "./components/Sidebar";
import CourseDetails from "./components/CourseDetails";
import CourseInfoSidebar from "./components/CourseInfoSidebar";

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <CourseDetails />
      </div>
      <CourseInfoSidebar />
    </div>
  );
};

export default App;
