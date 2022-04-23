import Head from "next/head";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Nextjs with redux (TS)</title>
        <meta
          name="description"
          content="Created by https://github.com/alimortazavi-pr"
        />
      </Head>

      {children}
    </>
  );
}
