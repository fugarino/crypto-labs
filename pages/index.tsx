import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <section className="w-full h-100 bg-white rounded-2xl shadow-md"></section>
      <div className="w-full h-56 mt-10 space-x-10 flex justify-between">
        <section className="bg-white w-full h-64 rounded-2xl shadow-md"></section>
        <section className="bg-white w-full h-64 rounded-2xl shadow-md"></section>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
