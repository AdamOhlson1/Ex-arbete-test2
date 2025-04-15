import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Förhindrar sidomladdning

    const res = await fetch("http://localhost:5047/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      alert("Login success!");
      router.push("/welcome"); // 🚀 Flytta användaren vidare
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="bg-secondary d-flex justify-content-center align-items-center min-vh-100">
      <Head>
        <title>Login</title>
      </Head>

      <form
        className="d-flex flex-column align-items-center"
        onSubmit={handleLogin}
      >
        <div className="mb-3">
          <h3>Login</h3>
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-light">
          Login
        </button>
      </form>
    </div>
  );
}
