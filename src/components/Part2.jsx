import Styles from "../Part2.module.css";
import RotateLogo from "./RotateLogo";
import "../App.css";
import TextPart from "./TextPart";
import Video from "./Video";
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
        <Video
          style={{
            marginTop: "50px",
            paddingTop: "10px",
            width: "100%",
            marginBottom: "50px",
          }}
          posterUrl="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c311d44fc45f0908cb04e8_bgvideo-poster-00001.jpg"
          videoUrls={[
            "https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c311d44fc45f0908cb04e8_bgvideo-transcode.mp4",
            "https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c311d44fc45f0908cb04e8_bgvideo-transcode.webm",
          ]}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
}
