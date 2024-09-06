export default function NavBar() {
  return (
    <div className="absolute top-0 w-full bg-white flex items-center justify-between">
      <img
        className="pl-[10px]"
        src="src/assets/icons/logo.svg"
        alt="신한 파트너스"
      />
      <img src="src/assets/icons/manu.svg" alt="메뉴" />
    </div>
  );
}
