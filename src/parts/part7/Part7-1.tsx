import TitleBox from "../../components/TitleBox";
import { motion } from "framer-motion";

export default function Part7_1() {
  return (
    <div className="inner mt-[30px] mb-[10px]">
      <TitleBox>시험.교육 합격시</TitleBox>
      <p className="px-[10px] py-[15px] text-[20px] font-bold">
        <span className="text-shinhan-Blue-500 font-extrabold">교육비</span>{" "}
        안내
      </p>
      <motion.img
        className="mx-auto my-[10px]"
        src="images/part7-image.svg"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      />
      <div className="px-[10px] py-[20px] max-w-[304px]">
        <div className="flex relative gap-[10px]">
          <motion.div
            className="bg-shinhan-Blue-500 rounded-[10px] text-white w-[137px] h-[71px] content-center p-[5px]"
            initial={{ rotateY: -100 }}
            whileInView={{ rotateY: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p className="text-[12px] font-semibold">교육비 + 활동 지원비</p>
            <p className="font-bold">450만원</p>
          </motion.div>
          <motion.div
            className="bg-shinhan-Blue-500 rounded-[10px] text-white w-[137px] h-[71px] content-center p-[5px]"
            initial={{ rotateY: 260 }}
            whileInView={{ rotateY: 360 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p className="text-[12px] font-semibold">Only 교육비</p>
            <p className="font-bold">150만원</p>
          </motion.div>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white w-[31px] h-[31px] rounded-full content-center">
            <p className="text-[12px] font-bold">택 1</p>
          </div>
        </div>
        <motion.p
          className="text-shinhan-Blue-350 text-[12px] font-semibold my-[20px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          * 자세한 내용은 사전 미팅후 QnA로 진행됩니다.
        </motion.p>
      </div>
    </div>
  );
}
