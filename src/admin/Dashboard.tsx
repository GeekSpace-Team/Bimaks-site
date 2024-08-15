import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Fetch visitor count from the backend
    fetch("/api/visitor-count")
      .then((response) => response.json())
      .then((data) => setVisitorCount(data.count))
      .catch((error) => console.error("Error fetching visitor count:", error));
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Visitor Count</h2>
        <p className="text-lg mt-2">{visitorCount}</p>
      </div>
    </div>
  );
};

export default Dashboard;
