import Button from "../../components/Button";
import ContentsBox from "../../components/ContentsBox";
import TitleBox from "../../components/TitleBox";
import { motion } from "framer-motion";

export default function Part8_1() {
  return (
    <div className="inner my-[30px]">
      <ContentsBox type="green">
        <div className="my-[30px]">
          <TitleBox color="green">HOT</TitleBox>
          <div className="px-[10px] py-[15px]">
            <p className="text[20px] font-bold">
              <span className="font-extrabold text-shinhan-Blue-500">
                하루 30분
              </span>
              만 공부해도
              <br />
              충분히 합격할 수 있어요!
            </p>
          </div>
          <motion.img
            className="mx-auto"
            src="images/part8-image.svg"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
          />
          <motion.div
            className="mx-[17px] my-[10px] max-w-[277px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Button color="green">30분 공부하고 합격하러 가기</Button>
          </motion.div>
        </div>
      </ContentsBox>
    </div>
  );
}
