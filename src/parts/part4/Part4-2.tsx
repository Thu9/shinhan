import TitleBox from "../../components/TitleBox";

export default function Part4_2() {
  return (
    <div className="mt-[20px] pt-[30px] pb-[30px] px-[30px]">
      <TitleBox>신한 파트너스</TitleBox>
      <p className="text-[20px] font-bold py-[15px] px-[10px]">
        <span className="text-shinhan-Blue-500 font-extrabold">업무 파트</span>
        는 두 가지가 있어요!
      </p>
      <img className="mx-auto" src="src/assets/images/part4-image2.png" />

      <div className="mt-[20px]">
        <div className="flex gap-[6px] justify-center">
          <div className="relative w-[164px] h-[118px] bg-shinhan-Blue-500 rounded-[10px] text-white content-center pt-[20px]">
            <div className="absolute -top-[25px] left-[50%] -translate-x-1/2 w-[52px] h-[52px] bg-white text-shinhan-Blue-500 rounded-full font-[900] border-4 border-shinhan-Blue-500 content-center">
              01
            </div>
            <p className="font-bold">
              신한 파트너스로
              <br />
              합류하기
            </p>
          </div>
          <div className="relative w-[164px] h-[118px] bg-shinhan-Blue-500 rounded-[10px] text-white content-center pt-[20px]">
            <div className="absolute -top-[25px] left-[50%] -translate-x-1/2 w-[52px] h-[52px] bg-white text-shinhan-Blue-500 rounded-full font-[900] border-4 border-shinhan-Blue-500 content-center">
              02
            </div>
            <p className="font-bold">
              채용 및 인사관리를
              <br />
              통한 매니저로
              <br />
              합류하기
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
