import { ReactNode } from "react";

interface ButtonProps {
  color?: "black" | "green";
  children: ReactNode;
}

const colorVariants = {
  black: "bg-shinhan-Black-500 text-shinhan-Blue-100",
  green: "bg-shinhan-Green-500 text-shinhan-Black-500",
};

export default function Button({ color = "black", children }: ButtonProps) {
  {
  }
  return (
    <button
      className={`${colorVariants[color]}
    w-full h-[52px] p-[10px] rounded-[10px] font-bold`}
    >
      {children}
    </button>
  );
}
