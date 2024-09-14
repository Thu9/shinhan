import Button from "../../components/Button";
import ContentsBox from "../../components/ContentsBox";
import TitleBox from "../../components/TitleBox";

export default function Part8_1() {
  return (
    <div className="max-w-[311px] my-[30px]">
      <ContentsBox type="green">
        <div className="my-[30px]">
          <TitleBox color="green">HOT</TitleBox>
          <div className="px-[10px] py-[15px]">
            <p className="text[20px] font-bold">
              <span className="font-extrabold text-shinhan-Blue-500">
                하루 30분
              </span>
              만 공부해도
              <br />
              충분히 합격할 수 있어요!
            </p>
          </div>
          <img className="mx-auto" src="src/assets/images/part8-image.svg" />
          <div className="mx-[17px] my-[10px]">
            <Button color="green">30분 공부하고 합격하러 가기</Button>
          </div>
        </div>
      </ContentsBox>
    </div>
  );
}
