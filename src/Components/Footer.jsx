import React, { useEffect, useState, useRef } from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import logogrid from "../assets/unacademy.png"

export default function Footer() {
  const lottiee = React.useRef(null);

  React.useEffect(() => {
    lottiee.current.addEventListener("load", function (e) {
      create({
        mode: "scroll",
        player: "#firstLottie",
        actions: [
          {
            visibility: [0, 0.2],
            type: "stop",
            frames: [0],
          },
          {
            visibility: [0.2, 0.45],
            type: "seek",
            frames: [0, 38],
          },
          {
            visibility: [0.45, 1.0],
            type: "loop",
            frames: [38, 76],
          },
        ],
      });
    });
  }, [lottiee]);

  return (
    <div>
      <lottie-player
        ref={lottiee} // 2. set the reference for the player
        id="firstLottie"
        mode="scroll"
        src={logogrid}
        // style={{  height: "400px" }}
      ></lottie-player>
    </div>
  );
}
