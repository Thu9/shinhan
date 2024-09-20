import { motion } from "framer-motion";
import TitleBox from "../../components/TitleBox";

export default function Part2_1() {
  const commonMotionProps = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: 0.1, duration: 0.3 },
  };

  return (
    <div className="inner px-[41px]">
      <div className="mt-[30px]">
        <TitleBox>신한 파트너스</TitleBox>
      </div>
      <motion.div {...commonMotionProps} className="h-[34px] my-[15px]">
        <p className="text-[20px] font-bold">
          <span className="text-shinhan-Blue-500 font-extrabold">평균소득</span>
          이 얼마인가요?
        </p>
      </motion.div>

      <motion.div {...commonMotionProps}>
        <img src="images/part-2-image.svg" />
      </motion.div>

      <motion.div {...commonMotionProps} className="py-[20px] px-[10px]">
        <p className="font-bold">최소 128만원 ~ 411만원</p>
        <p className="text-shinhan-Blue-350 text-[12px]">* 교육비 별도</p>
      </motion.div>
    </div>
  );
}
