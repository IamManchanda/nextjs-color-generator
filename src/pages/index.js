import Head from "next/head";

function PageIndex() {
  return (
    <div>
      <Head>
        <title>Next.js Color Generator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Next.js Color Generator App</h1>
      </main>
    </div>
  );
}

export default PageIndex;
