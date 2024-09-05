import BorderBox from "../components/BorderBox";
import { part1_3Data } from "../datas/Data";
import { formatWon } from "../Pipe";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Part_1_3() {
  var sliderSettings = {
    arrows: false,
    infinite: true,
    centerMode: true,
    swipeToSlide: true,
    slidesToShow: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    speed: 400,
    pauseOnHover: false,
    cssEase: "linear",
  };
  //
  return (
    <div className="m-[10px]">
      <Slider {...sliderSettings}>
        {part1_3Data.map(
          ({ name, range, earnings, contents, emoji }, index) => (
            <div key={index} className="pr-[10px]">
              <BorderBox>
                <div className="my-[20px] mx-[15px]">
                  <div className="flex items-center">
                    <div className="w-[48px] h-[42px] flex">
                      <img
                        className="m-auto"
                        src={`src/assets/icons/emoji-${emoji}.png`}
                      ></img>
                    </div>

                    <div className="ml-[5px]">
                      <p
                        className="font-semibold text-[10px] text-shinhan-Blue-350 bg-shinhan-Blue-150
                px-[4px] w-fit h-[14px]"
                      >
                        {range}
                        <span className="desc">{name}</span>
                      </p>

                      <p className="font-extrabold text-[12px] mt-[2px] text-shinhan-Blue-500">
                        추가 소득
                        <span className="font-[900] tracking-tight">
                          &nbsp;+{formatWon(earnings)}원
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="text-[12px] p-[10px] h-[149px] mt-[10px] text-left ellipsis">
                    {contents}
                  </p>
                </div>
              </BorderBox>
            </div>
          )
        )}
      </Slider>
    </div>
  );
}
