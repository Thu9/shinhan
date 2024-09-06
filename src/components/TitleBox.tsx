export default function TitleBox({ title }: { title: string }) {
  return (
    <div
      className="w-[92px] h-[21px] text-shinhan-Blue-350 text-center content-center
            border border-shinhan-Blue-350 rounded-full mx-auto"
    >
      <p className="font-bold text-[12px]">{title}</p>
    </div>
  );
}
