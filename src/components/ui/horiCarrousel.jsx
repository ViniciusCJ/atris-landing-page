import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HoriCarousel() {
  const items = [
    { value: "100+", text: "Projetos Entregues" },
    { value: "95%", text: "Clientes Satisfeitos" },
    { value: "3x", text: "Aumento Médio em Vendas" },
    { value: "24h", text: "Resposta Garantida" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000); // troca a cada 3 segundos
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="py-16 atris-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-40 flex items-center justify-center overflow-hidden text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -1000, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl font-bold text-atris-green mb-2">
                {items[index].value}
              </div>
              <div className="text-white">{items[index].text}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
