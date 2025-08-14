import React, { useRef, useEffect } from "react";
import "../../styles/App.css"

const clients = [
  { name: "@MiniBox_Paulinho", link: "https://www.instagram.com/minibox_paulinho/" },
  { name: "@Grafica_Copy_Print", link: "https://www.instagram.com/grafica_copy_print/" },
  { name: "@BamboleBrinquedos", link: "https://www.instagram.com/bambolebrinquedos/" },
  { name: "@MarcosPauloSteelFrame", link: "https://www.instagram.com/marcospaulosteelframe/" },
  { name: "@Frelith", link: "https://www.instagram.com/frelith/" },
  { name: "@Nexstar.Oficial", link: "https://www.instagram.com/nexstar.oficial/" },
];

export default function ClientsCarousel() {
  const containerRef = useRef(null);
  const position = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    let requestId;

    const speed = 0.5; // pixels por frame

    const animate = () => {
      if (container) {
        position.current -= speed;
        // Se passou metade da largura, reseta para 0
        if (position.current <= -container.scrollWidth / 2) {
          position.current = 0;
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
        Marcas que crescem com a gente 🚀
      </h2>

      <div
        className="flex w-max"
        ref={containerRef}
        style={{ display: "flex", gap: "2rem" }}
      >
        {/* Duplicamos os itens para o loop infinito */}
        {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, index) => (
          <a
            key={index}
            href={client.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl border-t-4 border-t-yellow-300 h-24 w-40 md:w-60
             flex items-center justify-center text-center hover-lift-shadow"
          >
            <span className="flex items-center justify-center h-24 md:text-lg text-xs md:font-medium text-black">
                {client.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
