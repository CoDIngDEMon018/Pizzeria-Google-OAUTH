'use client';

import { useState } from 'react';

type Order = {
  id: string;
  customer: string;
  pizza: string;
  qty: number;
  date: string;
  status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
};

const MOCK_ORDERS: Order[] = [
  { id: 'PZA001', customer: 'John Doe', pizza: 'Margherita', qty: 1, date: '2025-06-10 18:24', status: 'Pending' },
  { id: 'PZA002', customer: 'Jane Smith', pizza: 'Pepperoni', qty: 2, date: '2025-06-09 12:10', status: 'Preparing' },
  { id: 'PZA003', customer: 'Alice Lee', pizza: 'Veggie Supreme', qty: 1, date: '2025-06-11 20:45', status: 'Out for Delivery' },
  { id: 'PZA004', customer: 'Bob Brown', pizza: 'Margherita', qty: 3, date: '2025-06-08 14:00', status: 'Delivered' },
  { id: 'PZA005', customer: 'Carol King', pizza: 'Pepperoni', qty: 1, date: '2025-06-12 19:15', status: 'Cancelled' },
];

export default function PizzaOrdersPage() {
  const [orders] = useState<Order[]>(MOCK_ORDERS);

  return (
    <div className="dashboard-card orders-card">
      <h2>Pizza Orders</h2>
      <div className="table-responsive">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Pizza</th>
              <th>Qty</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.pizza}</td>
                <td>{o.qty}</td>
                <td>{o.date}</td>
                <td>
                  <span className={`status-badge ${o.status.toLowerCase().replace(/ /g, '-')}`}>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
