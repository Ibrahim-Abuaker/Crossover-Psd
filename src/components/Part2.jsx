import Styles from "../Part2.module.css";
import RotateLogo from "./RotateLogo";
import "../App.css";
export default function Part2() {
  return (
    <>
      <div className={`${Styles.container}`} style={{ marginTop: "50px" }}>
        <RotateLogo className="container" />
      </div>
    </>
  );
}
