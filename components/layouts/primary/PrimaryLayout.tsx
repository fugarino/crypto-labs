import Head from "next/head";
import Nav from "../../navigation/nav/Nav";

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJs App</title>
      </Head>
      <Nav />
      <main className="overflow-y-scroll mt-14 ml-14 w-[calc(100vw-3.5rem)] h-[calc(100vh-3.25rem)] p-10 pb-20 bg-darkGray-200">
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;
