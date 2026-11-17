import React from "react";
import { Composition, Still } from "remotion";
import { SudutGanjilA2 } from "./projects/educational/sudut-ganjil/a2/SudutGanjilA2";
import { SudutGanjilA2Thumbnail } from "./projects/educational/sudut-ganjil/a2/SudutGanjilA2Thumbnail";
import { A2_FPS, A2_TOTAL_FRAMES } from "./projects/educational/sudut-ganjil/a2/a2_scenes";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SudutGanjilA2"
        component={SudutGanjilA2}
        durationInFrames={A2_TOTAL_FRAMES}
        fps={A2_FPS}
        width={1920}
        height={1080}
      />
      <Still
        id="ThumbnailA2"
        component={SudutGanjilA2Thumbnail}
        width={1920}
        height={1080}
      />
    </>
  );
};
