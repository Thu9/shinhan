import { ReactNode } from "react";

export default function TitleBox({
  type,
  children,
}: {
  type?: "basic" | "advise";
  children: ReactNode;
}) {
  return (
    <>
      {type !== "advise" ? (
        <div
          className="px-[13px] w-fit h-[21px] text-center content-center rounded-full mx-auto
              text-shinhan-Blue-350 border border-shinhan-Blue-350"
        >
          <p className="font-bold text-[12px]">{children}</p>
        </div>
      ) : (
        <div
          className="px-[13px] w-fit h-[21px] text-center content-center rounded-full mx-auto 
        text-black bg-shinhan-Green-500"
        >
          <p className="font-bold text-[12px]">{children}</p>
        </div>
      )}
    </>
  );
}
