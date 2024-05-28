import { FC, useState } from "react";

const MissionAndVision: FC = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  return (
    <div className="container mx-auto mt-10">
      <div className="flex">
        {/* Mission tab */}
        <button
          className={`py-2 px-4 mx-2 border-b-2 dark:text-gray-100  ${
            activeTab === "mission"
              ? "border-blue-500 text-[20px]"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab("mission")}
        >
          Mission
        </button>
        {/* Vision tab */}
        <button
          className={`py-2 px-4 mx-2 border-b-2 dark:text-gray-100 ${
            activeTab === "vision"
              ? "border-blue-500 text-[20px]"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab("vision")}
        >
          Vision
        </button>
      </div>
      {/* Content area */}
      <div className="mt-6">
        {/* Render Mission content if activeTab is "mission" */}
        {activeTab === "mission" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2 dark:text-gray-100">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              commodo ex, id consectetur nulla. Phasellus vitae sollicitudin
              lorem, non hendrerit leo.
            </p>
          </div>
        )}
        {/* Render Vision content if activeTab is "vision" */}
        {activeTab === "vision" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2 dark:text-gray-100">
              Our Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              commodo ex, id consectetur nulla. Phasellus vitae sollicitudin
              lorem, non hendrerit leo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionAndVision;
