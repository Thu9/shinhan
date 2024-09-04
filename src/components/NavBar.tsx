export default function NavBar() {
  return (
    <div className="absolute top-0 w-full bg-white flex items-center justify-between">
      <img
        className="h-[31px] pl-[10px]"
        src="src/assets/icons/logo.png"
        alt="신한 파트너스"
      />
      <img src="src/assets/icons/menu.png" alt="메뉴" />
    </div>
  );
}
