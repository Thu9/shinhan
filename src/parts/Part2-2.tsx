import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { part2Data } from "../datas/Data";

export default function Part2_2() {
  useEffect(() => {
    const swiperSlides =
      document.querySelectorAll<HTMLDivElement>(".swiper-slide");
    swiperSlides.forEach((elem) => {
      elem.style.width = "162px";
    });
  }, []);

  return (
    <div className="pl-[41px] pb-[30px]">
      <Swiper spaceBetween={10} slidesPerView={"auto"} centeredSlides={false}>
        {part2Data.map(({ job, earnings, emoji }, index) => (
          <SwiperSlide key={index}>
            <div className="bg-shinhan-Blue-500 w-[162px] h-[100px] rounded-[10px] px-[19.5px] py-[20px]">
              <div className="flex justify-between items-baseline">
                <div className="w-[55px]">
                  <img src={`src/assets/icons/job-${emoji}.svg`} />
                  <p className="text-white text-[14px] mt-[12px]">{job}</p>
                </div>
                <p className="text-white font-bold text-[18px]">
                  {earnings}만원
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
