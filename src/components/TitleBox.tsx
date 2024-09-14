import { ReactNode } from "react";

interface TitleBoxProps {
  color?: "basic" | "green" | "blue";
  children: ReactNode;
}

const colorVariants = {
  basic: "text-shinhan-Blue-350 border-shinhan-Blue-350",
  green: "text-black bg-shinhan-Green-500 border-shinhan-Green-500",
  blue: "text-shinhan-Blue-500 border-shinhan-Blue-500",
};

export default function TitleBox({ color = "basic", children }: TitleBoxProps) {
  return (
    <>
      <div
        className={`${colorVariants[color]}
          px-[13px] w-fit h-[21px] text-center content-center rounded-full mx-auto
          border
          `}
      >
        <p className="font-bold text-[12px]">{children}</p>
      </div>
    </>
  );
}
