import Button from "../../components/Button";
import ContentsBox from "../../components/ContentsBox";
import Part3_image from "../../components/Part3-image1";
import TitleBox from "../../components/TitleBox";

export default function Part3_1() {
  return (
    <ContentsBox>
      <div className="pt-[30px] pb-[20px]">
        <TitleBox color="green">HOT</TitleBox>
        <p className="font-bold py-[15px] px-[10px]">
          가장 많이 절감하신 분은
          <br />
          <span className="text-shinhan-Blue-500 font-extrabold">
            보험료 43%
          </span>
          를 아꼈어요
        </p>
        <div className="py-[20px] px-[10px]">
          <Part3_image />
        </div>

        <div className="px-[10px] py-[20px]">
          <p className="font-bold">보험료 절약과 동시에 소득도 챙겼어요.</p>
          <p className="text-shinhan-Blue-350 text-[12px]">
            나의 예상 소득을 확인할 수 있어요!
          </p>
        </div>
        {/* <Paragraph weight="bold">
          보험료 절약과 동시에 소득도 챙겼어요.
        </Paragraph>
        <Paragraph color="blue" size="xs">
          나의 예상 소득을 확인할 수 있어요!
        </Paragraph> */}
        <div className="max-w-[277px] my-[10px] mx-[17px]">
          <Button>예상 소득 계산해보기</Button>
        </div>
      </div>
    </ContentsBox>
  );
}
