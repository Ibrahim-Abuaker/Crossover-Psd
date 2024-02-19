import Styles from "../RotateLogo.module.css";

export default function RotateLogo() {
  console.log("hi from part 2");
  return (
    <div className={`${Styles.rtWrapper}`}>
      <img
        className={`${Styles.rtImg}`}
        src="/rotationText.png"
        alt="rotaionText"
      />
      <div className={`${Styles.rtIconWrapper}`}>
        <img className={`${Styles.rtIcon}`} src="/hand.svg" alt="hand" />
      </div>
    </div>
  );
}
