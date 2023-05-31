import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      {children}
    </div>
  );
}
