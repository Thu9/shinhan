import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ContentsBox from "../../components/ContentsBox";
import { part1_3Data } from "../../datas/Data";
import { formatWon } from "../../pipe";
import { motion } from "framer-motion";

export default function Part1_3() {
  useEffect(() => {
    const swiperSlides = document.querySelectorAll<HTMLDivElement>(
      ".part1-3 .swiper-slide"
    );
    swiperSlides.forEach((elem) => {
      elem.style.width = "260px";
    });
  }, []);

  return (
    <motion.div
      className="part1-3 py-[10px] mb-[10px] pl-[20px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      <Swiper spaceBetween={20} slidesPerView={"auto"} centeredSlides={false}>
        {part1_3Data.map(
          ({ name, range, earnings, contents, emoji }, index) => (
            <SwiperSlide key={index}>
              <ContentsBox>
                <div className="py-[20px] px-[15px]">
                  <div className="flex items-center">
                    <div className="">
                      <img
                        className="m-auto"
                        src={`icons/emoji-${emoji}.svg`}
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
              </ContentsBox>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </motion.div>
  );
}
