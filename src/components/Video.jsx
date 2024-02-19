import Styles from "../Video.module.css";
import React, { useRef } from "react";

const Video = ({ posterUrl, videoUrls, autoplay, loop }) => {
  const videoRef = useRef(null);

  return (
    <section>
      <div className={` ${Styles.vidContainer}`}>
        <div
          className={` ${Styles.bgVideo}`}
          data-poster-url={posterUrl}
          data-video-urls={videoUrls}
          data-autoplay={autoplay}
          data-loop={loop}
          data-wf-ignore="true"
        >
          <video
            ref={videoRef}
            id="video"
            autoPlay={autoplay}
            loop={loop}
            style={{ backgroundImage: `url(${posterUrl})` }}
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            {videoUrls.map((url, index) => (
              <source
                key={index}
                src={url}
                type={`video/${url.split(".").pop()}`}
              />
            ))}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
