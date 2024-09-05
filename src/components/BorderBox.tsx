import { ReactNode } from "react";

export default function BorderBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white border border-shinhan-Blue-150 rounded-[20px]">
      {children}
    </div>
  );
}
