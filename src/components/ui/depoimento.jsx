import React, { useRef, useEffect } from "react";
import "../../styles/App.css"
import print1 from "../../assets/print1.jpg"
import print2 from "../../assets/print2.jpg"
import print3 from "../../assets/print3.jpg"
import print4 from "../../assets/print4.jpg"
import print5 from "../../assets/print5.jpg"

const images = [
  { photo: print1, name: "Exemplo1"},
  { photo: print2, name: "Exemplo2"},
  { photo: print3, name: "Exemplo3"},
  { photo: print4, name: "Exemplo4"},
  { photo: print5, name: "Exemplo5"},
];

export default function imagesCarousel() {
  const containerRef = useRef(null);
  const position = useRef(0);

  useEffect(() => {
     const container = containerRef.current;
    let requestId;

    const speed = 0.5; // positivo = anda para a esquerda
    const totalWidth = container.scrollWidth / 2; // metade pq duplicamos os itens

    // Começar deslocado no "fim" (último elemento)
    position.current = -totalWidth;

    const animate = () => {
      if (container) {
        position.current += speed;
        // Se passou metade da largura, reseta para 0
        if (position.current <= -container.scrollWidth / 2) {
          position.current = -totalWidth;
        }
        container.style.transform = `translateX(${position.current}px)`;
      }
      requestId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <section className="bg-gradient-to-br from-white to-gray-200 py-10 mb-10 overflow-hidden">
      <h2 className="flex justify-center text-3xl md:text-4xl font-bold text-atris-black text-center pl-3 pr-3 mb-16">
        O que nossos clientes têm a dizer
      </h2>

      <div
        className="flex w-max gap-20"
        ref={containerRef}
      >
        {/* Duplicamos os itens para o loop infinito */}
        {[...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images].map((image, index) => (
          <div className="flex flex-col bg-yellow-300 pb-4 rounded-2xl pt-1 px-1 shadow-2xl">
            <img className="w-50 md:w-70 rounded-2xl" src={image.photo} alt="" />
            <p className="text-black text-center mt-4 bg-gradient-to-br from-white to-gray-200 rounded-sm p-2 mx-4">{image.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
