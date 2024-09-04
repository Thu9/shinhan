export default function Part_1_1() {
  return (
    <>
      <div
        className="my-[30px] mx-[30px] pt-[30px] pb-[20px] px-[10px] bg-white 
      border border-shinhan-Blue-150 rounded-[20px]"
      >
        <div
          className="w-[92px] h-[21px] text-shinhan-Blue-350 text-center content-center
        border border-shinhan-Blue-350 rounded-full mx-auto"
        >
          <p className="font-bold text-[12px]">신한 파트너스</p>
        </div>
        <p className="text-[20px] text-center font-bold py-[15px]">
          정말 한 달에
          <br />
          <span className="text-shinhan-Blue-500 font-extrabold">1시간</span>
          이면 되나요?
        </p>
        <img className="mx-auto" src="src/assets/images/text-1-image.png" />
        <div className="py-[20px]">
          <p className="text-center font-bold">네, 물론이에요!</p>
          <p className="text-center text-[12px] text-shinhan-Blue-350 mt-[12px]">
            내 보험 점검부터 계약을 체결하는 데
            <br />
            <span className="font-bold text-shinhan-Blue-500">
              평균적으로 1시간
            </span>
            이 걸려요
          </p>
        </div>
      </div>
    </>
  );
}
