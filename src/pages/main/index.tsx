import Expenses from "../../templates/Expenses";
import Part1 from "../../templates/Part1";
import Part2 from "../../templates/Part2";
import Part3 from "../../templates/Part3";
import Part4 from "../../templates/Part4";
import Part5 from "../../templates/Part5";
import Part6 from "../../templates/Part6";

export default function Main() {
  return (
    <div className="pt-[51px] max-w-[760px]">
      <Expenses />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
    </div>
  );
}
