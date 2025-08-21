import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import ClientsCarousel from "../components/ui/infiniteCarousel"
import VerticalCarousel from "../components/ui/verticalCarrousel"
import HoriCarousel from "../components/ui/horiCarrousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Calendar,
  Handshake,
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
import video from "../assets/teste.mp4"

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
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl text-center font-bold text-atris-black mb-6 leading-tight">
                SUA MARCA MERECE 
                <br />
                <span className="text-atris-green"> DESTAQUE NO DIGITAL</span>
              </h1>
              <p className="flex text-xl md:text-3xl text-center justify-center text-gray-600 mb-8 px-5 md:px-50 leading-relaxed">
                Somos uma agência criativa e próxima, que fala a sua língua e cuida de tudo para você ter a presença online - Mesmo sem entender nada de marketing digital
              </p>
              <div className="flex flex-col justify-center mb-10 sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleClickForms}
                  className="atris-green text-black hover:bg-yellow-400 px-8 py-4 text-sm md:text-lg font-bold hover-lift"
                >
                  Vamos conversar sobre o seu projeto
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative z-10 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-3xl px-1 py-5 shadow-[0_0_30px_40px_rgba(255,255,0,0.5)] ">
                <div className="flex justify-center">
                  <video className='rounded-3xl md:h-140' controls autoPlay muted loop src={video}></video>
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
            {[
              {
                value: "100+",
                text: "Projetos Entregues",
                animate: "bounce"
              },
              {
                value: "95%",
                text: "Clientes Satisfeitos",
                animate: "bounce"
              },
              {
                value: "3x",
                text: "Aumento Médio em Vendas",
                animate: "bounce"
              },
              {
                value: "24h",
                text: "Resposta Garantida",
                animate: "bounce"
              },
            ].map((obj) => (
              <div>
                <div className={`text-4xl font-bold text-atris-green mb-2 animate-${obj.animate} [animation-duration:2s]`}>{obj.value}</div>
                <div className="text-white">{obj.text}</div>
            </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-atris-black mb-4">
              QUEM É ATRIS?
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl md:max-w-4xl mx-auto mb-4">
              Somos apaixonados por ajudar negócios locais a saírem do anonimato e conquistarem o espaço que merecem no digital.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl md:max-w-5xl mx-auto">
              Sabemos que cuidar de um negócio sozinho não é fácil. Por isso, nossa missão é <span className='text-atris-green'> simplificar o marketing</span>, tornar ele leve, eficiente e acessível. Sem enrolação, sem fórmulas mágicas. Só o que funciona de verdade.
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
            <h2 className="text-3xl md:text-5xl font-bold text-atris-black mb-4">
              O QUE FAZEMOS POR VOCÊ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Você cuida do seu negócio. A gente cuida do digital.
              Do planejamento à execução, entregamos tudo pronto e com resultado.
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
                    <Calendar className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-atris-black mb-2">1 Mês de conteúdo em 1 dia</h3>
                    <p className="text-gray-600">
                      Produzimos todo o seu conteúdo mensal em apenas um dia. Tudo pronto, organizado e programado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 atris-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Handshake className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-atris-black mb-2">Proximidade de Verdade</h3>
                    <p className="text-gray-600">
                      Nada de agência fria. Você fala direto com quem está cuidando do seu projeto, sempre com atenção e parceria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 atris-green rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-atris-black mb-2">Resultados que Aparecem</h3>
                    <p className="text-gray-600">
                      Mais leads. Mais clientes. Mais reconhecimento local. E tudo com acompanhamento claro e transparente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 atris-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-atris-black mb-2">Criatividade com Estratégia</h3>
                    <p className="text-gray-600">
                      Cada projeto é pensado para destacar sua marca e atrair mais clientes — sem fórmulas prontas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="parceiros" className='flex'>
        <ClientsCarousel />
      </div>

      {/* CTA Section */}
      <section className="py-20 atris-black relative overflow-hidden">
        <div className="absolute inset-0 atris-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Você não precisa saber tudo sobre marketing digital. Só precisa dar o primeiro passo.
            <br />
            A Atris cuida do resto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleClickWhats}
              className="atris-green text-black hover:bg-yellow-400 text-lg px-8 py-4 font-bold hover-lift"
            >
              Agendar reunião com a assessoria
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

          <div className="flex gap-12 items-center justify-center">
            <div className="flex flex-col md:flex-row gap-7">
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
              
              <div className="flex items-center space-x-4">
                <div onClick={handleClickInsta} className="w-12 h-12 atris-green rounded-lg flex items-center justify-center cursor-pointer">
                  <a href="#">
                    <Instagram className="h-6 w-6 text-black" />
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-atris-black">Instagram</h3>
                  <p className="text-gray-600">@agenciaatris</p>
                </div>
              </div>
            </div>
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
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#parceiros">Nossos Cases</a></li>
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

