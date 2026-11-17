import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { A2HUD } from "./A2HUD";
import { A2OverlayHUD } from "./A2OverlayHUD";
import { A2ShotLayer } from "./A2ShotLayer";
import { A2Subtitles } from "./A2Subtitles";
import { A2_SEGMENTS, A2_SHOTS, A2_TOTAL_FRAMES } from "./a2_scenes";

// Chapter transition frames (first frame of Babak 2..8) for subtle whoosh sting
const CHAPTER_STARTS = [2, 3, 4, 5, 6, 7, 8]
  .map((b) => A2_SEGMENTS.find((s) => s.babak === b)?.start_frame)
  .filter((f): f is number => typeof f === "number" && f > 30);

export const SudutGanjilA2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0C", overflow: "hidden" }}>
      {A2_SHOTS.map((shot) => (
        <A2ShotLayer key={shot.index} shot={shot} />
      ))}

      <A2HUD />
      <A2OverlayHUD />
      <A2Subtitles />

      {A2_SEGMENTS.map((seg) => (
        <Sequence key={seg.id} from={seg.start_frame} durationInFrames={seg.duration_frames}>
          <Audio src={staticFile(seg.audio_file)} volume={1.0} />
        </Sequence>
      ))}

      {CHAPTER_STARTS.map((sf, i) => (
        <Sequence key={`whoosh-${i}`} from={Math.max(0, sf - 14)} durationInFrames={36}>
          <Audio src={staticFile("audio/sfx_whoosh.mp3")} volume={0.45} />
        </Sequence>
      ))}

      <Audio
        src={staticFile("audio/sudut-ganjil/bgm_chill.mp3")}
        loop
        volume={(f) => {
          const edge = f < 45 || f > A2_TOTAL_FRAMES - 90;
          const fadeOut = Math.min(1, Math.max(0, (A2_TOTAL_FRAMES - f) / 60));
          return (edge ? 0.16 : 0.095) * fadeOut;
        }}
      />
    </AbsoluteFill>
  );
};
