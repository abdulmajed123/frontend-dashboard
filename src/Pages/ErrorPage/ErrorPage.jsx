import { useNavigate } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f5f4] text-gray-800 px-4">
      <div className="bg-white rounded-3xl p-10 shadow-xl text-center max-w-md">
        <div className="text-6xl text-[#ea580c] mb-4 flex justify-center">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-gray-500 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#1f7a63] text-white px-6 py-2 rounded-xl text-sm font-medium shadow hover:bg-[#16674f] transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
