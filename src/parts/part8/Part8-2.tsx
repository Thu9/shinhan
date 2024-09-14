import Button from "../../components/Button";
import TitleBox from "../../components/TitleBox";

export default function Part8_2() {
  return (
    <>
      <div className="max-w-[311px] py-[10px]">
        <div className="mt-[30px]">
          <TitleBox color="blue">목표를 향한 나의 첫 걸음</TitleBox>
        </div>
        <div className="px-[10px] py-[15px]">
          <p className="text-[20px] font-bold">
            <span className="font-extrabold text-shinhan-Blue-500">
              신한 파트너스
            </span>
            에<br /> 합류해 볼까요?
          </p>
        </div>
        <div className="mx-[17px] my-[10px]">
          <Button>바로 지원하기</Button>
        </div>
      </div>
      <img className="w-full" src="src/assets/images/part8-image2.svg" />
    </>
  );
}
