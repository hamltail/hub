import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="mx-auto w-full max-w-[1120px]">{children}</div>;
}
