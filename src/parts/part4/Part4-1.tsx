import TitleBox from "../../components/TitleBox";

export default function Part4_1() {
  return (
    <div className="pt-[30px] pb-[10px] px-[41px]">
      <TitleBox>신한 파트너스</TitleBox>
      <p className="text-[20px] font-bold py-[15px] px-[10px]">
        <span className="text-shinhan-Blue-500 font-extrabold">누구나 </span>할
        수 있나요?
      </p>
      <img className="mx-auto" src="src/assets/images/part4-image.png" />
      <p className="py-[20px] px-[10px] font-bold">
        직장인, 주부, 자영업자 등<br />
        누구든지 시작할 수 있어요!
      </p>
      <div className="my-[10px] mx-[0.5px] max-w-[310px]">
        <div>
          <div className="border border-[#f1f1f1] border-b-0 rounded-t-[10px] bg-[#f1f1f1] content-center">
            <p className="text-[10px] font-semibold p-[10px]">
              죄송하지만 아래에 해당하는 분은 지원이 불가해요.
            </p>
          </div>
          <div className="border border-[#f1f1f1] border-t-0 rounded-b-[10px] flex justify-center items-center p-[10px]">
            <img src="src/assets/icons/part4-icon.svg" alt="" />
            <div className="text-[10px] text-left ml-[10px]">
              <p>
                1. 신용점수 550점 미만
                <span className="bg-[#f1f1f1] ml-[2px] px-[3px] text-[9px] font-bold rounded-[3px]">
                  KCB 기준
                </span>
              </p>
              <p>2.개인회생, 파산 진행 중인 사람</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
