"use client";

import Slider from "react-slick";
import { CarouselItemProps } from "./type";
import { ImageWithFallback } from "../imageWithFallback/imageWithFallback";

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-6 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border border-white/30 backdrop-blur-sm bg-black/20 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:border-white/60"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-6 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border border-white/30 backdrop-blur-sm bg-black/20 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:border-white/60"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  );
}

export default function Carousel({ data }: { data: CarouselItemProps }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "30px", position: "absolute", width: "100%" }}>
        <ul style={{ display: "flex", justifyContent: "center", gap: "12px", margin: 0, padding: 0, listStyle: "none" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        className="dot-inner w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-white/40 cursor-pointer transition-all duration-300"
      />
    ),
  };

  return (
    <div className="px-[20px]">
      <style>{`
        .slick-dots li button:before { display: none; }
        .carousel-wrap .slick-dots li { margin: 0; width: auto; height: auto; }
        .carousel-wrap .slick-dots li.slick-active .dot-inner { background: white !important; transform: scale(1.3); }
        .carousel-wrap .slick-slider, 
        .carousel-wrap .slick-list, 
        .carousel-wrap .slick-track, 
        .carousel-wrap .slick-slide > div { 
          height: 100%; 
        }
      `}</style>

      <div
        className="carousel-wrap relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black aspect-[1/1] md:aspect-[16/7] max-h-[520px]"
      >
        <Slider {...settings}>
          {data?.image.map((slide, index: number) => {
            const imgUrl = slide.formats?.large?.url || slide.url;
            const imageUrl = imgUrl
              ? imgUrl.startsWith("http")
                ? imgUrl
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${imgUrl}`
              : "";

            return (
              <div key={index}>
                <div className="relative" style={{ height: "90vh" }}>
                  <ImageWithFallback
                    src={imageUrl}
                    alt={slide.name || "Paris Moment"}
                    priority={index === 0}
                    fill
                    className="object-cover transition-transform duration-[10s] hover:scale-110 ease-out"
                    unoptimized={imageUrl.includes("localhost")}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                    }}
                  />

                  <div className="absolute bottom-20 left-12 text-white">
                    <p
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.6)",
                        marginBottom: "8px",
                        fontWeight: 300,
                      }}
                    >
                      Paris Moments
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}


//  {slides.map((slide) => (
//             <div key={slide.id} className="relative h-full">
//               <div className="relative h-full w-full">
//                 <div
//                   className="w-full h-full bg-cover bg-center"
//                   style={{ backgroundImage: `url(${slide.image})` }}
//                 />

//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%)",
//                   }}
//                 />

//                 <div className="absolute top-4 left-4 md:top-12 md:left-12 text-white">
//                   <p className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase opacity-60 mb-2 font-light">
//                     {slide.sub}
//                   </p>
//                   <h2 className="text-xl md:text-5xl md:text-7xl font-bold leading-none tracking-tighter italic font-serif">
//                     {slide.label}
//                   </h2>