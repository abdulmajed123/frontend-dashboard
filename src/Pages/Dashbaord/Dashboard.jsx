// import { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaChartLine,
//   FaBoxOpen,
//   FaCog,
//   FaQuestionCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

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

//   const pieData = [
//     { name: "Revenue", value: overview.revenue },
//     { name: "Growth", value: overview.growth },
//   ];

//   const COLORS = ["#6366f1", "#22c55e"];

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white p-6 flex flex-col justify-between shadow-xl">
//         <div>
//           <h1 className="text-2xl font-bold text-indigo-600 mb-8">TaskPro</h1>
//           <nav className="flex flex-col gap-2 text-gray-600">
//             <NavItem icon={<FaTachometerAlt />} label="Dashboard" />
//             <NavItem icon={<FaUsers />} label="Users" />
//             <NavItem icon={<FaChartLine />} label="Analytics" />
//             <NavItem icon={<FaBoxOpen />} label="Products" />

//             <div className="mt-6 text-xs uppercase text-gray-400 tracking-wider">
//               General
//             </div>
//             <NavItem icon={<FaCog />} label="Settings" />
//             <NavItem icon={<FaQuestionCircle />} label="Help" />
//             <NavItem icon={<FaSignOutAlt />} label="Logout" />
//           </nav>
//         </div>
//         <div className="text-gray-400 text-sm">© 2026 TaskPro</div>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-8 space-y-8">
//         {/* Top Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex justify-between items-center bg-white px-5 py-3 rounded-2xl shadow-md"
//         >
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-100 placeholder-gray-400 shadow-sm w-64"
//           />

//           <div className="flex items-center gap-4">
//             <img
//               src="https://i.pravatar.cc/40"
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full border border-gray-300"
//             />
//             <div className="text-left">
//               <div className="font-medium">John Doe</div>
//               <div className="text-sm text-gray-500">john@example.com</div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-3xl font-bold"
//         >
//           Dashboard
//         </motion.h2>

//         {/* Overview Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <StatCard title="Total Users" value={overview.totalUsers} />
//           <StatCard title="Active Users" value={overview.activeUsers} />
//           <StatCard title="Revenue" value={`$${overview.revenue}`} />
//           <StatCard title="Growth" value={`${overview.growth}%`} />
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Analytics LineChart */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white p-6 rounded-2xl shadow-md"
//           >
//             <h3 className="text-xl font-semibold mb-4 text-gray-700">
//               Analytics
//             </h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={analytics}>
//                 <CartesianGrid stroke="#f1f5f9" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="views" stroke="#6366f1" />
//                 <Line type="monotone" dataKey="clicks" stroke="#22c55e" />
//                 <Line type="monotone" dataKey="conversions" stroke="#f59e0b" />
//               </LineChart>
//             </ResponsiveContainer>
//           </motion.div>

//           {/* Revenue Growth Pie */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
//           >
//             <h3 className="text-xl font-semibold mb-4 text-gray-700">
//               Revenue & Growth
//             </h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   innerRadius={60}
//                   outerRadius={90}
//                   paddingAngle={4}
//                   dataKey="value"
//                 >
//                   {pieData.map((entry, index) => (
//                     <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </motion.div>
//         </div>

//         {/* Users Table */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white p-6 rounded-2xl shadow-md"
//         >
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
//         </motion.div>

//         {/* Products */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white p-6 rounded-2xl shadow-md"
//         >
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">Products</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {products.map((p) => (
//               <div
//                 key={p.id}
//                 className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
//               >
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
//         </motion.div>
//       </main>
//     </div>
//   );
// }

// const NavItem = ({ icon, label }) => (
//   <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-50 cursor-pointer text-gray-700 font-medium transition">
//     <div className="text-lg text-indigo-500">{icon}</div>
//     <span>{label}</span>
//   </div>
// );

