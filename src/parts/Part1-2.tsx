export default function Part_1_2() {
  return (
    <div className="my-[10px]">
      <div className="py-[20px]">
        <p className="font-extrabold text-center">영상 제목</p>
        <p className="text-[12px] text-shinhan-Blue-350 text-center pt-[10px]">
          영상 설명 영상 설명 영상 설명 영상 설명 영상 설명 영상 설명
        </p>
      </div>

      <div className="mx-[10px] relative pb-[56.25%]">
        <div
          className="bg-shinhan-Blue-150 absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center
          "
        >
          <p className="text-[20px] font-semibold text-shinhan-Blue-350">
            유튜브 영상
          </p>
        </div>
        {/* <iframe
          src="https://www.youtube.com/embed/0Xt0wFQrTCI?si=Q7raV6FgX_U3X990"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          ></iframe> */}
      </div>
    </div>
  );
}
