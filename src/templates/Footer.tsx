export default function Footer() {
  return (
    <div className="h-[81px] w-full bg-shinhan-Blue-500 px-[10px] py-[20px]">
      <div className="text-white flex justify-between items-center">
        <div className="flex">
          <div className="flex items-center p-[5px]">
            <img
              className="w-[18px] h-[20px]"
              src="icons/logo-footer.svg"
              alt=""
            />
            <p className="text-[8px]">신한라이프</p>
          </div>
          <div className="text-[6px] p-[5px] text-left">
            <p>주소</p>
            <p>사업자등록번호 000-00-00000</p>
            <p>문의: leete416@naver.com</p>
          </div>
        </div>
        <div className="p-[10px] mx-[10px]">
          <p className="text-[6px]">@shinhanLife All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