// const StatCard = ({ title, value }) => (
//   <motion.div
//     whileHover={{ y: -4 }}
//     className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-6 rounded-2xl shadow-md"
//   >
//     <div className="text-sm opacity-80">{title}</div>
//     <div className="text-2xl font-bold mt-2">{value}</div>
//   </motion.div>
// );

// import { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaChartLine,
//   FaBoxOpen,
//   FaCog,
//   FaQuestionCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

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
//       <div className="min-h-screen flex items-center justify-center text-gray-400 bg-[#f3f5f4]">
//         Loading dashboard...
//       </div>
//     );

//   const { overview, users, products, analytics } = data;

//   const pieData = [
//     { name: "Revenue", value: overview.revenue },
//     { name: "Growth", value: overview.growth },
//   ];

//   const COLORS = ["#1f7a63", "#7fd1b9"];

//   return (
//     <div className="flex min-h-screen bg-[#f3f5f4] text-gray-800 font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white p-6 flex flex-col justify-between rounded-r-3xl shadow-sm border-r border-gray-100">
//         <div>
//           <h1 className="text-xl font-semibold text-[#1f7a63] mb-8 flex items-center gap-2">
//             <span className="w-6 h-6 rounded-full bg-[#1f7a63]" /> Donezo
//           </h1>

//           <nav className="flex flex-col gap-1 text-sm">
//             <NavItem icon={<FaTachometerAlt />} label="Dashboard" active />
//             <NavItem icon={<FaUsers />} label="Users" />
//             <NavItem icon={<FaChartLine />} label="Analytics" />
//             <NavItem icon={<FaBoxOpen />} label="Projects" />

//             <div className="mt-6 mb-2 text-xs text-gray-400 uppercase">
//               General
//             </div>
//             <NavItem icon={<FaCog />} label="Settings" />
//             <NavItem icon={<FaQuestionCircle />} label="Help" />
//             <NavItem icon={<FaSignOutAlt />} label="Logout" />
//           </nav>
//         </div>

//         <div className="bg-[#1f7a63] text-white rounded-2xl p-4 text-sm">
//           <div className="font-medium">Download our App</div>
//           <button className="mt-3 w-full bg-white text-[#1f7a63] rounded-lg py-1.5 text-xs font-medium">
//             Download
//           </button>
//         </div>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-8 space-y-6">
//         {/* Top */}
//         <div className="flex justify-between items-center">
//           <div>
//             <h2 className="text-2xl font-semibold">Dashboard</h2>
//             <p className="text-sm text-gray-400">
//               Plan, prioritize, and accomplish your tasks with ease.
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <input
//               placeholder="Search task"
//               className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm shadow-sm"
//             />
//             <button className="bg-[#1f7a63] text-white px-4 py-2 rounded-xl text-sm shadow">
//               + Add Project
//             </button>
//           </div>
//         </div>

//         {/* Stat cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <StatCard title="Total Projects" value={overview.totalUsers} />
//           <StatCard title="Ended Projects" value={overview.activeUsers} />
//           <StatCard title="Running Projects" value={overview.revenue} />
//           <StatCard title="Pending" value={overview.growth} />
//         </div>

//         {/* Middle */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Bar style analytics */}
//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <div className="font-medium mb-3">Project Analytics</div>
//             <ResponsiveContainer width="100%" height={140}>
//               <LineChart data={analytics}>
//                 <Line
//                   type="monotone"
//                   dataKey="views"
//                   stroke="#1f7a63"
//                   strokeWidth={6}
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Reminder */}
//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <div className="font-medium">Reminders</div>
//             <div className="mt-3 text-sm text-gray-500">
//               Meeting with Arc Company
//             </div>
//             <button className="mt-4 bg-[#1f7a63] text-white px-4 py-2 rounded-lg text-sm">
//               Start Meeting
//             </button>
//           </div>

