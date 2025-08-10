import React from "react";
import "../styles/thankyou.css";
import logo from "../assets/logo-13.png";

const ThankYouPage = () => {

  const handleClickWhats = () => {
    window.open('https://wa.me/16991369645?text=Olá%20gostaria%20de%20mais%20informações', '_blank')
  }

  const handleClickInsta = () => {
    window.open('https://www.instagram.com/agenciaatris', '_blank')
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Header */}
      <header className="header fixed top-0 left-0 right-0 z-50">
        <nav className="nav-container flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
          <img src={logo} alt="Atris Agência" className="logo h-16 w-auto" />
          <ul className="nav-links flex items-center gap-8 list-none">
            <li><a href="../#inicio">Início</a></li>
            <li><a href="../#sobre">Sobre</a></li>
            <li><a href="../#servicos">Serviços</a></li>
            <li><a href="../#contato">Contato</a></li>
            <li>
              <a href="https://respondi.app" className="btn-primary">Falar Conosco</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main className="main-content flex flex-1 items-center justify-center px-6 pt-32 pb-12">
        <div className="thank-you-container relative text-center bg-white rounded-2xl shadow-lg max-w-xl p-10">
          <div className="success-icon mx-auto mb-6 flex items-center justify-center rounded-full">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-10 h-10">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 
                   0 01-1.414 0l-4-4a1 1 0 
                   011.414-1.414L8 12.586l7.293-7.293a1 1 
                   0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          <h1 className="thank-you-title">Obrigado! 🎉</h1>
          <p className="thank-you-subtitle">Sua mensagem foi enviada com sucesso!</p>

          <p className="thank-you-message">
            Ficamos muito felizes com seu interesse na <strong>Atris</strong>! 
            Nossa equipe já recebeu sua mensagem e em breve entraremos em contato 
            para entender melhor suas necessidades e como podemos ajudar seu negócio a decolar no digital.
          </p>

          <div className="next-steps text-left">
            <h3>📋 Próximos Passos:</h3>
            <ul>
              <li>Nossa equipe analisará sua solicitação</li>
              <li>Entraremos em contato em até 24 horas</li>
              <li>Agendaremos uma conversa para entender suas necessidades</li>
              <li>Apresentaremos uma proposta personalizada</li>
            </ul>
          </div>

          <div className="action-buttons mt-6 flex gap-4 justify-center flex-wrap">
            <a href="/" className="btn-primary">Voltar ao Início</a>
            <button onClick={handleClickWhats} className="btn-secondary cursor-pointer">Falar Agora no WhatsApp</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="flex items-center">
          <img src={logo} alt="Atris Agência" className="footer-logo absolute left-0 items-center" />
          <div className="flex-col items-center justify-center w-full">
            <p className="footer-text">Transformando ideias em resultados digitais</p>
            <div className="social-links">
              <a onClick={handleClickInsta} className="cursor-pointer">Instagram</a>
              <a onClick={handleClickWhats} className="cursor-pointer">WhatsApp</a>
            </div>
            <p className="footer-text">© 2025 Atris Agência. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouPage;
