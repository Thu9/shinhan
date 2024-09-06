import TitleBox from "../components/TItleBox";

export default function Part2_1() {
  const options = {
    spaceBetween: 50,
  };
  return (
    <div className="px-[41px]">
      <div className="mt-[30px]">
        <TitleBox title="신한 파트너스" />
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

      {/* <div className="flex gap-[10px]">
        <div className="bg-shinhan-Blue-500 w-[162px] h-[100px] rounded-[10px] px-[19.5px] py-[20px]">
          <div className="flex justify-between items-baseline">
            <div className="w-[55px]">
              <img src="src/assets/icons/job-1.svg" />
              <p className="text-white text-[14px] mt-[12px]">직장인</p>
            </div>
            <p className="text-white font-bold text-[18px]">120만원</p>
          </div>
        </div>
        <div className="bg-shinhan-Blue-500 w-[162px] h-[100px] rounded-[10px] px-[19.5px] py-[20px]">
          <div className="flex justify-between items-baseline">
            <div className="w-[55px]">
              <img src="src/assets/icons/job-2.svg" />
              <p className="text-white text-[14px] mt-[12px]">주부</p>
            </div>
            <p className="text-white font-bold text-[18px]">116만원</p>
          </div>
        </div>
        <div className="bg-shinhan-Blue-500 w-[162px] h-[100px] rounded-[10px] px-[19.5px] py-[20px]">
          <div className="flex justify-between items-baseline">
            <div className="w-[55px]">
              <img src="src/assets/icons/job-3.svg" />
              <p className="text-white text-[14px] mt-[12px]">자영업자</p>
            </div>
            <p className="text-white font-bold text-[18px]">120만원</p>
          </div>
        </div>
        <div className="bg-shinhan-Blue-500 w-[162px] h-[100px] rounded-[10px] px-[19.5px] py-[20px]">
          <div className="flex justify-between items-baseline">
            <div className="w-[55px]">
              <img src="src/assets/icons/job-1.svg" />
              <p className="text-white text-[14px] mt-[12px]">기타</p>
            </div>
            <p className="text-white font-bold text-[18px]">120만원</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
