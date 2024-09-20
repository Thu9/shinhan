import { partExpenses } from "../datas/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { useEffect } from "react";
import { Autoplay } from "swiper/modules";
export default function Expenses() {
  useEffect(() => {
    const swiperSlides = document.querySelectorAll<HTMLDivElement>(
      ".part-expenses .swiper-slide"
    );
    swiperSlides.forEach((elem) => {
      // elem.style.height = "100px";
    });
  }, []);

  return (
    <div
      className="inner h-auto text-center bg-gradient-to-b from-gradient-1 to-gradient-2 
    rounded-b-[30px] py-[30px] px-[10px]"
    >
      <div className="h-[89px] flex flex-col justify-center">
        <p className="font-bold text-[20px]">한 달 1시간 투자해서</p>
        <p className="oneShinhan font-bold text-[28px] text-shinhan-Blue-500">
          128만원 + 교육비
        </p>
      </div>
      <img className="mx-auto" src="images/title-image.svg" />
      <div className="m-[20px]">
        <Swiper
          className="part-expenses h-[85px]"
          direction="vertical"
          speed={800}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
        >
          {partExpenses.map(({ name, rank, earnings }, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex justify-between items-center px-[20px] py-[10px] border border-[white] 
            rounded-[15px] h-[85px] w-auto bg-white/60"
              >
                <div className="flex items-center">
                  <div className="w-[56px] h-[56px] rounded-[28px] bg-shinhan-Blue-150 flex items-center justify-center">
                    <img className="w-[34px]" src="icons/user.png" />
                  </div>
                  <div className="text-left pl-[10px]">
                    <p className="font-semibold text-[12px] text-shinhan-Blue-350">
                      {rank}
                    </p>
                    <p className="font-bold text-[14px]">{name} 님</p>
                  </div>
                </div>
                <p className="flex items-center text-[19px] bg-[#CCFF00] h-[24px]">
                  <span className="text-shinhan-Blue-500 font-extrabold text-[23px]">
                    {earnings}
                  </span>
                  만원
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="h-[32px] content-center">
        <p className="font-semibold text-[10px] underline underline-offset-1">
          교육비 알아보기&nbsp;&nbsp;{">"}
        </p>
      </div>
    </div>
  );
}
