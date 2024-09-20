import TitleBox from "../../components/TitleBox";
import { motion } from "framer-motion";

export default function Part4_2() {
  return (
    <div className="inner mt-[20px] pt-[30px] pb-[30px] px-[30px]">
      <TitleBox>신한 파트너스</TitleBox>
      <p className="text-[20px] font-bold py-[15px] px-[10px]">
        <span className="text-shinhan-Blue-500 font-extrabold">업무 파트</span>
        는 두 가지가 있어요!
      </p>
      <motion.img
        className="mx-auto"
        src="images/part4-image2.png"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      />

      <div className="mt-[20px]">
        <div className="flex gap-[6px] justify-center">
          <motion.div
            className="relative w-[164px] h-[118px] bg-shinhan-Blue-500 rounded-[10px] text-white content-center pt-[20px]"
            initial={{ rotateY: 100 }}
            whileInView={{ rotateY: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="absolute -top-[25px] left-[50%] -translate-x-1/2 w-[52px] h-[52px] bg-white text-shinhan-Blue-500 rounded-full font-[900] border-4 border-shinhan-Blue-500 content-center">
              01
            </div>
            <p className="font-bold">
              신한 파트너스로
              <br />
              합류하기
            </p>
          </motion.div>
          <motion.div
            className="relative w-[164px] h-[118px] bg-shinhan-Blue-500 rounded-[10px] text-white content-center pt-[20px]"
            initial={{ rotateY: 260 }}
            whileInView={{ rotateY: 360 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
