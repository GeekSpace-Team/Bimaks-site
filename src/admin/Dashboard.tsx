import React, { useEffect, useState } from "react";

const siteId = "site1";

const Dashboard: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAdmin(token === "bimaksAdminToken");

    fetch(`http://95.85.121.153:3001/api/visitor-count/${siteId}`)
      .then((response) => response.json())
      .then((data) => setVisitorCount(data.count))
      .catch((error) => console.error("Error fetching visitor count:", error));

    if (!isAdmin) {
      fetch("http://95.85.121.153:3001/api/increment-visitor-count", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => setVisitorCount(data.count))
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
