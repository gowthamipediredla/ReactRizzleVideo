import React, { useState, useEffect } from "react";
import { videodata1 } from "../../../VideoData/jsondata";
import IFrame from "../IFrame/IFrame";
import Video from "../Video/Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleRight,
  faChevronCircleLeft,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import videocss from "./VideoPlayer.module.css";
const VideoPlayer = () => {
  const [videodata, setvideodata] = useState([]);
  const [loop, setloop] = useState(0);
  const [showname, setshowname] = useState(false);
  useEffect(() => {
    console.log(videodata1);
    setvideodata(videodata1);
  }, []);
  let i;
  console.log(videodata1);

  return (
    <div>
      {videodata.map((vd, index) => {
        console.log(vd, index, loop);
        return (
          <div key={Math.random()}>
            {loop === index &&
              (!showname ? (
                <>
                  {/* <IFrame
                    style={{
                      position: "absolute",
                      width: "100%",
                      left: "50%",
                      top: "50%",
                      objectFit: "cover",
                      height: "100%",
                      transform: "translate(-50%,-50%)",
                      zIndex: "-1",
                    }}
                    width="20000"
                    height="710"
                    source={vd.video.originalUrl}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  /> */}
                  <Video source={vd.video.originalUrl} />
                  {(loop !== 0 || loop === videodata.length) && (
                    <span
                      onClick={() => setloop(index - 1)}
                      className={`${videocss.btnClassTop}`}
                    >
                      <FontAwesomeIcon icon={faChevronCircleUp} />
                    </span>
                  )}

                  <span
                    onClick={() => setloop(index + 1)}
                    className={`${videocss.btnClass} ${videocss.btnClassRight}`}
                  >
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                  </span>

                  <span
                    onClick={() => setshowname(true)}
                    className={videocss.sidebtnRight}
                  >
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                  </span>
                </>
              ) : vd.channel && vd.channel.user.name ? (
                <h2>
                  {" "}
                  <span
                    onClick={() => setshowname(false)}
                    className={videocss.sidebtnLeft}
                  >
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                  </span>
                  <p className={videocss.name}> {vd.channel.user.name}</p>
                </h2>
              ) : (
                <h2>
                  {" "}
                  <span
                    onClick={() => setshowname(false)}
                    className={videocss.sidebtnLeft}
                  >
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                  </span>
                  <p className={videocss.name}> Unknown Name</p>
                </h2>
              ))}

            <br />
          </div>
        );
      })}
    </div>
  );
};
export default React.memo(VideoPlayer);
