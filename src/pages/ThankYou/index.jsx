import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "./styles.css";
import atrisLogo from "../../assets/logo-13.png";

export function ThankYou() {
  useEffect(() => {}, []);

  return (
    <>
      {/* Gerencia o <head> da página */}
      <Helmet>
        <title>Obrigado! - Atris Agência</title>
        <meta
          name="description"
          content="Obrigado por entrar em contato com a Atris! Em breve nossa equipe entrará em contato."
        />
        <link rel="icon" type="image/png" href={atrisLogo} />
      </Helmet>

      {/* O corpo do HTML original é renderizado aqui */}
      <div className="thank-you-body">
        {/* Header */}
        <header className="header">
          <nav className="nav-container">
            <img src={atrisLogo} alt="Atris Agência" className="logo" />
            <ul className="nav-links">
              {/* Usando Link para rotas da aplicação */}
              <li>
                <Link to="/#inicio">Início</Link>
              </li>
              <li>
                <Link to="/#sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/#servicos">Serviços</Link>
              </li>
              <li>
                <Link to="/#contato">Contato</Link>
              </li>
              <li>
                <a
                  href="https://respondi.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Falar Conosco
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <div className="thank-you-container">
            <div className="success-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <h1 className="thank-you-title">Obrigado! 🎉</h1>
            <p className="thank-you-subtitle">
              Sua mensagem foi enviada com sucesso!
            </p>

            <p className="thank-you-message">
              Ficamos muito felizes com seu interesse na <strong>Atris</strong>!
              Nossa equipe já recebeu sua mensagem e em breve entraremos em
              contato para entender melhor suas necessidades e como podemos
              ajudar seu negócio a decolar no digital.
            </p>

            <div className="next-steps">
              <h3>📋 Próximos Passos:</h3>
              <ul>
                <li>Nossa equipe analisará sua solicitação</li>
                <li>Entraremos em contato em até 24 horas</li>
                <li>
                  Agendaremos uma conversa para entender suas necessidades
                </li>
                <li>Apresentaremos uma proposta personalizada</li>
              </ul>
            </div>

            <div className="action-buttons">
              <Link to="/" className="btn-primary">
                Voltar ao Início
              </Link>
              <a
                href="https://respondi.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Falar Agora no WhatsApp
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <img src={atrisLogo} alt="Atris Agência" className="footer-logo" />
            <p className="footer-text">
              Transformando ideias em resultados digitais
            </p>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">WhatsApp</a>
            </div>
            <p className="footer-text">
              © 2025 Atris Agência. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
