import Header from "components/Header/Header";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: TProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Wrapper;
