import Head from "next/head";

export default function welcome() {
  return (
    <div className="bg-secondary d-flex justify-content-center align-items-center min-vh-100">
      <Head>
        <title>Welcome</title>
      </Head>

      <h3>Welcome world</h3>
    </div>
  );
}
