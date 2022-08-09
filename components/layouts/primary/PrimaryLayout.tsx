export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "items-center" | "items-start";
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = "items-center",
  ...divProps
}) => {
  return (
    <>
      <nav>navbar</nav>
      <title>NextJs Fullstack App Template</title>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <main className="px-5">{children}</main>
        <div className="m-auto" />
      </div>
      <footer>footer</footer>
    </>
  );
};

export default PrimaryLayout;
