export default function Expenses() {
  return (
    <div
      className="h-auto text-center bg-gradient-to-b from-gradient-1 to-gradient-2 
    rounded-b-[30px] py-[30px] px-[10px]"
    >
      <div className="h-[89px] flex flex-col justify-center">
        <p className="font-bold text-[20px]">한 달 1시간 투자해서</p>
        <p className="oneShinhan font-bold text-[28px] text-shinhan-Blue-500">
          128만원 + 교육비
        </p>
      </div>
      <img className="mx-auto" src="src/assets/images/title-image.png" />

      <div
        className="flex justify-between items-center m-[20px] px-[20px] py-[10px] border border-[white] 
      rounded-[15px] h-[85px] w-auto bg-white/60"
      >
        <div className="flex items-center">
          <div className="w-[56px] h-[56px] rounded-[28px] bg-shinhan-Blue-150 flex items-center justify-center">
            <img className="w-[34px]" src="src/assets/icons/user.png" />
          </div>
          <div className="text-left pl-[10px]">
            <p className="font-semibold text-[12px] text-shinhan-Blue-350">
              신한파트너스 6기
            </p>
            <p className="font-bold text-[14px]">이*우 님</p>
          </div>
        </div>
        <p className="flex items-center text-[19px] bg-[#CCFF00] h-[24px]">
          <span className="text-shinhan-Blue-500 font-extrabold text-[23px]">
            212
          </span>
          만원
        </p>
      </div>
      <div className="h-[32px] content-center">
        <p className="font-semibold text-[10px]">
          교육비 알아보기&nbsp;&nbsp;{">"}
        </p>
      </div>
    </div>
  );
}
