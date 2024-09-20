import ContentsBox from "../../components/ContentsBox";
import TitleBox from "../../components/TitleBox";
import { motion } from "framer-motion";

export default function Part3_2() {
  return (
    <div className="mt-[30px]">
      <ContentsBox>
        <div className="pt-[30px]">
          <TitleBox>추가 소득을 위한 쉬운 방법</TitleBox>
        </div>
        <p className="text-[20px] font-bold py-[15px] px-[10px]">
          <span className="text-shinhan-Blue-500 font-extrabold">이것</span>만
          따라하세요!
        </p>
        <motion.img
          className="mx-auto"
          src="images/part3-image2.svg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        />
        <div className="mx-auto my-[20px] w-[221px]">
          <motion.div
            className="py-[10px] pl-[10px] flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="w-[67px] h-[39px] bg-shinhan-Blue-500 rounded-[5px] text-[12px] text-white font-extrabold content-center px-[10px]">
              STEP1
            </div>
            <div className="ml-[10px] text-left">
              <p className="text-[12px] text-shinhan-Blue-350">
                상담을 신청하면
              </p>
              <p className="text-[14px] font-bold">전문 멘토가 배정돼요</p>
            </div>
          </motion.div>
          <motion.div
            className="py-[10px] pl-[10px] flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="w-[67px] h-[39px] bg-shinhan-Blue-500 rounded-[5px] text-[12px] text-white font-extrabold content-center px-[10px]">
              STEP2
            </div>
            <div className="ml-[10px] text-left">
              <p className="text-[12px] text-shinhan-Blue-350">
                운전면허 취득 수준의
              </p>
              <p className="text-[14px] font-bold">가벼운 시험을 보게 돼요</p>
            </div>
          </motion.div>
          <motion.div
            className="py-[10px] pl-[10px] flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="w-[67px] h-[39px] bg-shinhan-Blue-500 rounded-[5px] text-[12px] text-white font-extrabold content-center px-[10px]">
              STEP3
            </div>
            <div className="ml-[10px] text-left">
              <p className="text-[12px] text-shinhan-Blue-350">
                내 보험만 절감해도
              </p>
              <p className="text-[14px] font-bold">추가 소득을 얻게 돼요</p>
            </div>
          </motion.div>
        </div>
      </ContentsBox>
    </div>
  );
}
