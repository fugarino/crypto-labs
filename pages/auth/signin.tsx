import { getProviders, signIn } from "next-auth/react";
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "../page";

interface ISignIn {
  providers: {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
  }[];
}

const SignIn: NextPageWithLayout<ISignIn> = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="p-3 bg-blue-500 rounded-lg text-white"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default SignIn;

SignIn.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
