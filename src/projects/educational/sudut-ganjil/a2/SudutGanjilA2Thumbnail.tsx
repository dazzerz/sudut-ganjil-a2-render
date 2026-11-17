import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

export const SudutGanjilA2Thumbnail: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#06080D",
        overflow: "hidden",
        fontFamily: "'Montserrat', 'Inter', 'Arial Black', sans-serif",
      }}
    >
      <Img
        src={staticFile("images/sudut-ganjil/a2/thumb_bg.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(4,6,11,0.96) 0%, rgba(4,6,11,0.88) 42%, rgba(4,6,11,0.35) 68%, rgba(4,6,11,0.1) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 86,
          left: 690,
          transform: "rotate(-6deg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: 38,
            fontWeight: 800,
            fontStyle: "italic",
            textShadow: "0 4px 14px rgba(0,0,0,0.95)",
            letterSpacing: "0.01em",
          }}
        >
          2 tahun lembur...
        </span>
        <svg width="95" height="68" viewBox="0 0 95 68" fill="none" style={{ marginTop: 2 }}>
          <path
            d="M12 6 C35 12, 62 32, 78 58"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M60 54 L79 60 L82 40"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          left: 66,
          top: 230,
          transform: "rotate(-4deg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            WebkitTextStroke: "10px #000000",
            paintOrder: "stroke fill",
            textShadow: "6px 8px 0px #000000",
          }}
        >
          KERJA 12 JAM
        </div>

        <div
          style={{
            fontSize: 138,
            fontWeight: 900,
            color: "#FFE600",
            lineHeight: 0.94,
            letterSpacing: "-0.03em",
            WebkitTextStroke: "14px #000000",
            paintOrder: "stroke fill",
            textShadow: "8px 10px 0px #000000",
          }}
        >
          TETAP PHK?!
        </div>

        <div
          style={{
            marginTop: 14,
            backgroundColor: "#FF2222",
            padding: "14px 28px",
            border: "5px solid #FFFFFF",
            borderRadius: 12,
            boxShadow: "8px 10px 0px #000000",
            transform: "rotate(1.5deg)",
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "0.02em",
              WebkitTextStroke: "4px #000000",
              paintOrder: "stroke fill",
            }}
          >
            LOYALITAS = SIA-SIA?
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
