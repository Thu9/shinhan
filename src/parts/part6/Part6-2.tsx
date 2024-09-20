import TitleBox from "../../components/TitleBox";
import { part6_2Data } from "../../datas/Data";
import { motion } from "framer-motion";

export default function Part6_2() {
  return (
    <div className="inner mb-[40px]">
      <div className="mt-[40px]">
        <TitleBox>합류 후기</TitleBox>
      </div>
      <div className="px-[10px] py-[15px]">
        <p className="text-[20px] font-bold">
          <span className="text-shinhan-Blue-500 font-extrabold">
            신한 파트너스&nbsp;
          </span>
          합류 후기
        </p>
      </div>
      <motion.div
        className="max-w-[311px] bg-white rounded-[10px] py-[5px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        {part6_2Data.map(({ name, job, title, contents }, index) => (
          <div key={index} className="p-[10px]">
            <div className="flex items-center px-[10.5px] py-[5px]">
              <img src={`icons/part6-icon${index + 4}.svg`} alt="" />
              <div className="text-[10px] text-left">
                <p
                  className="part6-title text-[12px] font-extrabold"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></p>
                <p className="text-shinhan-Blue-350 text-[10px] font-semibold">
                  {name}
                  <span className="desc">{job}</span>
                </p>
              </div>
            </div>
            <div className="part6-contents p-[10px] bg-shinhan-Blue-100 max-w-[270px]">
              <p
                className="text-[10px] text-left"
                dangerouslySetInnerHTML={{ __html: contents }}
              ></p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
