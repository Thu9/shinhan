import TitleBox from "../../components/TitleBox";

export default function Part7_1() {
  return (
    <div className="inner mt-[30px] mb-[10px]">
      <TitleBox>시험.교육 합격시</TitleBox>
      <p className="px-[10px] py-[15px]">교육비 안내</p>
      <img
        className="mx-auto my-[10px]"
        src="src/assets/images/part7-image.svg"
      />
      <div className="px-[10px] py-[20px] max-w-[304px]">
        <div className="flex relative gap-[10px]">
          <div className="bg-shinhan-Blue-500 rounded-[10px] text-white w-[137px] h-[71px] content-center p-[5px]">
            <p className="text-[12px] font-semibold">교육비 + 활동 지원비</p>
            <p className="font-bold">450만원</p>
          </div>
          <div className="bg-shinhan-Blue-500 rounded-[10px] text-white w-[137px] h-[71px] content-center p-[5px]">
            <p className="text-[12px] font-semibold">Only 교육비</p>
            <p className="font-bold">150만원</p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white w-[31px] h-[31px] rounded-full content-center">
            <p className="text-[12px] font-bold">택 1</p>
          </div>
        </div>
        <p className="text-shinhan-Blue-350 text-[12px] font-semibold my-[20px]">
          * 자세한 내용은 사전 미팅후 QnA로 진행됩니다.
        </p>
      </div>
    </div>
  );
}
