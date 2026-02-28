import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartLine,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaSearch,
  FaRegBell,
  FaRegEnvelope,
  FaPlay,
  FaStop,
  FaPause,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  // API Fetching
  useEffect(() => {
    fetch("https://task-api-eight-flax.vercel.app/api/dashboard")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 bg-[#f3f5f4]">
        Loading dashboard...
      </div>
    );

  const { overview, users, products, analytics } = data;

  // Pie Chart Data based on growth dynamically
  const progressValue = overview.growth;
  const pieData = [
    { name: "Completed", value: progressValue },
    { name: "Remaining", value: 100 - progressValue },
  ];
  const COLORS = ["#1f7a63", "#e5e7eb"];

  return (
    <div className="flex min-h-screen bg-[#f3f5f4] text-gray-800 font-sans p-4 gap-4">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 flex flex-col justify-between rounded-3xl shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-[#1f7a63] rounded-lg flex items-center justify-center text-white font-bold">
              D
            </div>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">
              Donezo
            </h1>
          </div>
          <nav className="flex flex-col gap-1">
            <p className="text-[10px] uppercase text-gray-400 font-bold mb-4 tracking-widest">
              Menu
            </p>
            <NavItem icon={<FaTachometerAlt />} label="Dashboard" active />
            <NavItem icon={<FaRegEnvelope />} label="Users" badge="5+" />
            <NavItem icon={<FaChartLine />} label="Analytics" />
            <NavItem icon={<FaUsers />} label="Products" />
            <p className="text-[10px] uppercase text-gray-400 font-bold mt-8 mb-4 tracking-widest">
              General
            </p>
            <NavItem icon={<FaCog />} label="Settings" />
            <NavItem icon={<FaQuestionCircle />} label="Help" />
            <NavItem
              icon={<FaSignOutAlt />}
              label="Logout"
              onClick={handleLogout}
            />
          </nav>
        </div>
        <div className="bg-[#0b2d24] text-white rounded-2xl p-4 relative overflow-hidden">
          <p className="text-xs font-medium relative z-10">
            Download our
            <br />
            Mobile App
          </p>
          <button className="mt-4 bg-[#1f7a63] text-white text-[10px] px-4 py-1.5 rounded-lg font-bold relative z-10">
            Download
          </button>
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-[#1f7a63] opacity-20 rounded-full"></div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-4">
        {/* Top Navbar */}
        <header className="flex justify-between items-center bg-white px-6 py-3 rounded-2xl shadow-sm">
          <div className="relative w-1/3">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
            <input
              placeholder="Search task"
              className="w-full bg-[#f9fafb] rounded-xl pl-9 pr-4 py-2 text-xs outline-none border border-transparent focus:border-green-100"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-3 text-gray-400 border-r pr-4">
              <FaRegEnvelope className="cursor-pointer" />
              <FaRegBell className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-bold">Totok Michael</p>
                <p className="text-[10px] text-gray-400">
                  tmichael20@gmail.com
                </p>
              </div>
              <img
                src="https://i.pravatar.cc/40?u=1"
                className="w-9 h-9 rounded-full"
                alt="User"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Title */}
        <div className="flex justify-between items-end px-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-xs text-gray-400">
              Plan, prioritize, and accomplish your tasks with ease.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#0b4d3e] text-white px-4 py-2 rounded-xl text-xs font-medium">
              + Add Project
            </button>
            <button className="bg-white border text-gray-600 px-4 py-2 rounded-xl text-xs font-medium">
              Import Data
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            title="Total Projects"
            value={overview.totalUsers}
            type="dark"
            sub="Increased from last month"
          />
          <StatCard
            title="Ended Projects"
            value={overview.activeUsers}
            sub="Increased from last month"
          />
          <StatCard
            title="Running Projects"
            value={overview.revenue}
            sub="Increased from last month"
          />
          <StatCard
            title="Pending Project"
            value={overview.growth}
            sub="On Discuss"
          />
        </div>

        {/* Charts & List Row */}
        <div className="grid grid-cols-12 gap-4">
          {/* Bar Chart (Analytics) */}
          <div className="col-span-5 bg-white p-5 rounded-3xl shadow-sm">
            <h3 className="text-sm font-bold mb-4">Products Analytics</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={analytics}>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                />
                <Bar
                  dataKey="views"
                  fill="url(#barGradient)"
                  radius={[10, 10, 10, 10]}
                  barSize={20}
                />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1f7a63" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0b4d3e" stopOpacity={1} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Reminders */}
          <div className="col-span-3 bg-white p-5 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold">Reminders</h3>
              <p className="text-xs font-bold text-gray-700 mt-4">
                Meeting with Arc Company
              </p>
              <p className="text-[10px] text-gray-400">
                Time : 03:00 pm - 04:00 pm
              </p>
            </div>
            <button className="w-full bg-[#0b4d3e] text-white py-2.5 rounded-xl text-xs flex items-center justify-center gap-2">
              <FaPlay size={8} /> Start Meeting
            </button>
          </div>

          {/* Projects List */}
          <div className="col-span-4 bg-white p-5 rounded-3xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold">Products</h3>
              <span className="text-[10px] border px-2 py-0.5 rounded cursor-pointer text-gray-500">
                + New
              </span>
            </div>
            <div className="space-y-3">
              {products.slice(0, 4).map((p) => (
                <div key={p.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-xs">
                    🚀
                  </div>
                  <div>
                    <p className="text-[11px] font-bold leading-none">
                      {p.name}
                    </p>
                    <p className="text-[9px] text-gray-400 mt-1">
                      Price: ${p.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-12 gap-4">
          {/* Team Collaboration */}
          <div className="col-span-5 bg-white p-5 rounded-3xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold">Team Collaboration</h3>
              <button className="text-[10px] border px-2 py-0.5 rounded-full text-gray-500">
                + Add Member
              </button>
            </div>
            <div className="space-y-4">
              {users.slice(0, 3).map((u) => (
                <div key={u.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/150?u=${u.id}`}
                      className="w-8 h-8 rounded-full"
                      alt={u.name}
                    />
                    <div>
                      <p className="text-xs font-bold leading-none">{u.name}</p>
                      <p className="text-[9px] text-gray-400 mt-1">
                        Working on <span className="text-gray-600">Tasks</span>
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-md ${
                      u.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-orange-50 text-orange-700"
                    }`}
                  >
                    {u.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Progress Pie */}
          <div className="col-span-4 bg-white p-5 rounded-3xl shadow-sm flex flex-col items-center">
            <h3 className="text-sm font-bold self-start mb-2">
              Project Progress
            </h3>
            <div className="relative">
              <PieChart width={160} height={100}>
                <Pie
                  data={pieData}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={0}
                  dataKey="value"
                  cornerRadius={10}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center">
                <span className="text-xl font-bold">{progressValue}%</span>
                <p className="text-[8px] text-gray-400">Project Ended</p>
              </div>
            </div>
            <div className="flex gap-4 text-[9px] mt-2">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#1f7a63]"></div>{" "}
                Completed
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-200"></div> Pending
              </span>
            </div>
          </div>

          {/* Time Tracker */}
          <div className="col-span-3 bg-[#0b2d24] p-5 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between">
            <p className="text-[10px] font-medium opacity-80">Time Tracker</p>
            <div className="text-2xl font-mono my-4">01:24:08</div>
            <div className="flex gap-2">
              <button className="p-2 bg-white/10 rounded-lg">
                <FaPause size={10} />
              </button>
              <button className="p-2 bg-red-500 rounded-lg">
                <FaStop size={10} />
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-20 h-20 border-4 border-white opacity-5 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Nav Item
const NavItem = ({ icon, label, active, badge, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer transition-all ${
      active ? "bg-[#e8f3f0] text-[#1f7a63]" : "text-gray-500 hover:bg-gray-50"
    }`}
  >
    <div className="flex items-center gap-3">
      <div className="text-sm">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </div>
    {badge && (
      <span className="text-[10px] bg-[#1f7a63] text-white px-1.5 py-0.5 rounded-md font-bold">
        {badge}
      </span>
    )}
  </div>
);

// Stat Card
const StatCard = ({ title, value, sub, type }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={`p-5 rounded-3xl shadow-sm border border-white ${
      type === "dark"
        ? "bg-gradient-to-br from-[#1f7a63] to-[#0b4d3e] text-white"
        : "bg-white text-gray-800"
    }`}
  >
    <div className="flex justify-between items-start">
      <p
        className={`text-[10px] font-bold ${
          type === "dark" ? "opacity-80" : "text-gray-400"
        }`}
      >
        {title}
      </p>
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center border ${
          type === "dark" ? "border-white/20" : "border-gray-100"
        }`}
      >
        <span className="text-[10px] rotate-45">↑</span>
      </div>
    </div>
    <p className="text-3xl font-bold my-1 tracking-tight">{value}</p>
    <p
      className={`text-[9px] ${type === "dark" ? "text-green-200" : "text-gray-400"}`}
    >
      {sub}
    </p>
  </motion.div>
);
