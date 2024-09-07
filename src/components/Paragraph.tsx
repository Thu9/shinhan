import { ReactNode } from "react";

interface ParagraphProps {
  size?: "xs" | "s" | "m" | "l" | "xl";
  color?: "black" | "blue";
  weight?: "normal" | "bold" | "extraBold";
  children: ReactNode;
}

const sizeVariants = {
  xs: "text-[12px]",
  s: "text-[14px]",
  m: "text-[16px]",
  l: "text-[18px]",
  xl: "text-[20px]",
};

const colorVariants = {
  black: "text-shinhan-Black-500",
  blue: "text-shinhan-Blue-350",
};

const weightVariants = {
  normal: "font-normal",
  bold: "font-bold",
  extraBold: "font-extraBold",
};

export default function Paragraph({
  size = "m",
  color = "black",
  weight = "normal",
  children,
}: ParagraphProps) {
  return (
    <p
      className={`
            ${sizeVariants[size]} 
            ${colorVariants[color]} 
            ${weightVariants[weight]}
            `}
    >
      {children}
    </p>
  );
}
