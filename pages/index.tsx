import Link from "next/link";
import { useRouter } from "next/router";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import Search from "../components/utitity/search/Search";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      logo
      <Search />
      <p>Google offered in: </p>
      <Link href="/" locale={locale === "en" ? "fr" : "en"}>
        <a className="underline text-blue-600">Francais</a>
      </Link>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
