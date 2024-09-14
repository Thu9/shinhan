import TitleBox from "../../components/TitleBox";
import { part6_2Data } from "../../datas/Data";

export default function Part6_2() {
  return (
    <div className="inner mb-[40px]">
      <div className="mt-[40px]">
        <TitleBox>합류 후기</TitleBox>
      </div>
      <div className="px-[10px] py-[15px]">
        <p className="text-[20px] font-bold">
          <span className="text-shinhan-Blue-500 font-extrabold">
            신한 파트너스&nbsp;
          </span>
          합류 후기
        </p>
      </div>
      <div className="max-w-[311px] bg-white rounded-[10px] py-[5px]">
        {part6_2Data.map(({ name, job, title, contents }, index) => (
          <div key={index} className="p-[10px]">
            <div className="flex items-center px-[10.5px] py-[5px]">
              <img src="src/assets/icons/part6-icon1.svg" alt="" />
              <div className="text-[10px] text-left">
                <p
                  className="part6-title text-[12px] font-extrabold"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></p>
                <p className="text-shinhan-Blue-350 text-[10px] font-semibold">
                  {name}
                  <span className="desc">{job}</span>
                </p>
              </div>
            </div>
            <div className="part6-contents p-[10px] bg-shinhan-Blue-100 max-w-[270px]">
              <p
                className="text-[10px] text-left"
                dangerouslySetInnerHTML={{ __html: contents }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
