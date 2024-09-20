import ContentsBox from "../../components/ContentsBox";
import { part5_1Data, part5_2Data } from "../../datas/Data";
import { motion } from "framer-motion";

export default function Part5_1() {
  return (
    <>
      <div className="max-w-[311px] mt-[30px] pb-[110px] relative">
        <ContentsBox>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="my-[10px]">
              <div className="p-[10px]">
                <p className="text-[14px] font-extrabold">
                  활동 중인
                  <span className="text-shinhan-Blue-500">
                    &nbsp;파트너스&nbsp;
                  </span>
                  현황
                </p>
                <p className="text-shinhan-Blue-350 text-[12px]">
                  이미 많은 분들이 함께하고 있어요!
                </p>
              </div>
              <div className="p-[10px] flex justify-center">
                {part5_1Data.map(({ job, count }, index) => (
                  <div key={index} className="flex">
                    <div>
                      <p className="text-shinhan-Blue-350 text-[12px]">{job}</p>
                      <p className="font-bold">
                        <span className="mr-[2px]">{count}</span>명
                      </p>
                    </div>
                    <div
                      className={`desc-l self-center ${
                        index === part5_1Data.length - 1 && "hidden"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-[#f1f1f1]"></div>

            <div className="my-[10px]">
              <div className="p-[10px]">
                <p className="text-[14px] font-extrabold">
                  활동 중인
                  <span className="text-shinhan-Blue-500">
                    &nbsp;매니저&nbsp;
                  </span>
                  현황
                </p>
                <p className="text-shinhan-Blue-350 text-[12px]">
                  이미 많은 분들이 함께하고 있어요!
                </p>
              </div>
              <div className="p-[10px] flex justify-center">
                {part5_2Data.map(({ job, count }, index) => (
                  <div key={index} className="flex">
                    <div>
                      <p className="text-shinhan-Blue-350 text-[12px]">{job}</p>
                      <p className="font-bold">
                        <span className="mr-[2px]">{count}</span>명
                      </p>
                    </div>
                    <div
                      className={`desc-l self-center ${
                        index === part5_1Data.length - 1 && "hidden"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </ContentsBox>
        <motion.img
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          src="images/part5-image.svg"
          initial={{ opacity: 0, bottom: -100 }}
          whileInView={{ opacity: 1, bottom: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        />
      </div>
    </>
  );
}
