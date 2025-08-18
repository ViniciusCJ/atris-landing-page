import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import ClientsCarousel from "../components/ui/infiniteCarousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight,
  Zap,
  Target,
  Users,
  Lightbulb,
  Rocket,
  Heart,
  Star,
  TrendingUp,
  Smartphone,
  Globe,
  BarChart3,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Sparkles,
  Coffee,
  Palette
} from 'lucide-react'
import '../styles/App.css'
import atrisLogo from '../assets/logo-13.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClickWhats = () => {
    window.open('https://wa.me/16991369645?text=Olá%20gostaria%20de%20mais%20informações', '_blank')
  }

  const handleClickForms = () => {
    window.open('https://form.respondi.app/XzTzcKw1', '_blank')
  }
  
  const handleClickInsta = () => {
    window.open('https://www.instagram.com/agenciaatris', '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <img src={atrisLogo} alt="Atris" className="h-10 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#sobre" className="text-gray-700 hover:text-atris-green transition-colors font-medium">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-atris-green transition-colors font-medium">Serviços</a>
              <a href="#diferenciais" className="text-gray-700 hover:text-atris-green transition-colors font-medium">Diferenciais</a>
              <a href="#contato" className="text-gray-700 hover:text-atris-green transition-colors font-medium">Contato</a>
            </nav>
            <Button 
              onClick={handleClickWhats}
              className="atris-green text-black hover:bg-yellow-400 font-bold"
            >
              Vamos Conversar!
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 atris-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 atris-green text-black hover:bg-yellow-400 text-lg px-4 py-2">
                🚀 Sua marca merece destaque!
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-atris-black mb-6 leading-tight">
                O ponto de partida para 
                <span className="text-atris-green block">negócios que querem</span>
                <span className="text-atris-green">um impulso no digital</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Uma agência criativa e próxima, que simplifica o universo digital 
                para pequenos negócios. Porque acreditamos que toda ideia merece 
                ser vista e toda marca tem potencial para brilhar! ✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleClickForms}
                  className="atris-green text-black hover:bg-yellow-400 text-lg px-8 py-4 font-bold hover-lift"
                >
                  Preencher o Formulário
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <Sparkles className="h-16 w-16 text-atris-black mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-atris-black mb-4">
                    Estamos prontos para ser o ponto de virada na sua trajetória digital!
                  </h3>
                  <p className="text-atris-black font-medium">
                    E você? 🤔
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 atris-green rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 atris-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-atris-green mb-2">100+</div>
              <div className="text-white">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-atris-green mb-2">95%</div>
              <div className="text-white">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-atris-green mb-2">3x</div>
              <div className="text-white">Aumento Médio em Vendas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-atris-green mb-2">24h</div>
              <div className="text-white">Resposta Garantida</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-atris-black mb-4">
              Somos inovadores, conectados, criativos, próximos e acessíveis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acreditamos que o marketing digital não precisa ser complicado. 
              Nossa missão é tornar o digital simples, divertido e eficaz para seu negócio! 🎯
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift border-2 border-transparent hover:border-atris-green">
              <CardHeader className="text-center">
                <div className="w-16 h-16 atris-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl">Sofisticação & Solidez</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Combinamos criatividade com estratégia sólida. Cada projeto é pensado 
                  nos mínimos detalhes para gerar resultados reais.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-transparent hover:border-atris-green">
              <CardHeader className="text-center">
                <div className="w-16 h-16 atris-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl">Equilíbrio & Adaptação</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Encontramos o ponto perfeito entre inovação e praticidade. 
                  Nos adaptamos ao seu ritmo e necessidades.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-transparent hover:border-atris-green">
              <CardHeader className="text-center">
                <div className="w-16 h-16 atris-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl">Clareza & Simplicidade</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Falamos sua língua! Sem jargões complicados, apenas soluções 
                  claras e transparentes que você entende.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-atris-black mb-4">
              Nossos Serviços que Fazem a Diferença
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do planejamento à execução, cuidamos de tudo para que você possa focar 
              no que faz de melhor: cuidar do seu negócio! 💪
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 atris-green rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Construção de LP</CardTitle>
                <CardDescription>
                  Criamos sua presença digital do zero
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Sites responsivos e modernos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Alta Conversão
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Únicos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 atris-green rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Gestão de Tráfego</CardTitle>
                <CardDescription>
                  Campanhas que realmente convertem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Google Ads e Meta Ads
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Segmentação inteligente
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    ROI otimizado
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 atris-green rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Curadoria de conteúdos</CardTitle>
                <CardDescription>
                  Sua marca com o melhor conteúdo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Ideias de Conteúdos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Conectam com sua audiência
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Conteúdos autênticos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 atris-green rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>
                  Engajamento que gera resultados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Gestão de redes sociais
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Criação de conteúdo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Estratégia de engajamento
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 atris-green rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Captação de conteúdos</CardTitle>
                <CardDescription>
                  Ideias que viram conteúdo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Captação profissional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Edição dos conteúdos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Pronto para postar
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 atris-green rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-black" />
                </div>
                <CardTitle>Consultoria Estratégica</CardTitle>
                <CardDescription>
                  Planejamento que funciona
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Diagnóstico completo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Plano de ação personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-atris-green mr-2" />
                    Acompanhamento contínuo
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-atris-black mb-4">
              Por que escolher a Atris?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não somos apenas mais uma agência. Somos seus parceiros na jornada digital! 🤝
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 atris-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-atris-black mb-2">1 Mês de conteúdo em 1 dia</h3>
                    <p className="text-gray-600">
                      Produzimos todo o seu conteúdo do próximo mês em um único dia. Garantindo que seus meses sejam 100% programados e completos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 atris-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-atris-black mb-2">Proximidade Real</h3>
                    <p className="text-gray-600">
                      Não somos apenas fornecedores, somos parceiros. Estamos aqui 
                      para celebrar suas vitórias e superar os desafios juntos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 atris-green rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-atris-black mb-2">Resultados Comprovados</h3>
                    <p className="text-gray-600">
                      Nossos clientes veem resultados reais: mais leads, mais vendas, 
                      mais reconhecimento. E você será o próximo!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 atris-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-atris-black mb-2">Criatividade sem Limites</h3>
                    <p className="text-gray-600">
                      Cada projeto é único, assim como seu negócio. Criamos soluções 
                      personalizadas que fazem sua marca se destacar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-atris-black mb-6">
                    "Equipe maravilhosa, com muita proatividade e ótimas ideias!"
                  </h3>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-atris-black text-atris-black" />
                    ))}
                  </div>
                  <p className="text-atris-black font-medium">
                    Cliente satisfeito da Atris
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 atris-green rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      <ClientsCarousel />

      {/* CTA Section */}
      <section className="py-20 atris-black relative overflow-hidden">
        <div className="absolute inset-0 atris-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Vamos conversar sobre como podemos impulsionar seu negócio no digital. 
            É só clicar no botão abaixo e começar essa jornada incrível! 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleClickWhats}
              className="atris-green text-black hover:bg-yellow-400 text-lg px-8 py-4 font-bold hover-lift"
            >
              Preencher o Formulário
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-atris-black mb-4">
              Vamos Bater um Papo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos sempre prontos para uma boa conversa sobre seu projeto. 
              Entre em contato e vamos criar algo incrível juntos! ☕
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 atris-green rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-atris-black">Email</h3>
                    <p className="text-gray-600">contato@atris.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 atris-green rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-atris-black">WhatsApp</h3>
                    <p className="text-gray-600"> (16) 99136-9645</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-atris-black mb-4">Nos siga no Instragram:</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 atris-green rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-colors">
                    <Instagram onClick={handleClickInsta} className="h-5 w-5 text-black" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Vamos começar seu projeto!</CardTitle>
                <CardDescription>
                  Clique no botão abaixo e vamos conversar sobre suas necessidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Sparkles className="h-16 w-16 text-atris-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-atris-black mb-4">
                    Pronto para decolar? 🚀
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Clique no botão abaixo e vamos conversar sobre como podemos 
                    transformar sua presença digital!
                  </p>
                  <Button 
                    onClick={handleClickForms}
                    className="w-full atris-green text-black hover:bg-yellow-400 font-bold py-3"
                  >
                    Preencher o Formulário
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="atris-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={atrisLogo} alt="Atris" className="h-15 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-400">
                Performance Digital que transforma negócios através de criatividade, 
                proximidade e resultados reais.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-atris-green">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sites & E-commerce</li>
                <li>Gestão de Tráfego</li>
                <li>Design & Branding</li>
                <li>Social Media</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-atris-green">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nós</li>
                <li>Nossos Cases</li>
                <li>Blog</li>
                <li>Carreira</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-atris-green">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@atris.com.br</li>
                <li>(16) 99136-9645</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Atris Performance Digital. Todos os direitos reservados.</p>
            <p className="mt-2">Feito com ❤️ e muito ☕ pela equipe Atris</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

