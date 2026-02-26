// import React from "react";

// const Login = () => {
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left"></div>
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <fieldset className="fieldset">
//               <label className="label">Email</label>
//               <input type="email" className="input" placeholder="Email" />
//               <label className="label">Password</label>
//               <input type="password" className="input" placeholder="Password" />
//               <div>
//                 <a className="link link-hover">Forgot password?</a>
//               </div>
//               <button className="btn btn-neutral mt-4">Login</button>
//             </fieldset>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://task-api-eight-flax.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();

      // token save
      localStorage.setItem("token", data.token);

      // redirect
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="btn btn-neutral mt-4"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
