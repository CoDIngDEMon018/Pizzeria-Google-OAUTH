// "use client";

// import { SignOutButton } from "@/src/components/sign-out-button";
// import { getAccountLinkStatus } from "@/src/lib/auth/getAccountLinkStatusServerAction";
// import { unlinkGoogleAccount } from "@/src/lib/auth/unlinkGoogleAccountServerAction";
// import { useEffect, useState } from "react";
// import { handleGoogleSignIn } from "@/src/lib/auth/googleSignInServerAction";
// import { getUserName } from "@/src/lib/auth/getUserNameServerAction";
// import { useSession } from "next-auth/react";

// export const DashboardPage: React.FC = () => {
//     const [isAccountLinked, setIsAccountLinked] = useState(false);
//     const [username, setUserName] = useState("");
//     const { update } = useSession();
//     useEffect(() => {
//         const userInfo = async () => {
//       const name = await getUserName();
//       if (name) {
//         setUserName(name);
//       }

//     };
//         const accountLinkStatus = async () => {
//             try {
//                 const accountLinkStatus = await getAccountLinkStatus();
//                 setIsAccountLinked(accountLinkStatus);
//             } catch (error) {
//                 console.error("Error checking account link status:", error);
//                 // setIsAuthenticated(false);
//             }
//         };
//         userInfo();
//         accountLinkStatus();
//     }, []);
//     return (
//         <div className="dashboard-page">
//             <h1>Welcome to the Dashboard</h1>
//             <p>Welcome to your Pizzeria dashboard. 
//                 From here you can manage your account and track your delicious orders.</p>
//             <div className="dashboard-card">
//                 <div className="name">{username}</div>
//                 <div className="field-input-container">
//           <input
//             className="field-input"
//             type="text"
//             placeholder={"Enter name"}
//             value={username}
//             onChange={(event) => setUserName(event.target.value)}
//           />
//           <button
//             className="update-field-button" onClick={() => update({ name: username })}>
//             Update Name
//           </button>
//         </div>
//                 <div>
//                      <button
//             className="link-account-button"
//             onClick={
//               isAccountLinked
//                 ? async () => {
//                     await unlinkGoogleAccount().then(() => {
//                       setIsAccountLinked(false);
//                     });
//                   }
//                 : async () => {
//                     await handleGoogleSignIn().then(() => {
//                       setIsAccountLinked(true);
//                     });
//                   }
//             }
//           >
//             {isAccountLinked
//               ? "Disconnect Google Account"
//               : "Connect Google Account"}
//           </button>
//                 </div>
//                 <div className="signout-button"><SignOutButton className="signout-button"/>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import { SignOutButton } from "@/src/components/sign-out-button";
import { getAccountLinkStatus } from "@/src/lib/auth/getAccountLinkStatusServerAction";
import { unlinkGoogleAccount } from "@/src/lib/auth/unlinkGoogleAccountServerAction";
import { useEffect, useState } from "react";
import { handleGoogleSignIn } from "@/src/lib/auth/googleSignInServerAction";
import { getUserName } from "@/src/lib/auth/getUserNameServerAction";
import { useSession } from "next-auth/react";

// Mock pizza orders data
const mockPizzaOrders = [
  {
    id: "PZA001",
    customerName: "Nehal",
    pizzaType: "Margherita",
    quantity: 2,
    orderDate: "2024-06-13 14:30",
    status: "Delivered"
  },
  {
    id: "PZA002", 
    customerName: "Rahav Singh",
    pizzaType: "Pepperoni",
    quantity: 1,
    orderDate: "2024-06-13 15:45",
    status: "Out for Delivery"
  },
  {
    id: "PZA003",
    customerName: "Anand Jaiswal",
    pizzaType: "Veggie Supreme",
    quantity: 3,
    orderDate: "2024-06-13 16:20",
    status: "Preparing"
  },
  {
    id: "PZA004",
    customerName: "Akshay Bhel",
    pizzaType: "Hawaiian",
    quantity: 1,
    orderDate: "2024-06-13 17:10",
    status: "Pending"
  },
  {
    id: "PZA005",
    customerName: "Riya Sharma",
    pizzaType: "Meat Lovers",
    quantity: 2,
    orderDate: "2024-06-13 18:00",
    status: "Cancelled"
  }
];

type OrderStatus = "Pending" | "Preparing" | "Out for Delivery" | "Delivered" | "Cancelled";

