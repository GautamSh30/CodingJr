import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white w-1/4 p-6">
      <div className="mb-6">
        <a href="#" className="text-lg font-semibold">
          &lt; Back to courses
        </a>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Blender 3D Fundamentals</h2>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Course introduction</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <a href="#" className="text-purple-500">
              Introduction
            </a>
            <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
              Preview
            </span>
          </li>
          <li>
            <a href="#">Downloading Blender</a>
          </li>
          <li>
            <a href="#">Settings and Preferences</a>
          </li>
          <li>
            <a href="#">Blender Interface</a>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Basics of Blender 3D</h3>
        <ul className="space-y-2">
          <li>
            <a href="#">Mesh Modeling</a>
          </li>
          <li>
            <a href="#">Mesh Editing Operations</a>
          </li>
          <li>
            <a href="#">Most Common Modifiers</a>
          </li>
          <li>
            <a href="#">Orthographic References</a>
          </li>
          <li>
            <a href="#">Sculpting</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
