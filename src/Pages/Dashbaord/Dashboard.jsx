// import { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   Legend,
// } from "recharts";

// export default function Dashboard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://task-api-eight-flax.vercel.app/api/dashboard")
//       .then((res) => res.json())
//       .then(setData)
//       .catch(console.error);
//   }, []);

//   if (!data)
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500">
//         Loading dashboard...
//       </div>
//     );

//   const { overview, users, products, analytics } = data;

//   return (
//     <div className="flex min-h-screen bg-gray-100 text-gray-900 font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-100 p-6 flex flex-col justify-between shadow-lg">
//         <div>
//           <h1 className="text-2xl font-bold text-blue-600 mb-8">TaskPro</h1>
//           <nav className="flex flex-col gap-4 text-gray-600">
//             <p className="hover:text-blue-600 cursor-pointer font-medium">
//               Dashboard
//             </p>
//             <p className="hover:text-blue-600 cursor-pointer font-medium">
//               Users
//             </p>
//             <p className="hover:text-blue-600 cursor-pointer font-medium">
//               Analytics
//             </p>
//             <p className="hover:text-blue-600 cursor-pointer font-medium">
//               Products
//             </p>
//           </nav>
//         </div>
//         <div className="text-gray-400 text-sm">© 2026 TaskPro</div>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-8 space-y-8">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center bg-white px-4 py-3 rounded-xl shadow-md">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-100 placeholder-gray-400 shadow-sm"
//           />
//           <div></div>
//         </div>
//         <h2 className="text-3xl font-bold">Dashboard</h2>
//         {/* Overview Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <StatCard
//             title="Total Users"
//             value={overview.totalUsers}
//             color="bg-gradient-to-r from-blue-400 to-blue-600 text-white"
//           />
//           <StatCard
//             title="Active Users"
//             value={overview.activeUsers}
//             color="bg-gradient-to-r from-green-400 to-green-600 text-white"
//           />
//           <StatCard
//             title="Revenue"
//             value={`$${overview.revenue}`}
//             color="bg-gradient-to-r from-purple-400 to-purple-600 text-white"
//           />
//           <StatCard
//             title="Growth"
//             value={`${overview.growth}%`}
//             color="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
//           />
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Analytics LineChart */}
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h3 className="text-xl font-semibold mb-4 text-gray-700">
//               Analytics
//             </h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart
//                 data={analytics}
//                 margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
//               >
//                 <CartesianGrid stroke="#f5f5f5" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="views" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
//                 <Line type="monotone" dataKey="conversions" stroke="#ffc658" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Growth BarChart */}
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h3 className="text-xl font-semibold mb-4 text-gray-700">
//               Revenue & Growth
//             </h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart
//                 data={[overview]} // single overview object
//                 margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
//               >
//                 <CartesianGrid stroke="#f5f5f5" />
//                 <XAxis dataKey="totalUsers" hide />{" "}
//                 {/* hide because only one point */}
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="revenue" fill="#8884d8" />
//                 <Bar dataKey="growth" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Users Table */}
//         <div className="bg-white p-6 rounded-2xl shadow-md">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">
//             Recent Users
//           </h3>
//           <div className="divide-y divide-gray-200">
//             {users.map((u) => (
//               <div
//                 key={u.id}
//                 className="flex justify-between items-center py-3"
//               >
//                 <div>
//                   <div className="font-medium">{u.name}</div>
//                   <div className="text-sm text-gray-500">{u.email}</div>
//                 </div>
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs ${
//                     u.status === "active"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-gray-200 text-gray-600"
//                   }`}
//                 >
//                   {u.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Products */}
//         <div className="bg-white p-6 rounded-2xl shadow-md">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">Products</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {products.map((p) => (
//               <div key={p.id} className="bg-gray-50 p-4 rounded-xl shadow-sm">
//                 <div className="font-semibold">{p.name}</div>
//                 <div className="text-gray-500 text-sm">{p.category}</div>
//                 <div className="flex justify-between mt-2 text-gray-700">
//                   <span>${p.price}</span>
//                   <span className="text-gray-500 text-xs">
//                     Sales: {p.sales}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// const StatCard = ({ title, value, color }) => (
//   <div className={`${color} p-6 rounded-2xl shadow-md`}>
//     <div className="text-sm">{title}</div>
//     <div className="text-2xl font-bold mt-2">{value}</div>
//   </div>
// );

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartLine,
  FaBoxOpen,
} from "react-icons/fa";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://task-api-eight-flax.vercel.app/api/dashboard")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading dashboard...
      </div>
    );

  const { overview, users, products, analytics } = data;

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-8">TaskPro</h1>
          <nav className="flex flex-col gap-4 text-gray-600">
            <NavItem icon={<FaTachometerAlt />} label="Dashboard" />
            <NavItem icon={<FaUsers />} label="Users" />
            <NavItem icon={<FaChartLine />} label="Analytics" />
            <NavItem icon={<FaBoxOpen />} label="Products" />
          </nav>
        </div>
        <div className="text-gray-400 text-sm">© 2026 TaskPro</div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 space-y-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center bg-white px-4 py-3 rounded-xl shadow-md">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-100 placeholder-gray-400 shadow-sm w-64"
          />

          {/* User Info */}
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <div className="text-left">
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-gray-500">john@example.com</div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold">Dashboard</h2>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value={overview.totalUsers}
            color="bg-gradient-to-r from-blue-400 to-blue-600 text-white"
          />
          <StatCard
            title="Active Users"
            value={overview.activeUsers}
            color="bg-gradient-to-r from-green-400 to-green-600 text-white"
          />
          <StatCard
            title="Revenue"
            value={`$${overview.revenue}`}
            color="bg-gradient-to-r from-purple-400 to-purple-600 text-white"
          />
          <StatCard
            title="Growth"
            value={`${overview.growth}%`}
            color="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Analytics LineChart */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Analytics
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={analytics}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#8884d8" />
                <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
                <Line type="monotone" dataKey="conversions" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Growth BarChart */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Revenue & Growth
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={[overview]}
                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="totalUsers" hide />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="growth" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Recent Users
          </h3>
          <div className="divide-y divide-gray-200">
            {users.map((u) => (
              <div
                key={u.id}
                className="flex justify-between items-center py-3"
              >
                <div>
                  <div className="font-medium">{u.name}</div>
                  <div className="text-sm text-gray-500">{u.email}</div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    u.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {u.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Products</h3>
          <div className="grid grid-cols-2 gap-4">
            {products.map((p) => (
              <div key={p.id} className="bg-gray-50 p-4 rounded-xl shadow-sm">
                <div className="font-semibold">{p.name}</div>
                <div className="text-gray-500 text-sm">{p.category}</div>
                <div className="flex justify-between mt-2 text-gray-700">
                  <span>${p.price}</span>
                  <span className="text-gray-500 text-xs">
                    Sales: {p.sales}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// Sidebar nav item component
const NavItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700 font-medium">
    <div className="text-lg">{icon}</div>
    <span>{label}</span>
  </div>
);

const StatCard = ({ title, value, color }) => (
  <div className={`${color} p-6 rounded-2xl shadow-md`}>
    <div className="text-sm">{title}</div>
    <div className="text-2xl font-bold mt-2">{value}</div>
  </div>
);
