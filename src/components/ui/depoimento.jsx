import React, { useRef, useEffect } from "react";
import "../../styles/App.css"
import depo1 from "../../assets/depo1.mp4"
import depo2 from "../../assets/depo2.mp4"

const images = [
  { video: depo1, name: "Gonexum"},
  { video: depo2, name: "AbeceGesso"},
];

export default function imagesCarousel() {
  const containerRef = useRef(null);
  const position = useRef(0);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   let requestId;

  //   const speed = 0.5; // positivo = anda para a esquerda
  //   const totalWidth = container.scrollWidth / 2; // metade pq duplicamos os itens

  //   // Começar deslocado no "fim" (último elemento)
  //   position.current = -totalWidth;

  //   const animate = () => {
  //     if (container) {
  //       position.current += speed;
  //       // Se passou metade da largura, reseta para 0
  //       if (position.current <= -container.scrollWidth / 2) {
  //         position.current = -totalWidth;
  //       }
  //       container.style.transform = `translateX(${position.current}px)`;
  //     }
  //     requestId = requestAnimationFrame(animate);
  //   };

  //   animate();

  //   return () => cancelAnimationFrame(requestId);
  // }, []);
  
  // const containerRef2 = useRef(null);
  // const position2 = useRef(0);

  // useEffect(() => {
  //   const container = containerRef2.current;
  //   let requestId;

  //   const speed = 0.3; // pixels por frame

  //   const animate = () => {
  //     if (container) {
  //       position2.current -= speed;
  //       // Se passou metade da largura, reseta para 0
  //       if (position2.current <= -container.scrollWidth / 2) {
  //         position2.current = 0;
  //       }
  //       container.style.transform = `translateX(${position2.current}px)`;
  //     }
  //     requestId = requestAnimationFrame(animate);
  //   };

  //   animate();

  //   return () => cancelAnimationFrame(requestId);
  // }, []);

  return (
    <>
      <section className=" flex flex-col justify-center bg-gradient-to-br from-white to-gray-200 py-10 mb-10 overflow-hidden">
        <h2 className="flex justify-center text-3xl md:text-4xl font-bold text-atris-black text-center pl-3 pr-3 mb-16">
          O que nossos clientes têm a dizer
        </h2>

        <div className="flex w-auto gap-10 md:gap-20 mb-10 justify-center mx-10" ref={containerRef}>
          {/* Duplicamos os itens para o loop infinito */}
          {[...images].map((image, index) => (
            <div className="flex flex-col bg-yellow-300 pb-4 rounded-2xl pt-1 px-1 shadow-2xl">
              <video className="w-50 md:w-70 rounded-2xl" controls autoPlay muted loop src={image.video} alt="" />
              <p className="text-black text-sm md:text-lg text-center mt-4 bg-gradient-to-br from-white to-gray-200 rounded-sm p-2 mx-4">{image.name}</p>
            </div>
          ))}
        </div>
        {/* <div className="flex w-max gap-20" ref={containerRef2}>
          Duplicamos os itens para o loop infinito
          {[...videos, ...videos].map((video, index) => (
            <div className="flex flex-col bg-yellow-300 pb-4 rounded-2xl pt-1 px-1 shadow-2xl">
              <video className="w-50 md:w-70 rounded-2xl" controls autoPlay muted loop src={video.video} alt="" />
              <p className="text-black text-center mt-4 bg-gradient-to-br from-white to-gray-200 rounded-sm p-2 mx-4">{video.name}</p>
            </div>
          ))}
        </div> */}
      </section>
    </>
  );
}
