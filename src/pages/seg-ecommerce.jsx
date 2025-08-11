import React from "react";
import "../styles/seg-ecommerce.css";
import logo from "../assets/logo-13.png";

const SegEcommerce = () => {

  const scrollToForm = () => {
    const target = document.getElementById("formulario");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCTA = () => {
    const target = document.getElementById("cta-final");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickWhats = () => {
    window.open('https://wa.me/16991369645?text=Olá%20gostaria%20de%20mais%20informações', '_blank')
  }

  const handleClickInsta = () => {
    window.open('https://www.instagram.com/agenciaatris', '_blank')
  }

  return (
    <>
    <div className="seg-ecommerce">
      {/* Header */}
      <header className="header">
        <nav className="nav-container flex justify-between items-center px-6 py-4">
          <img src={logo} alt="Atris Agência" className="logo h-10" />
          <a
            href="https://form.respondi.app/XzTzcKw1"
            className="btn btn-primary"
          >
            🎁 Mentoria Gratuita
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="section-hero py-16 text-center">
        <div className="container">
          <div className="badge badge-alert mb-6">
            ⚠️ ALERTA: Seu E-commerce Pode Estar Perdendo Dinheiro
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Seu E-commerce Está Perdendo{" "}
            <span className="atris-green-highlight">R$ 10.000+ Por Mês?</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubra os <strong>3 erros fatais</strong> que estão sabotando suas
            vendas e como <strong>triplicar seu faturamento</strong> em 90 dias
          </p>

          <div className="flex flex-col gap-4 items-center mb-12">
            <button
              onClick={scrollToForm}
              className="btn btn-primary btn-lg pulse-green"
            >
              📅 Agendar Mentoria GRATUITA
            </button>
            <p className="text-gray-600">
              ⏰ Apenas 60 minutos • 100% Gratuito • Sem Compromisso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Análise Completa do Seu E-commerce",
              "Estratégia Personalizada",
              "Plano de Ação Imediato",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="atris-green">✓</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identificação do Público */}
      <section className="section bg-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Você é Dono de E-commerce e Sente Que...
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: "📉",
                  title: "Suas vendas estão estagnadas",
                  text: "Mesmo investindo em marketing, o faturamento não cresce como deveria",
                },
                {
                  icon: "💸",
                  title: "O CAC está muito alto",
                  text: "Você gasta mais para adquirir clientes do que deveria",
                },
                {
                  icon: "👥",
                  title: "Baixa taxa de conversão",
                  text: "Muitos visitantes, mas poucos se tornam clientes",
                },
                {
                  icon: "🎯",
                  title: "Não sabe onde focar",
                  text: "Tantas estratégias que você não sabe qual priorizar",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="card card-border-red hover-lift p-4 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-red-500 text-2xl">{item.icon}</span>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl text-gray-700 font-medium mb-8">
              Se você se identificou com pelo menos 2 dessas situações,{" "}
              <span className="text-atris-green font-bold">continue lendo...</span>
            </p>

            <button
              onClick={scrollToCTA}
              className="btn btn-primary btn-lg pulse-green"
            >
              🚀 Quero Resolver Isso Agora!
            </button>
          </div>
        </div>
      </section>

      {/* Apertar a Dor */}
      <section className="section bg-red-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-100 border border-red-200 rounded-lg p-8 mb-8">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-700">
                A Cada Dia Que Passa Sem Agir...
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    R$ 333
                  </div>
                  <p className="text-red-700">
                    Perdidos por dia em vendas não realizadas
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    47%
                  </div>
                  <p className="text-red-700">
                    Dos seus concorrentes estão crescendo mais
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    6 meses
                  </div>
                  <p className="text-red-700">
                    É o tempo que você pode levar para recuperar o atraso
                  </p>
                </div>
              </div>

              <p className="text-lg text-red-700 font-medium">
                Enquanto você hesita, seus concorrentes estão implementando as
                estratégias certas e <strong>roubando seus clientes</strong>. O
                mercado não espera ninguém.
              </p>
            </div>

            <div className="bg-white border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-red-700 mb-4">
                ⚠️ CONSEQUÊNCIAS DE NÃO AGIR AGORA:
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "Perder market share para concorrentes mais preparados",
                  "Continuar desperdiçando dinheiro em estratégias que não funcionam",
                  "Ver seu negócio estagnar enquanto outros crescem exponencialmente",
                  "Perder a janela de oportunidade do mercado digital",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">❌</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    <section className="section bg-green-50">
    <div className="container">
        <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white border-2 border-green-200 rounded-lg p-8 shadow-lg">
            <div className="text-6xl mb-4">🛡️</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Mas Fique Tranquilo! 😌
            </h2>

            <p className="text-xl text-gray-700 mb-8">
            A <strong className="text-atris-green">Atris</strong> tem a{" "}
            <strong>fórmula exata</strong> que já ajudou{" "}
            <span className="text-atris-green font-bold">
                mais de 200 e-commerces
            </span>{" "}
            a multiplicarem suas vendas sem gastar mais com marketing.
            </p>

            {/* Três destaques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
                {
                icon: "📊",
                title: "Metodologia Comprovada",
                text: "Sistema testado e aprovado por centenas de clientes",
                },
                {
                icon: "🚀",
                title: "Resultados Rápidos",
                text: "Primeiros resultados em até 30 dias",
                },
                {
                icon: "🎯",
                title: "Foco no ROI",
                text: "Cada estratégia é pensada para maximizar o retorno",
                },
            ].map((item, i) => (
                <div className="text-center" key={i}>
                <div className="atris-green-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
                </div>
            ))}
            </div>

            {/* Nossa Promessa */}
            <div className="bg-green-100 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">
                🎯{" "}
                <span className="atris-green-highlight">
                NOSSA PROMESSA PARA VOCÊ:
                </span>
            </h3>
            <p className="text-lg text-gray-700 font-medium">
                Em apenas <strong>60 minutos de mentoria gratuita</strong>, você
                sairá com um <strong>plano de ação claro</strong> para aumentar
                suas vendas em pelo menos{" "}
                <strong>30% nos próximos 90 dias</strong>.
            </p>
            </div>

            {/* Botão */}
            <div className="text-center">
            <button
                className="btn btn-primary btn-lg pulse-green"
                onClick={scrollToCTA}
            >
                📅 Quero Minha Mentoria Gratuita!
            </button>
            </div>
        </div>
        </div>
    </div>
    </section>
    <section className="section bg-white">
    <div className="container">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Como Transformamos Seu E-commerce
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa metodologia exclusiva aborda todos os pontos críticos do
            seu negócio digital
            </p>
        </div>

        {/* Cards de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
            {
                icon: "🛒",
                title: "Otimização de Conversão",
                desc: "Transformamos visitantes em compradores através de UX/UI estratégico",
                items: [
                "Análise completa do funil de vendas",
                "Otimização de checkout",
                "Testes A/B contínuos",
                ],
            },
            {
                icon: "🎯",
                title: "Marketing Digital Estratégico",
                desc: "Campanhas que realmente convertem e trazem ROI positivo",
                items: [
                "Google Ads e Facebook Ads",
                "Email marketing automatizado",
                "Remarketing inteligente",
                ],
            },
            {
                icon: "📊",
                title: "Analytics & Performance",
                desc: "Dados precisos para decisões inteligentes e crescimento sustentável",
                items: [
                "Dashboards personalizados",
                "Relatórios de performance",
                "Análise de concorrência",
                ],
            },
            {
                icon: "🔍",
                title: "Análise CRO",
                desc: "Otimização científica da taxa de conversão baseada em dados",
                items: [
                "Heatmaps e análise de comportamento",
                "Testes A/B estruturados",
                "Otimização do funil de vendas",
                ],
            },
            ].map((service, i) => (
            <div className="card hover-lift" key={i}>
                <div className="card-header">
                <div className="atris-green-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                </div>
                <div className="card-content">
                <ul className="space-y-2 text-gray-600 list-none">
                    {service.items.map((item, idx) => (
                    <li className="flex items-center gap-2" key={idx}>
                        <span className="atris-green">✓</span>
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            ))}
        </div>

        {/* Chamada final */}
        <div className="text-center mt-12">
            <div className="bg-white border-2 border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Pronto para Transformar Seu E-commerce?
            </h3>
            <p className="text-gray-600 mb-6">
                Agende sua mentoria gratuita e descubra como implementar essas
                estratégias no seu negócio
            </p>
            <button
                className="btn btn-primary btn-lg pulse-green"
                onClick={scrollToCTA}
            >
                🎯 Agendar Mentoria Agora!
            </button>
            </div>
        </div>
        </div>
    </div>
    </section>
    </div>
    <div className="seg-ecommerce">
    <section className="section bg-gray-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          
          {/* Título */}
          <div className="text-center mb-12 mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Resultados Reais de Clientes Reais
            </h2>
            <p className="text-xl text-gray-600">
              Veja como transformamos e-commerces em máquinas de vendas
            </p>
          </div>

          {/* Números */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 !mb-10">
            {[
              { numero: "200+", texto: "E-commerces Transformados" },
              { numero: "347%", texto: "Aumento Médio de Vendas" },
              { numero: "R$ 50M", texto: "Gerados para Clientes" },
              { numero: "98%", texto: "Taxa de Satisfação" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="big-number mb-2">{item.numero}</div>
                <p className="text-gray-600 font-medium">{item.texto}</p>
              </div>
            ))}
          </div>

          {/* Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                texto: `Em 3 meses com a Atris, nosso faturamento saltou de R$ 50k para R$ 180k mensais. 
                        A metodologia deles é simplesmente incrível!`,
                iniciais: "MC",
                nome: "Marina Costa",
                cargo: "CEO, Bella Moda",
              },
              {
                texto: `Reduzimos nosso CAC em 60% e aumentamos a conversão em 240%. 
                        O ROI foi imediato e sustentável.`,
                iniciais: "RS",
                nome: "Roberto Silva",
                cargo: "Fundador, TechStore",
              },
              {
                texto: `Finalmente encontrei uma agência que entende de e-commerce de verdade. 
                        Resultados desde a primeira semana!`,
                iniciais: "AL",
                nome: "Ana Luiza",
                cargo: "Diretora, Casa & Lar",
              },
            ].map((dep, i) => (
              <div key={i} className="card hover-lift">
                <div className="card-content">
                  <div className="stars">
                    {Array(5)
                      .fill("⭐")
                      .map((star, idx) => (
                        <span key={idx} className="star">{star}</span>
                      ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">{dep.texto}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="font-bold text-gray-600">{dep.iniciais}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{dep.nome}</p>
                      <p className="text-gray-500">{dep.cargo}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
    <section id="cta-final" className="section section-dark">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge badge-success mb-6">
            🎁 OFERTA LIMITADA - 100% GRATUITO
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Agende Sua Mentoria Gratuita
            <span className="block text-atris-green">Agora Mesmo!</span>
          </h2>

          <p className="text-xl text-gray-600 mb-8">
            Em apenas 60 minutos, você descobrirá exatamente como{" "}
            <strong className="text-atris-green">triplicar suas vendas</strong> nos próximos 90 dias
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Benefícios da Mentoria */}
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-atris-green">
                O que você vai receber na mentoria:
              </h3>

              <div className="space-y-4">
                {[
                  {
                    titulo: "Diagnóstico Completo do Seu E-commerce",
                    desc: "Análise detalhada de todos os pontos de melhoria",
                  },
                  {
                    titulo: "Estratégia Personalizada",
                    desc: "Plano específico para o seu nicho e situação atual",
                  },
                  {
                    titulo: "Plano de Ação Imediato",
                    desc: "Passos práticos para implementar hoje mesmo",
                  },
                  {
                    titulo: "Análise de Concorrência",
                    desc: "Descubra o que seus concorrentes estão fazendo de errado",
                  },
                  {
                    titulo: "Projeção de Resultados",
                    desc: "Quanto você pode faturar implementando nossas estratégias",
                  },
                ].map((item, i) => (
                  <div className="flex items-start gap-4" key={i}>
                    <span className="text-xl text-atris-green">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">{item.titulo}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Principal */}
            <div>
              <div className="card">
                <div className="card-content text-center">
                  <div className="mb-6">
                    <div className="text-6xl mb-4">🎁</div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: "#000000" }}>
                      Mentoria Gratuita
                    </h3>
                    <p className="font-medium" style={{ color: "#000000" }}>
                      Valor real: R$ 2.500 | Hoje:{" "}
                      <strong className="text-atris-green">GRATUITO</strong>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="https://form.respondi.app/XzTzcKw1"
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

                    <p
                      className="font-medium"
                      style={{
                        fontSize: "0.875rem",
                        color: "#000000",
                      }}
                    >
                      ⏰ Apenas 60 minutos • 100% Gratuito • Sem Compromisso
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-lg">
                    <p className="text-center font-semibold" style={{ color: "#000000" }}>
                      🎯 Garantia: Se você não sair com um plano claro para aumentar suas vendas, 
                      devolvemos seu tempo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgência */}
          <div className="text-center">
            <div
              className="bg-red-900 border border-red-500 rounded-lg p-6 max-w-2xl mx-auto"
              style={{
                backgroundColor: "rgba(127, 29, 29, 0.3)",
                borderColor: "rgba(239, 68, 68, 0.3)",
              }}
            >
              <h3 className="text-xl font-bold text-red-400 mb-2">
                ⏰ ATENÇÃO: Vagas Limitadas!
              </h3>
              <p className="text-gray-300">
                Realizamos apenas <strong>10 mentorias gratuitas por semana</strong> para garantir 
                a qualidade do atendimento. Não perca sua oportunidade!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <footer className="footer !p-8">
        <div className="flex items-center flex-col md:flex-row">
          <img src={logo} alt="Atris Agência" className="footer-logo md:absolute left-0 items-center" />
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
    </>
  );
};

export default SegEcommerce;