import TitleBox from "../../components/TitleBox";

export default function Part2_1() {
  return (
    <div className="px-[41px]">
      <div className="mt-[30px]">
        <TitleBox>신한 파트너스</TitleBox>
      </div>
      <div className="h-[34px] my-[15px]">
        <p className="text-[20px] font-bold">
          <span className="text-shinhan-Blue-500 font-extrabold">평균소득</span>
          이 얼마인가요?
        </p>
      </div>
      <img src="src/assets/images/part-2-image.svg" />
      <div className="py-[20px] px-[10px]">
        <p className="font-bold">최소 128만원 ~ 411만원</p>
        <p className="text-shinhan-Blue-350 text-[12px]">* 교육비 별도</p>
      </div>
    </div>
  );
}