//           {/* Progress */}
//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <div className="font-medium mb-3">Project Progress</div>
//             <ResponsiveContainer width="100%" height={160}>
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   innerRadius={50}
//                   outerRadius={70}
//                   dataKey="value"
//                 >
//                   {pieData.map((e, i) => (
//                     <Cell key={i} fill={COLORS[i]} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <div className="font-medium mb-3">Team Collaboration</div>
//             <div className="space-y-3">
//               {users.slice(0, 4).map((u) => (
//                 <div key={u.id} className="flex justify-between text-sm">
//                   <span>{u.name}</span>
//                   <span className="text-gray-400">{u.status}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <div className="font-medium mb-3">Products</div>
//             <div className="grid grid-cols-2 gap-3">
//               {products.slice(0, 4).map((p) => (
//                 <div key={p.id} className="bg-[#f6faf9] p-3 rounded-xl">
//                   <div className="text-sm font-medium">{p.name}</div>
//                   <div className="text-xs text-gray-400">${p.price}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// const NavItem = ({ icon, label, active }) => (
//   <div
//     className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer $${
//       active
//         ? " bg-[#e8f3f0] text-[#1f7a63]"
//         : " text-gray-500 hover:bg-gray-50"
//     }`}
//   >
//     <div className="text-base">{icon}</div>
//     <span>{label}</span>
//   </div>
// );

// const StatCard = ({ title, value }) => (
//   <motion.div
//     whileHover={{ y: -3 }}
//     className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
//   >
//     <div className="text-xs text-gray-400">{title}</div>
//     <div className="text-2xl font-semibold mt-1">{value}</div>
//   </motion.div>
// );

// import { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaChartLine,
//   FaBoxOpen,
//   FaCog,
//   FaQuestionCircle,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

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
//       <div className="min-h-screen flex items-center justify-center text-gray-400 bg-[#f3f5f4]">
//         Loading dashboard...
//       </div>
//     );

//   const { overview, users, products, analytics } = data;

//   const pieData = [
//     { name: "Revenue", value: overview.revenue },
//     { name: "Growth", value: overview.growth },
//   ];

//   const COLORS = ["#1f7a63", "#7fd1b9"];

//   return (
//     <div className="flex min-h-screen bg-[#f3f5f4] text-gray-800 font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white p-6 flex flex-col justify-between rounded-r-3xl shadow-sm border-r border-gray-100">
//         <div>
//           <h1 className="text-xl font-semibold text-[#1f7a63] mb-8 flex items-center gap-2">
//             <span className="w-6 h-6 rounded-full bg-[#1f7a63]" /> Donezo
//           </h1>

//           <nav className="flex flex-col gap-1 text-sm">
//             <NavItem icon={<FaTachometerAlt />} label="Dashboard" active />
//             <NavItem icon={<FaUsers />} label="Users" />
//             <NavItem icon={<FaChartLine />} label="Analytics" />
//             <NavItem icon={<FaBoxOpen />} label="Projects" />

//             <div className="mt-6 mb-2 text-xs text-gray-400 uppercase">
//               General
//             </div>
//             <NavItem icon={<FaCog />} label="Settings" />
//             <NavItem icon={<FaQuestionCircle />} label="Help" />
//             <NavItem icon={<FaSignOutAlt />} label="Logout" />
//           </nav>
//         </div>

//         <div className="bg-[#1f7a63] text-white rounded-2xl p-4 text-sm">
//           <div className="font-medium">Download our App</div>
//           <button className="mt-3 w-full bg-white text-[#1f7a63] rounded-lg py-1.5 text-xs font-medium">
//             Download
//           </button>
//         </div>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-8 space-y-6">
//         {/* Top */}
//         <div className="flex justify-between items-center">
//           <div>
//             <h2 className="text-2xl font-semibold">Dashboard</h2>
//             <p className="text-sm text-gray-400">
//               Plan, prioritize, and accomplish your tasks with ease.
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <input
//               placeholder="Search task"
//               className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm shadow-sm"
//             />
//             <button className="bg-[#1f7a63] text-white px-4 py-2 rounded-xl text-sm shadow">
//               + Add Project
//             </button>
//           </div>
//         </div>

