import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAdmin(token === "bimaksAdminToken");

    // Fetch visitor count
    axios
      .get("http://95.85.121.153:3001/api/visitor-count")
      .then((response) => setVisitorCount(response.data.count))
      .catch((error) => console.error("Error fetching visitor count:", error));

    // Increment visitor count if not admin
    if (!isAdmin) {
      axios
        .post(
          "http://95.85.121.153:3001/api/increment-visitor-count",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => setVisitorCount(response.data.count))
        .catch((error) =>
          console.error("Error incrementing visitor count:", error)
        );
    }
  }, [isAdmin]);

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
