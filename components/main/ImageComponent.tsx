import Image from "next/image";
import React from "react";

const ImageComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center md:h-screen h-[50vh]">
      <Image
        src="/image.jpeg"
        alt="Profile"
        width={350}
        height={350}
        priority // Ensures LCP image loads first
        placeholder="blur" // Improves UX while loading
        blurDataURL="/image-placeholder.jpeg" // Low-res version of the image
        className="border-4 border-[#9320FF] animate-border"
        style={{
          borderRadius: "51% 49% 48% 52% / 49% 49% 51% 51%",
          animation: "borderAnimation 5s linear infinite",
        }}
      />
      <style>
        {`
          @keyframes borderAnimation {
            0% { border-radius: 51% 49% 48% 52% / 49% 49% 51% 51%; }
            35% { border-radius: 60% 40% 57% 43% / 40% 54% 46% 60%; }
            65% { border-radius: 67% 33% 68% 32% / 27% 70% 30% 73%; }
            100% { border-radius: 51% 49% 48% 52% / 49% 49% 51% 51%; }
          }
        `}
      </style>
    </div>
  );
};

export default ImageComponent;
