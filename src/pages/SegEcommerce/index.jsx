import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import "./styles.css"; // Importando os estilos da página
import logo from "../../assets/logo-13.png"; // Importando o logo

export function SegEcommerce() {
  // Funções de scroll suave movidas para dentro do componente
  const scrollToCTA = (e) => {
    e.preventDefault();
    document.getElementById("cta-final")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // O useEffect é o local ideal para manipular o DOM após a renderização
  useEffect(() => {
    // Animação suave para links âncora
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // O efeito de hover já é feito via CSS (:hover), o JS para isso foi removido por ser redundante.
  }, []); // O array vazio garante que o efeito rode apenas uma vez

  return (
    <>
      <Helmet>
        <title>Mentoria Gratuita E-commerce - Atris Agência</title>
        <meta
          name="description"
          content="Seu e-commerce está perdendo R$ 10.000+ por mês? Agende uma mentoria gratuita com a Atris e descubra como multiplicar suas vendas online."
        />
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>

      <div className="mentoria-body">
        {/* Header */}
        <header className="header">
          <nav className="nav-container">
            <img src={logo} alt="Atris Agência" className="logo" />
            <a
              href="https://respondi.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              🎁 Mentoria Gratuita
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="section-hero">
          <div className="container text-center">
            <div className="badge badge-alert">
              ⚠️ ALERTA: Seu E-commerce Pode Estar Perdendo Dinheiro
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Seu E-commerce Está Perdendo
              <span className="atris-green-highlight">R$ 10.000+ Por Mês?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descubra os <strong>3 erros fatais</strong> que estão sabotando
              suas vendas e como
              <strong>triplicar seu faturamento</strong> em 90 dias
            </p>
            <div className="flex flex-col gap-4 items-center mb-12">
              <a
                href="#formulario"
                className="btn btn-primary btn-lg pulse-green"
                onClick={scrollToCTA}
              >
                📅 Agendar Mentoria GRATUITA
              </a>
              <p className="text-gray-600">
                ⏰ Apenas 60 minutos • 100% Gratuito • Sem Compromisso
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Items */}
              <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="atris-green">✓</span>
                <span className="font-medium">
                  Análise Completa do Seu E-commerce
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="atris-green">✓</span>
                <span className="font-medium">Estratégia Personalizada</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="atris-green">✓</span>
                <span className="font-medium">Plano de Ação Imediato</span>
              </div>
            </div>
          </div>
        </section>

        {/* O restante do seu HTML convertido para JSX segue aqui... */}
        {/* ... (Cole o resto do conteúdo do <body> do seu HTML aqui, lembrando de converter 'class' para 'className' e 'style' para objetos JS) ... */}
        {/* Por exemplo, a próxima seção: */}

        <section className="section bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Você é Dono de E-commerce e Sente Que...
              </h2>
              {/* ...e assim por diante para todas as seções... */}
            </div>
          </div>
        </section>

        {/* ... (Continue colando e convertendo todas as seções até o footer) ... */}

        {/* Exemplo de conversão da seção CTA Final */}
        <section id="cta-final" className="section section-dark">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              {/* ... (conteúdo da seção) ... */}
              <div className="card">
                <div className="card-content text-center">
                  {/* ... */}
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#000000" }}
                  >
                    Mentoria Gratuita
                  </h3>
                  <p className="font-medium" style={{ color: "#000000" }}>
                    Valor real: R$ 2.500 | Hoje:{" "}
                    <strong className="atris-green">GRATUITO</strong>
                  </p>
                  <a
                    href="https://respondi.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg pulse-green"
                    style={{
                      width: "100%",
                      fontSize: "1.25rem",
                      padding: "1.25rem 2rem",
                    }}
                  >
                    📅 AGENDAR MENTORIA GRATUITA AGORA
                  </a>
                  {/* ... */}
                </div>
              </div>
              {/* ... */}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <img
                src={logo}
                alt="Atris Agência"
                style={{
                  height: "4rem",
                  margin: "0 auto 1.5rem",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <p className="text-gray-600 mb-6">
                Transformando e-commerces em máquinas de vendas desde 2020
              </p>
              <div className="flex justify-center gap-8 mb-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-400"
                  style={{ transition: "color 0.3s" }}
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-400"
                  style={{ transition: "color 0.3s" }}
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-400"
                  style={{ transition: "color 0.3s" }}
                >
                  WhatsApp
                </a>
              </div>
              <p className="text-gray-500" style={{ fontSize: "0.875rem" }}>
                © 2025 Atris Agência. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
