import { ReactNode } from "react";

import "./Container.css"

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="w-full max-w-7xl container px-2 py-2 sm:py-6 sm:px-6">{children}</div>;
}
