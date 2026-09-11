import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Dumbbell,
  Flame,
  Zap,
  ShieldCheck,
  Award,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X,
  Calendar,
  CheckCircle2,
  Users,
  Activity,
  HeartPulse,
  Music,
  Target,
  Sparkles,
  ExternalLink,
  Check
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: CafSportLandingPage,
});

export default function CafSportLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Simulator Form State
  const [studentName, setStudentName] = useState("");
  const [trainingGoal, setTrainingGoal] = useState("Ganho de Massa Muscular (Hipertrofia)");
  const [preferredShift, setPreferredShift] = useState("Noite (17h às 22h)");
  const [experienceLevel, setExperienceLevel] = useState("Iniciante (Vou começar do zero)");
  const [notes, setNotes] = useState("");

  const phone = "552199925765";
  const phoneDisplay = "(21) 99925-5765";
  const address = "R. Luís Noguet Júnior, 467 - Bairro de São Pedro, Teresópolis - RJ (Próximo ao Posto de Gasolina)";
  const hours = "Segunda a Sexta das 06:00 às 22:00";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, equipe da Caf Sport! Vim pelo site oficial e gostaria de resgatar meu 1 Dia de Treino Grátis (Free Pass).

*Nome:* ${studentName || "Não informado"}
*Meu Objetivo:* ${trainingGoal}
*Nível de Treino:* ${experienceLevel}
*Horário Pretendido:* ${preferredShift}
${notes ? `*Observações:* ${notes}` : ""}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site oficial da Caf Sport e gostaria de informações sobre planos e como funciona o 1º dia de treino grátis."
  )}`;

  const modalities = [
    {
      title: "Musculação & Hipertrofia",
      tag: "Força & Definição",
      icon: Dumbbell,
      image: "/images/musculacao.webp",
      desc: "Sala de musculação completa com pesos livres, halteres pesados, anilhas olímpicas e máquinas guiadas modernas para você desenvolver todos os grupos musculares com intensidade e segurança."
    },
    {
      title: "Área Cardio & Emagrecimento",
      tag: "Queima Calórica",
      icon: Flame,
      image: "/images/cardio.webp",
      desc: "Esteiras de alta performance, bicicletas ergométricas e treinos aeróbicos estruturados para acelerar seu metabolismo, queimar gordura corporal e fortalecer sua capacidade cardiovascular."
    },
    {
      title: "Personal & Acompanhamento na Sala",
      tag: "Suporte Real",
      icon: Users,
      image: "/images/personal.webp",
      desc: "Professores sempre presentes na sala para orientar a postura correta, ensinar a execução dos exercícios e montar fichas personalizadas conforme a sua evolução individual."
    },
    {
      title: "Treinamento Funcional & Core",
      tag: "Mobilidade & Agilidade",
      icon: Zap,
      image: "/images/funcional.webp",
      desc: "Circuitos dinâmicos para ganho de coordenação motora, resistência aeróbica e fortalecimento do abdômen e lombar, prevenindo dores nas costas e lesões articulares."
    },
    {
      title: "Saúde, Longevidade & 3ª Idade",
      tag: "Qualidade de Vida",
      icon: HeartPulse,
      image: "/images/hero_fitness.webp",
      desc: "Exercícios adaptados com cargas progressivas para fortalecimento ósseo, ganho de massa magra protetora e melhora da flexibilidade e independência no dia a dia."
    },
    {
      title: "Preparação para TAF & Concursos",
      tag: "Foco em Metas",
      icon: Target,
      image: "/images/gym_space.webp",
      desc: "Treinamento físico direcionado para candidatos de concursos públicos: flexão na barra fixa, corrida de 12 minutos e impulsão com planejamento de pontuação máxima."
    }
  ];

  const highlights = [
    {
      title: "Sem Filas Intermináveis",
      desc: "Ambiente bem distribuído com ampla variedade de aparelhos para você cumprir seu treino sem perder tempo esperando."
    },
    {
      title: "Horário Estendido: 06h às 22h",
      desc: "Flexibilidade total para treinar antes do expediente de manhã cedinho ou relaxar e queimar energia após o trabalho."
    },
    {
      title: "No Coração de São Pedro",
      desc: "Ao lado do posto de gasolina de São Pedro. Treine perto de casa sem enfrentar o trânsito até a Várzea ou o Alto."
    },
    {
      title: "Ambiente & Trilha Sonora Motivadora",
      desc: "Música de qualidade, clima agradável e energia contagiante para manter seu foco e disciplina em alta todos os dias."
    }
  ];

  const plans = [
    {
      name: "Plano Mensal Livre",
      badge: "Sem Fidelidade",
      price: "Consulte no WhatsApp",
      period: "por mês",
      features: [
        "Acesso total à sala de musculação",
        "Área cardio completa",
        "Ficha de treino personalizada",
        "Horário livre (06h às 22h)"
      ],
      popular: false
    },
    {
      name: "Plano Trimestral",
      badge: "Mais Procurado",
      price: "Melhor Custo-Benefício",
      period: "foco em resultados",
      features: [
        "Acesso livre e irrestrito",
        "Acompanhamento de evolução física",
        "Atualização periódica de fichas",
        "Economia comprovada no trimestre"
      ],
      popular: true
    },
    {
      name: "Plano Semestral / Anual",
      badge: "Máxima Economia",
      price: "Menor Parcela",
      period: "para quem tem meta fixa",
      features: [
        "Acesso livre durante todo o ano",
        "Prioridade em novas montagens de treino",
        "Acompanhamento postural e de metas",
        "Parcelamento facilitado no cartão"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Laura Alves Lins",
      tag: "Aluna Verificada • Google Local Guide",
      stars: 5,
      content: "Bem localizada, bom preço, e disponibilidade de personal pra treino! Bom gosto musical também! Recomendo ++"
    },
    {
      name: "Fabiana Esteves & Jorge Barcelos",
      tag: "Alunos Frequentes • Google Maps",
      stars: 5,
      content: "Excelente localização próximo ao posto de gasolina São Pedro. Treino lá atualmente, gostei de lá! Ambiente bem tranquilo pra treinar."
    },
    {
      name: "Aluno Satisfeito",
      tag: "Avaliação Verificada • Google Maps",
      stars: 5,
      content: "Ótimos profissionais, ambiente muito tranquilo para treinar! Melhor opção para quem mora em São Pedro e quer treinar com seriedade."
    }
  ];

  const faqs = [
    {
      q: "Como funciona o 1º Dia de Treino Grátis (Free Pass)?",
      a: "Basta preencher o formulário no final da página ou nos mandar uma mensagem no WhatsApp. Você receberá um passe livre para treinar um dia completo na nossa sala de musculação e esteiras, conhecer nossos professores e sentir a energia da academia sem pagar absolutamente nada."
    },
    {
      q: "Nunca treinei antes. Vou ter ajuda para aprender os exercícios?",
      a: "Com certeza! Na Caf Sport nossos professores e personais estão sempre circulando na sala de musculação. No seu primeiro dia montaremos uma ficha inicial e ensinaremos a postura correta de cada aparelho para você treinar com 100% de segurança."
    },
    {
      q: "Quais são os horários de funcionamento da academia?",
      a: "Funcionamos de segunda a sexta-feira, das 06:00 às 22:00 sem fechar para almoço. É o maior horário de São Pedro para acomodar tanto quem prefere treinar antes de começar o dia quanto quem treina à noite."
    },
    {
      q: "A academia fica perto de onde em São Pedro?",
      a: "Estamos localizados na Rua Luís Noguet Júnior, nº 467, logo ao lado do Posto de Gasolina de São Pedro. Ponto de fácil parada e transporte."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-green-600/20 selection:text-green-900 pb-24 lg:pb-0">
      {/* 1. TOP GREEN NOTIFICATION STRIP */}
      <div className="bg-gradient-to-r from-emerald-800 via-green-800 to-emerald-900 text-emerald-50 px-4 py-2.5 text-xs font-medium border-b border-green-700/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span>
              <strong>Caf Sport Academia:</strong> Aberta das 06:00 às 22:00 no coração de São Pedro.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-emerald-200">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-green-300" />
              Seg a Sex: 06:00 às 22:00 (Ininterrupto)
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-green-300" />
              R. Luís Noguet Júnior, 467 (Ao lado do Posto)
            </span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR - TOTALMENTE BRANCA E SEM ÍCONE NA HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-md transition-all shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Logo EXCLUSIVAMENTE Tipográfica SEM NENHUM ÍCONE */}
          <a href="#" className="group flex flex-col justify-center transition-opacity hover:opacity-90">
            <span className="font-[Outfit,sans-serif] text-xl font-black tracking-tight text-slate-900 transition group-hover:text-green-600 sm:text-2xl uppercase">
              Caf <span className="text-green-600">Sport</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-green-600 uppercase sm:text-xs">
              Academia & Centro de Treinamento • São Pedro
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#diferenciais" className="text-sm font-semibold text-slate-600 transition hover:text-green-600">
              Diferenciais
            </a>
            <a href="#modalidades" className="text-sm font-semibold text-slate-600 transition hover:text-green-600">
              Modalidades
            </a>
            <a href="#planos" className="text-sm font-semibold text-slate-600 transition hover:text-green-600">
              Planos
            </a>
            <a href="#localizacao" className="text-sm font-semibold text-slate-600 transition hover:text-green-600">
              Localização
            </a>
            <a href="#depoimentos" className="text-sm font-semibold text-slate-600 transition hover:text-green-600">
              Depoimentos
            </a>
            <a href="#freepass" className="text-sm font-semibold text-slate-600 transition hover:text-green-600">
              Free Pass
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-600 transition hover:text-green-600">
              Dúvidas
            </a>
          </nav>

          {/* Direct WhatsApp CTA Button */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={`tel:${phone}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-green-700 px-3 py-2"
            >
              <Phone className="h-3.5 w-3.5 text-green-600" />
              {phoneDisplay}
            </a>
            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-green-600/20 transition hover:from-green-500 hover:to-emerald-500 hover:shadow-lg active:scale-95"
            >
              <Flame className="h-4 w-4 text-white" />
              <span>Ganhar 1 Dia Grátis</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-5 pt-3 pb-6 lg:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2.5">
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-700"
              >
                Por Que a Caf Sport?
              </a>
              <a
                href="#modalidades"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-700"
              >
                Modalidades & Musculação
              </a>
              <a
                href="#planos"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-700"
              >
                Tabela de Planos
              </a>
              <a
                href="#localizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-700"
              >
                Localização em São Pedro
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-700"
              >
                Opinião dos Alunos
              </a>
              <a
                href="#freepass"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-700"
              >
                Resgatar Treino Grátis
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-700"
              >
                Perguntas Frequentes
              </a>
              <div className="mt-2 pt-3 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:from-green-500 hover:to-emerald-500"
                >
                  <Flame className="h-4 w-4" />
                  <span>Resgatar Free Pass no WhatsApp</span>
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Phone className="h-3.5 w-3.5 text-green-600" />
                  Ligar: {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION - ESTILO BRANCO COM DETALHES EM VERDE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50/40 to-white pt-10 pb-16 md:pt-16 md:pb-24">
        {/* Soft Green Ambient Orbs */}
        <div className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-200/50 blur-3xl"></div>
        <div className="pointer-events-none absolute top-1/3 right-0 -z-10 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Texto Principal */}
            <div className="lg:col-span-7">
              {/* Badge de Horário e Destaque Verde */}
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100/70 px-4 py-1.5 text-xs font-bold text-green-800 shadow-xs">
                <Flame className="h-3.5 w-3.5 text-green-600 fill-current" />
                <span>Aberta das 06:00 às 22:00 • No Coração de São Pedro</span>
              </div>

              <h1 className="mt-5 font-[Outfit,sans-serif] text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight uppercase">
                A sua melhor versão começa perto de casa:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  sem filas e com suporte real.
                </span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Chega de perder tempo no trânsito até o centro ou esperar para revezar aparelhos em academias lotadas. 
                Na <strong>Caf Sport</strong> você encontra estrutura completa de musculação e cardio na <strong>Rua Luís Noguet Júnior</strong> 
                (ao lado do Posto São Pedro), personal na sala para orientar seus treinos e a melhor mensalidade do bairro.
              </p>

              {/* Botões de Ação */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#freepass"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-green-600/25 transition hover:from-green-500 hover:to-emerald-500 active:scale-95"
                >
                  <Flame className="h-4 w-4" />
                  <span>Resgatar 1 Dia de Treino Grátis</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-xs transition hover:bg-green-50/60 hover:border-green-400 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  <span>Chamar no WhatsApp: {phoneDisplay}</span>
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="mt-10 grid grid-cols-2 gap-3.5 border-t border-slate-200 pt-6 sm:grid-cols-4">
                <div className="rounded-2xl border border-green-100 bg-white p-3.5 shadow-xs">
                  <span className="text-2xl font-black text-green-600">06h - 22h</span>
                  <span className="block text-xs text-slate-500 font-semibold mt-0.5">Treine na sua hora</span>
                </div>
                <div className="rounded-2xl border border-green-100 bg-white p-3.5 shadow-xs">
                  <span className="text-2xl font-black text-green-600">Sem Filas</span>
                  <span className="block text-xs text-slate-500 font-semibold mt-0.5">Aparelhos livres</span>
                </div>
                <div className="rounded-2xl border border-green-100 bg-white p-3.5 shadow-xs">
                  <span className="text-2xl font-black text-green-600">Personal</span>
                  <span className="block text-xs text-slate-500 font-semibold mt-0.5">Acompanhamento</span>
                </div>
                <div className="rounded-2xl border border-green-100 bg-white p-3.5 shadow-xs">
                  <span className="text-2xl font-black text-green-600">São Pedro</span>
                  <span className="block text-xs text-slate-500 font-semibold mt-0.5">Ao lado do Posto</span>
                </div>
              </div>
            </div>

            {/* Card Visual Destacado Branco & Verde */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-3xl border border-green-200/90 bg-white p-6 shadow-xl shadow-green-950/5 sm:p-8">
                <div className="overflow-hidden rounded-2xl border border-slate-200 mb-5 relative aspect-[16/9] bg-slate-100">
                  <img
                    src="/images/gym_space.webp"
                    alt="Estrutura Caf Sport Academia"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-green-700 border border-green-200 shadow-xs">
                      <Award className="h-3.5 w-3.5 text-green-600" />
                      Estrutura Completa
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 font-[Outfit,sans-serif]">
                  Tudo o que você precisa para transformar seu corpo:
                </h3>

                <ul className="mt-5 space-y-3.5 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-green-100 p-1.5 text-green-700 shrink-0">
                      <Dumbbell className="h-4 w-4" />
                    </div>
                    <span><strong>Musculação Completa:</strong> pesos livres, anilhas olímpicas e máquinas guiadas modernas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-green-100 p-1.5 text-green-700 shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <span><strong>Professores na Sala:</strong> correção postural atenciosa e montagem de ficha personalizada.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-green-100 p-1.5 text-green-700 shrink-0">
                      <Music className="h-4 w-4" />
                    </div>
                    <span><strong>Energia e Música Boa:</strong> ambiente estimulante e ventilado para você treinar com prazer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-green-100 p-1.5 text-green-700 shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span><strong>Mensalidade Justa:</strong> planos acessíveis sem pegadinhas nem taxas abusivas.</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-green-50/80 p-4 border border-green-200/60">
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "Bem localizada, bom preço e disponibilidade de personal para treino! Bom gosto musical também! Recomendo muito!"
                  </p>
                  <p className="mt-2 text-right text-xs font-bold text-green-700">
                    — Laura Alves Lins (Google Local Guide)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DIFERENCIAIS DA CAF SPORT */}
      <section id="diferenciais" className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
              A Academia da Sua Região
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl uppercase font-[Outfit,sans-serif]">
              Por que a Caf Sport é o melhor lugar para seu treino?
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Menos burocracia, mais atenção e o foco total no seu objetivo físico.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-green-400 hover:shadow-lg hover:shadow-green-950/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900 font-[Outfit,sans-serif]">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MODALIDADES & TREINAMENTOS COM IMAGENS */}
      <section id="modalidades" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
              Treine com Propósito
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl uppercase font-[Outfit,sans-serif]">
              Modalidades & Espaço de Treinamento
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Seja para perder peso, ganhar massa muscular ou melhorar sua saúde geral, temos o programa certo para você.
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {modalities.map((mod, idx) => {
              const IconComp = mod.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-green-400 hover:shadow-xl hover:shadow-green-950/5"
                >
                  <div>
                    {/* Imagem de Alta Resolução */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      <img
                        src={mod.image}
                        alt={mod.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-green-700 border border-green-200 shadow-xs">
                          {mod.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700 shrink-0">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors font-[Outfit,sans-serif]">
                          {mod.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-slate-600">{mod.desc}</p>
                    </div>
                  </div>

                  <div className="px-6 pb-5 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">Caf Sport São Pedro</span>
                    <a
                      href="#freepass"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 hover:text-green-800 transition"
                    >
                      <span>Agendar Aula Grátis</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TABELA DE PLANOS DESCOMPLICADA */}
      <section id="planos" className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
              Valores Acessíveis
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl uppercase font-[Outfit,sans-serif]">
              Planos sem Pegadinhas
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Escolha a periodicidade ideal para o seu bolso e comece a treinar hoje mesmo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-3xl p-6 transition sm:p-8 ${
                  p.popular
                    ? "border-2 border-green-600 bg-white shadow-xl shadow-green-600/15"
                    : "border border-slate-200 bg-white shadow-sm"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-3.5 py-1 text-[11px] font-black uppercase text-white shadow-sm">
                    {p.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-[Outfit,sans-serif]">{p.name}</h3>
                  <div className="mt-4">
                    <span className="text-2xl font-black text-green-700">{p.price}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{p.period}</span>
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-xs text-slate-700">
                    {p.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={defaultWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full rounded-xl py-3 text-center text-xs font-bold transition ${
                      p.popular
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 shadow-md"
                        : "border border-green-200 bg-green-50/60 text-green-800 hover:bg-green-100 font-bold"
                    }`}
                  >
                    Consultar Valores no WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LOCALIZAÇÃO (SÃO PEDRO AO LADO DO POSTO) */}
      <section id="localizacao" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
                Fácil Acesso em São Pedro
              </span>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl uppercase font-[Outfit,sans-serif]">
                Onde Estamos
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                A <strong>Caf Sport</strong> está localizada em uma das ruas mais conhecidas de São Pedro, 
                logo ao lado do <strong>Posto de Gasolina</strong>. Fácil de chegar a pé, de moto, ônibus ou carro:
              </p>

              <div className="mt-6 space-y-3.5 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2 text-green-700">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span><strong>Endereço:</strong> R. Luís Noguet Júnior, 467 - São Pedro, Teresópolis - RJ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2 text-green-700">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span><strong>Horários:</strong> Segunda a Sexta das 06:00 às 22:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-100 p-2 text-green-700">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span><strong>WhatsApp Oficial:</strong> {phoneDisplay}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Ver no Google Maps</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-300 bg-green-50 px-5 py-3 text-xs font-bold text-green-800 transition hover:bg-green-100"
                >
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  <span>Chamar Recepção no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mapa Embutido Interativo */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-md">
                <iframe
                  title="Localização Caf Sport Academia - São Pedro"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4218321034444!2d-42.98183192383526!3d-22.427351621980833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b45942469d13%3A0x89569e38f97e7488!2sR.%20Lu%C3%ADs%20Noguet%20J%C3%BAnior%2C%20467%20-%20Bairro%20de%20S%C3%A3o%20Pedro%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025956-210!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROVA SOCIAL: AVALIAÇÕES GOOGLE MAPS (ZERO EMOJIS - LUCIDE STARS) */}
      <section id="depoimentos" className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 text-green-600 mb-2">
              <Star className="h-4 w-4 fill-green-600 text-green-600" />
              <Star className="h-4 w-4 fill-green-600 text-green-600" />
              <Star className="h-4 w-4 fill-green-600 text-green-600" />
              <Star className="h-4 w-4 fill-green-600 text-green-600" />
              <Star className="h-4 w-4 fill-green-600 text-green-600" />
            </div>
            <span className="block text-xs font-bold tracking-widest text-green-600 uppercase">
              Opinião de Quem Treina Conosco
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl uppercase font-[Outfit,sans-serif]">
              A Escolha dos Alunos de São Pedro
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Ambiente amigável, música de treino inspiradora e atenção de verdade da equipe.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-green-300 transition"
              >
                <div>
                  <div className="flex gap-1 text-green-600">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-green-600 text-green-600" />
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-700 italic">
                    "{t.content}"
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-green-700 font-medium">{t.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SIMULADOR DE FREE PASS / 1 DIA GRÁTIS */}
      <section id="freepass" className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-green-200 bg-gradient-to-b from-green-50/80 via-white to-green-50/50 p-6 shadow-xl shadow-green-950/5 sm:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-black tracking-widest text-green-600 uppercase">
                Passe Livre Sem Compromisso
              </span>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl uppercase font-[Outfit,sans-serif]">
                Ganhe 1 Dia de Treino Grátis
              </h2>
              <p className="mt-3 text-xs text-slate-600 sm:text-sm">
                Preencha os campos abaixo para gerar seu passe livre no WhatsApp da Caf Sport e venha conhecer nossa estrutura hoje mesmo!
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ex: Laura Alves"
                  className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-xs focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Seu Objetivo Principal
                  </label>
                  <select
                    value={trainingGoal}
                    onChange={(e) => setTrainingGoal(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-xs focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                  >
                    <option value="Ganho de Massa Muscular (Hipertrofia)">Ganho de Massa Muscular (Hipertrofia)</option>
                    <option value="Emagrecimento & Queima de Gordura">Emagrecimento & Queima de Gordura</option>
                    <option value="Condicionamento Físico & Saúde">Condicionamento Físico & Saúde</option>
                    <option value="Preparação para Concurso / TAF">Preparação para Concurso / TAF</option>
                    <option value="Fortalecimento / Dores na Coluna">Fortalecimento / Dores na Coluna</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Sua Experiência Atual
                  </label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-xs focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                  >
                    <option value="Iniciante (Vou começar do zero)">Iniciante (Vou começar do zero)</option>
                    <option value="Já treinei antes e quero voltar">Já treinei antes e quero voltar</option>
                    <option value="Treino atualmente em outra academia">Treino atualmente em outra academia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Qual Horário Você Pretende Treinar?
                </label>
                <div className="mt-2 flex gap-3">
                  {["Manhã (06h às 12h)", "Tarde (12h às 17h)", "Noite (17h às 22h)"].map((shift) => (
                    <label
                      key={shift}
                      className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border py-2.5 text-xs font-medium transition ${
                        preferredShift === shift
                          ? "border-green-600 bg-green-100 text-green-900 font-bold shadow-xs"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredShift"
                        value={shift}
                        checked={preferredShift === shift}
                        onChange={() => setPreferredShift(shift)}
                        className="sr-only"
                      />
                      <span>{shift}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Observações ou Dúvidas (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Gostaria de saber os valores do plano trimestral."
                  className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-xs focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 py-4 text-sm font-black uppercase text-white shadow-lg shadow-green-600/30 transition hover:from-green-500 hover:to-emerald-500 active:scale-95 flex items-center justify-center gap-2"
              >
                <Flame className="h-5 w-5 text-white" />
                <span>Garantir Meu Treino Grátis no WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-slate-500">
                Sem compromisso. Atendimento rápido de segunda a sexta das 06h às 22h.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 10. FAQ RÁPIDO */}
      <section id="faq" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-green-600 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl uppercase font-[Outfit,sans-serif]">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="mt-10 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-green-700"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-green-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. RODAPÉ ESPORTIVO BRANCO E VERDE */}
      <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-base font-black text-slate-900 uppercase tracking-wider font-[Outfit,sans-serif]">
                Caf <span className="text-green-600">Sport</span>
              </span>
              <p className="mt-1 text-xs text-green-700 font-bold">
                Centro de Treinamento em São Pedro
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                A sua academia de musculação, emagrecimento e qualidade de vida no coração de São Pedro, Teresópolis.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Localização
              </span>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                R. Luís Noguet Júnior, 467<br />
                (Ao lado do Posto de Gasolina)<br />
                Bairro de São Pedro, Teresópolis - RJ
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Horários
              </span>
              <p className="mt-2 text-xs text-slate-600">
                Segunda a Sexta:<br />
                06:00 às 22:00 (Ininterrupto)<br />
                Aberto para seu melhor treino
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Contato & WhatsApp
              </span>
              <p className="mt-2 text-xs text-slate-600">
                WhatsApp: {phoneDisplay}<br />
                Venha fazer uma visita e garantir seu Free Pass.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Caf Sport Academia • Todos os direitos reservados • Design & Performance por Cronos Agency</p>
          </div>
        </div>
      </footer>

      {/* 12. BARRA FLUTUANTE FIXA MOBILE BRANCA E VERDE */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-green-200 bg-white/95 p-3 shadow-2xl backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <span className="block text-xs font-black text-slate-900 uppercase font-[Outfit,sans-serif]">
              Caf <span className="text-green-600">Sport</span>
            </span>
            <span className="block text-[11px] text-green-700 font-semibold">06h às 22h • São Pedro</span>
          </div>
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2.5 text-xs font-black uppercase text-white shadow-md shadow-green-600/20 transition hover:from-green-500 hover:to-emerald-500 active:scale-95"
          >
            <Flame className="h-4 w-4 text-white" />
            <span>Treino Grátis</span>
          </a>
        </div>
      </div>
    </div>
  );
}
