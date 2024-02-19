import Styles from "../Part2.module.css";
import RotateLogo from "./RotateLogo";
import "../App.css";
import TextPart from "./TextPart";
export default function Part2() {
  return (
    <div
      className={`${Styles.bg} `}
      style={{ marginTop: "50px", paddignTop: "10px" }}
    >
      <div className={`${Styles.center} `}>
        <div className={` ${Styles.position}`}>
          <RotateLogo />
          <TextPart />
        </div>
      </div>
    </div>
  );
}
