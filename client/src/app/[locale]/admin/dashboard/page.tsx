"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";

export default function DashboardPage() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 w-full">
        Welcome, {user?.firstName || "Admin"}!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium">Total Products</h3>
          <p className="text-2xl">120</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium">Total Orders</h3>
          <p className="text-2xl">45</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium">Total Users</h3>
          <p className="text-2xl">200</p>
        </div>
      </div>
    </div>
  );
}