//         {/* Stat cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <StatCard
//             title="Total Projects"
//             value={overview.totalUsers}
//             type="total"
//           />
//           <StatCard
//             title="Ended Projects"
//             value={overview.activeUsers}
//             type="ended"
//           />
//           <StatCard
//             title="Running Projects"
//             value={overview.revenue}
//             type="running"
//           />
//           <StatCard title="Pending" value={overview.growth} type="pending" />
//         </div>

//         {/* Middle */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Bar style analytics */}
//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <div className="font-medium mb-3">Project Analytics</div>
//             <ResponsiveContainer width="100%" height={140}>
//               <LineChart data={analytics}>
//                 <Line
//                   type="monotone"
//                   dataKey="views"
//                   stroke="#1f7a63"
//                   strokeWidth={6}
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Reminder */}
//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <div className="font-medium">Reminders</div>
//             <div className="mt-3 text-sm text-gray-500">
//               Meeting with Arc Company
//             </div>
//             <button className="mt-4 bg-[#1f7a63] text-white px-4 py-2 rounded-lg text-sm">
//               Start Meeting
//             </button>
//           </div>

//           {/* Progress */}
//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <div className="font-medium mb-3">Project Progress</div>
//             <ResponsiveContainer width="100%" height={160}>
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   innerRadius={50}
//                   outerRadius={70}
//                   dataKey="value"
//                 >
//                   {pieData.map((e, i) => (
//                     <Cell key={i} fill={COLORS[i]} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <div className="font-medium mb-3">Team Collaboration</div>
//             <div className="space-y-3">
//               {users.slice(0, 4).map((u) => (
//                 <div key={u.id} className="flex justify-between text-sm">
//                   <span>{u.name}</span>
//                   <span className="text-gray-400">{u.status}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-5 shadow-sm">
//             <div className="font-medium mb-3">Products</div>
//             <div className="grid grid-cols-2 gap-3">
//               {products.slice(0, 4).map((p) => (
//                 <div key={p.id} className="bg-[#f6faf9] p-3 rounded-xl">
//                   <div className="text-sm font-medium">{p.name}</div>
//                   <div className="text-xs text-gray-400">${p.price}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// const NavItem = ({ icon, label, active }) => (
//   <div
//     className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer $${
//       active
//         ? " bg-[#e8f3f0] text-[#1f7a63]"
//         : " text-gray-500 hover:bg-gray-50"
//     }`}
//   >
//     <div className="text-base">{icon}</div>
//     <span>{label}</span>
//   </div>
// );