const StatusBadge: React.FC<{ status: OrderStatus }> = ({ status }) => {
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case "Pending": return "hsl(45, 100%, 51%)"; // Yellow
      case "Preparing": return "hsl(208, 86%, 48%)"; // Blue
      case "Out for Delivery": return "hsl(271, 86%, 48%)"; // Purple
      case "Delivered": return "hsl(142, 86%, 48%)"; // Green
      case "Cancelled": return "hsl(0, 86%, 48%)"; // Red
      default: return "hsl(0, 0%, 50%)"; // Gray
    }
  };

  return (
    <span
      style={{
        backgroundColor: getStatusColor(status),
        color: "white",
        padding: "0.25rem 0.75rem",
        borderRadius: "1rem",
        fontSize: "0.875rem",
        fontWeight: "bold"
      }}
    >
      {status}
    </span>
  );
};

export const DashboardPage: React.FC = () => {
  const [isAccountLinked, setIsAccountLinked] = useState(false);
  const [username, setUserName] = useState("");
  const [currentView, setCurrentView] = useState<"dashboard" | "orders">("dashboard");
  const [orders, setOrders] = useState(mockPizzaOrders);
  const [sortField, setSortField] = useState<"id" | "orderDate" | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filterStatus, setFilterStatus] = useState<OrderStatus | "All">("All");
  const { update } = useSession();

  useEffect(() => {
    const userInfo = async () => {
      const name = await getUserName();
      if (name) {
        setUserName(name);
      }
    };
    
    const accountLinkStatus = async () => {
      try {
        const accountLinkStatus = await getAccountLinkStatus();
        setIsAccountLinked(accountLinkStatus);
      } catch (error) {
        console.error("Error checking account link status:", error);
      }
    };
    
    userInfo();
    accountLinkStatus();
  }, []);

  const handleSort = (field: "id" | "orderDate") => {
    const newDirection = sortField === field && sortDirection === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortDirection(newDirection);

    const sortedOrders = [...orders].sort((a, b) => {
      let aVal = field === "id" ? a.id : a.orderDate;
      let bVal = field === "id" ? b.id : b.orderDate;
      
      if (newDirection === "asc") {
        return aVal.localeCompare(bVal);
      } else {
        return bVal.localeCompare(aVal);
      }
    });
    
    setOrders(sortedOrders);
  };

  const filteredOrders = filterStatus === "All" 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  const renderDashboard = () => (
    <div className="dashboard-content">
      <h1>Welcome to the Pizzeria</h1>
      <p>Hello, {username}!</p>
      
      <div className="dashboard-card">
        <div className="name">{username}</div>
        
        <div className="field-input-container">
          <input
            className="field-input"
            type="text"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button
            className="update-field-button"
            onClick={() => update({ name: username })}
          >
            Update Name
          </button>
        </div>

        <button
          className="link-account-button"
          onClick={
            isAccountLinked
              ? async () => {
                  await unlinkGoogleAccount().then(() => {
                    setIsAccountLinked(false);
                  });
                }
              : async () => {
                  await handleGoogleSignIn().then(() => {
                    setIsAccountLinked(true);
                  });
                }
          }
        >
          {isAccountLinked
            ? "Disconnect Google Account"
            : "Connect Google Account"}
        </button>

        <SignOutButton />
      </div>
    </div>
  );

  const renderPizzaOrders = () => (
    <div className="pizza-orders-content">
      <h1>Pizza Orders</h1>
      
      <div className="orders-controls">
        <div className="filter-container">
          <label htmlFor="status-filter">Filter by Status:</label>
          <select
            id="status-filter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as OrderStatus | "All")}
            className="status-filter"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Preparing">Preparing</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>
                <button 
                  className="sort-button"
                  onClick={() => handleSort("id")}
                >
                  Order ID {sortField === "id" && (sortDirection === "asc" ? "↑" : "↓")}
                </button>
              </th>
              <th>Customer Name</th>
              <th>Pizza Type</th>
              <th>Quantity</th>
              <th>
                <button 
                  className="sort-button"
                  onClick={() => handleSort("orderDate")}
                >
                  Order Date {sortField === "orderDate" && (sortDirection === "asc" ? "↑" : "↓")}
                </button>
              </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.pizzaType}</td>
                <td>{order.quantity}</td>
                <td>{order.orderDate}</td>
                <td><StatusBadge status={order.status as OrderStatus} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="dashboard-page">
      <nav className="dashboard-nav">
        <button
          className={`nav-button ${currentView === "dashboard" ? "active" : ""}`}
          onClick={() => setCurrentView("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`nav-button ${currentView === "orders" ? "active" : ""}`}
          onClick={() => setCurrentView("orders")}
        >
          Pizza Orders
        </button>
      </nav>

      <main className="dashboard-main">
        {currentView === "dashboard" ? renderDashboard() : renderPizzaOrders()}
      </main>
    </div>
  );
};