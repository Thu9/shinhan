import { ReactNode } from "react";

export default function ContentsBox({
  children,
  type = "basic",
}: {
  children: ReactNode;
  type?: "basic" | "green";
}) {
  return (
    <>
      {type !== "green" ? (
        <div className="bg-white border border-shinhan-Blue-150 rounded-[20px]">
          {children}
        </div>
      ) : (
        <div className="bg-shinhan-Green-300 border border-shinhan-Green-500 rounded-[20px]">
          {children}
        </div>
      )}
    </>
  );
}
