import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // Förhindrar sidladdning

    const res = await fetch("http://localhost:5047/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      alert("Registration successful!");
    } else {
      const data = await res.json();
      alert("Registration failed: " + data.message);
    }
  };

  return (
    <div className="bg-secondary d-flex justify-content-center align-items-center min-vh-100">
      <Head>
        <title>Create account</title>
      </Head>

      <form className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <h3>Skapa konto</h3>
          <label id="exampleInputUsername" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            id="exampleInputUsername1"
            aria-describedby="Username"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label id="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
        <Link href="/login" className="mb-3">
          Login
        </Link>
        <button
          type="submit"
          className="btn btn-light"
          onClick={handleRegister}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
