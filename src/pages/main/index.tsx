import Expenses from "../../templates/Expenses";
import Part1 from "../../templates/Part1";
import Part2 from "../../templates/Part2";
import Part3 from "../../templates/Part3";

export default function Main() {
  return (
    <div className="pt-[51px] max-w-[760px]">
      <Expenses />
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
}
