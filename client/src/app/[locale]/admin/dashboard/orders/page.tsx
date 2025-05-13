"use client";

import React from "react";

export default function OrdersPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Orders</h2>
      <div className="bg-white p-4 rounded shadow">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Order ID</th>
              <th className="text-left p-2">Customer</th>
              <th className="text-left p-2">Total</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">1001</td>
              <td className="p-2">John Doe</td>
              <td className="p-2">$199.99</td>
              <td className="p-2">Pending</td>
            </tr>
            {/* Add more rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
}