// const StatCard = ({ title, value, type }) => {
//   const styles = {
//     total: "bg-[#ecf8f4] text-[#1f7a63]",
//     ended: "bg-[#f1f5f9] text-[#334155]",
//     running: "bg-[#e8f3ff] text-[#2563eb]",
//     pending: "bg-[#fff7ed] text-[#ea580c]",
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -4, scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 200, damping: 15 }}
//       className={`rounded-2xl p-4 border border-gray-100 shadow-sm ${styles[type]}`}
//     >
//       <div className="text-xs opacity-70">{title}</div>
//       <div className="text-2xl font-semibold mt-1">{value}</div>
//     </motion.div>
//   );
// };

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartLine,
  FaBoxOpen,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://task-api-eight-flax.vercel.app/api/dashboard")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Token মুছে দাও
    navigate("/"); // Login page এ redirect
  };

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 bg-[#f3f5f4]">
        Loading dashboard...
      </div>
    );

  const { overview, users, products, analytics } = data;

  const pieData = [
    { name: "Revenue", value: overview.revenue },
    { name: "Growth", value: overview.growth },
  ];

  const COLORS = ["#1f7a63", "#7fd1b9"];

  return (
    <div className="flex min-h-screen bg-[#f3f5f4] text-gray-800 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 flex flex-col justify-between rounded-r-3xl shadow-sm border-r border-gray-100">
        <div>
          <h1 className="text-xl font-semibold text-[#1f7a63] mb-8 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#1f7a63]" /> Donezo
          </h1>

          <nav className="flex flex-col gap-1 text-sm">
            <NavItem icon={<FaTachometerAlt />} label="Dashboard" active />
            <NavItem icon={<FaUsers />} label="Users" />
            <NavItem icon={<FaChartLine />} label="Analytics" />
            <NavItem icon={<FaBoxOpen />} label="Projects" />

            <div className="mt-6 mb-2 text-xs text-gray-400 uppercase">
              General
            </div>
            <NavItem icon={<FaCog />} label="Settings" />
            <NavItem icon={<FaQuestionCircle />} label="Help" />
            <NavItem
              icon={<FaSignOutAlt />}
              label="Logout"
              onClick={handleLogout}
            />
          </nav>
        </div>

        <div className="bg-[#1f7a63] text-white rounded-2xl p-4 text-sm">
          <div className="font-medium">Download our App</div>
          <button className="mt-3 w-full bg-white text-[#1f7a63] rounded-lg py-1.5 text-xs font-medium">
            Download
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 space-y-6">
        {/* Top */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <p className="text-sm text-gray-400">
              Plan, prioritize, and accomplish your tasks with ease.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              placeholder="Search task"
              className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm shadow-sm"
            />
            <button className="bg-[#1f7a63] text-white px-4 py-2 rounded-xl text-sm shadow">
              + Add Project
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Total Projects"
            value={overview.totalUsers}
            type="total"
          />
          <StatCard
            title="Ended Projects"
            value={overview.activeUsers}
            type="ended"
          />
          <StatCard
            title="Running Projects"
            value={overview.revenue}
            type="running"
          />
          <StatCard title="Pending" value={overview.growth} type="pending" />
        </div>

        {/* Middle */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line Chart */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="font-medium mb-3">Project Analytics</div>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart data={analytics}>
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#1f7a63"
                  strokeWidth={6}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Reminders */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="font-medium">Reminders</div>
            <div className="mt-3 text-sm text-gray-500">
              Meeting with Arc Company
            </div>
            <button className="mt-4 bg-[#1f7a63] text-white px-4 py-2 rounded-lg text-sm">
              Start Meeting
            </button>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="font-medium mb-3">Project Progress</div>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={50}
                  outerRadius={70}
                  dataKey="value"
                >
                  {pieData.map((e, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Team */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="font-medium mb-3">Team Collaboration</div>
            <div className="space-y-3">
              {users.slice(0, 4).map((u) => (
                <div key={u.id} className="flex justify-between text-sm">
                  <span>{u.name}</span>
                  <span className="text-gray-400">{u.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="font-medium mb-3">Products</div>
            <div className="grid grid-cols-2 gap-3">
              {products.slice(0, 4).map((p) => (
                <div key={p.id} className="bg-[#f6faf9] p-3 rounded-xl">
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-gray-400">${p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const NavItem = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
      active
        ? " bg-[#e8f3f0] text-[#1f7a63]"
        : " text-gray-500 hover:bg-gray-50"
    }`}
  >
    <div className="text-base">{icon}</div>
    <span>{label}</span>
  </div>
);

const StatCard = ({ title, value, type }) => {
  const styles = {
    total: "bg-[#ecf8f4] text-[#1f7a63]",
    ended: "bg-[#f1f5f9] text-[#334155]",
    running: "bg-[#e8f3ff] text-[#2563eb]",
    pending: "bg-[#fff7ed] text-[#ea580c]",
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`rounded-2xl p-4 border border-gray-100 shadow-sm ${styles[type]}`}
    >
      <div className="text-xs opacity-70">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </motion.div>
  );
};
