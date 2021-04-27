import React, { useRef } from "react";

import { InstagramMedia, instagramMediaParser } from "react-instagram-media";

function Insta() {
  return (
    <div>
      {/* <InstagramMedia
        uri="https://www.instagram.com/p/CM6VcFdrxka/"
        renderItem={({ display_url, video_url, type }) => {
          if (type === "video") {
            return (
              <video poster={display_url} controls>
                <source src={video_url} type="video/mp4" />
              </video>
            );
          }

          return <img src={display_url} />;
        }}
        renderMediaList={(children) => <div className="swiper">{children}</div>}
        renderError={() => <div>I have failed to parse it</div>}
        renderLoading={() => <div>Loading</div>}
      /> */}
    </div>
  );
}

export default Insta;
