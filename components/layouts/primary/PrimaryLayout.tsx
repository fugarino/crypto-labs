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
      <main className="page">{children}</main>
    </>
  );
};

export default PrimaryLayout;
