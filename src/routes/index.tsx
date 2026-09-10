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
  Target
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
      desc: "Sala de musculação completa com pesos livres, halteres pesados, anilhas olímpicas e máquinas guiadas modernas para você desenvolver todos os grupos musculares com intensidade e segurança."
    },
    {
      title: "Área Cardio & Emagrecimento",
      tag: "Queima Calórica",
      icon: Flame,
      desc: "Esteiras de alta performance, bicicletas ergométricas e treinos aeróbicos estruturados para acelerar seu metabolismo, queimar gordura corporal e fortalecer sua capacidade pulmonar."
    },
    {
      title: "Personal & Acompanhamento na Sala",
      tag: "Suporte Real",
      icon: Users,
      desc: "Professores sempre presentes na sala para orientar a postura correta, ensinar a execução dos exercícios e montar fichas personalizadas conforme a sua evolução individual."
    },
    {
      title: "Treinamento Funcional & Agilidade",
      tag: "Mobilidade & Core",
      icon: Zap,
      desc: "Circuitos dinâmicos para ganho de coordenação motora, resistência aeróbica e fortalecimento do abdômen e lombar, prevenindo dores nas costas e lesões articulares."
    },
    {
      title: "Saúde, Longevidade & 3ª Idade",
      tag: "Qualidade de Vida",
      icon: HeartPulse,
      desc: "Exercícios adaptados com cargas progressivas para fortalecimento ósseo, ganho de massa magra protetora e melhora da flexibilidade e independência no dia a dia."
    },
    {
      title: "Preparação para TAF & Concursos",
      tag: "Foco em Metas",
      icon: Target,
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
      title: "Ambiente e Trilha Sonora Motivadora",
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
    <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-orange-500/30 selection:text-white pb-24 lg:pb-0">
      {/* 1. NAVBAR - HEADER LIMPA SEM ÍCONE */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/90 bg-[#09090B]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Apenas o nome da academia, sem ícone ao lado */}
          <a href="#" className="group flex flex-col justify-center">
            <span className="text-xl font-extrabold tracking-tight text-white transition group-hover:text-orange-500 sm:text-2xl uppercase">
              Caf Sport
            </span>
            <span className="text-[11px] font-bold tracking-widest text-orange-500 uppercase sm:text-xs">
              Academia & Centro de Treinamento • São Pedro
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#diferenciais" className="text-sm font-medium text-zinc-400 transition hover:text-orange-400">
              Diferenciais
            </a>
            <a href="#modalidades" className="text-sm font-medium text-zinc-400 transition hover:text-orange-400">
              Modalidades
            </a>
            <a href="#planos" className="text-sm font-medium text-zinc-400 transition hover:text-orange-400">
              Planos
            </a>
            <a href="#localizacao" className="text-sm font-medium text-zinc-400 transition hover:text-orange-400">
              Localização
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-zinc-400 transition hover:text-orange-400">
              Depoimentos
            </a>
            <a href="#freepass" className="text-sm font-medium text-zinc-400 transition hover:text-orange-400">
              Free Pass
            </a>
            <a href="#faq" className="text-sm font-medium text-zinc-400 transition hover:text-orange-400">
              Dúvidas
            </a>
          </nav>

          {/* Direct WhatsApp CTA Button */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-500 active:scale-95"
            >
              <Flame className="h-4 w-4" />
              <span>Ganhar 1 Dia Grátis</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-zinc-300 hover:bg-zinc-800 lg:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-zinc-800 bg-[#121215] px-4 pt-3 pb-6 lg:hidden">
            <div className="flex flex-col gap-3">
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
              >
                Por Que a Caf Sport?
              </a>
              <a
                href="#modalidades"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
              >
                Modalidades & Musculação
              </a>
              <a
                href="#planos"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
              >
                Tabela de Planos
              </a>
              <a
                href="#localizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
              >
                Localização em São Pedro
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
              >
                Opinião dos Alunos
              </a>
              <a
                href="#freepass"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
              >
                Resgatar Treino Grátis
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
              >
                Perguntas Frequentes
              </a>
              <div className="mt-2 pt-2 border-t border-zinc-800">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-orange-500"
                >
                  <Flame className="h-4 w-4" />
                  <span>Resgatar Free Pass no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION COM ENERGIA ATLÉTICA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#09090B] via-[#141418] to-[#09090B] pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Texto Principal */}
            <div className="lg:col-span-7">
              {/* Badge de Horário e Destaque */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold text-orange-400 shadow-sm">
                <Flame className="h-3.5 w-3.5 text-orange-500 fill-current" />
                <span>Aberta das 06:00 às 22:00 • No Coração de São Pedro</span>
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight uppercase">
                A sua melhor versão começa perto de casa:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                  sem filas e com suporte real.
                </span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
                Chega de perder tempo no trânsito até o centro ou esperar para revezar aparelhos em academias lotadas. 
                Na <strong>Caf Sport</strong> você encontra estrutura completa de musculação e cardio na <strong>Rua Luís Noguet Júnior</strong> 
                (ao lado do Posto São Pedro), personal na sala para corrigir sua postura e a melhor mensalidade do bairro.
              </p>

              {/* Botões de Ação */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#freepass"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 transition hover:from-orange-500 hover:to-orange-400 active:scale-95"
                >
                  <Flame className="h-4 w-4" />
                  <span>Resgatar 1 Dia de Treino Grátis</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 px-6 py-3.5 text-sm font-semibold text-zinc-200 shadow-sm transition hover:bg-zinc-700 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-orange-400" />
                  <span>Chamar no WhatsApp: {phoneDisplay}</span>
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-zinc-800/90 pt-6 sm:grid-cols-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-orange-500">06h - 22h</span>
                  <span className="text-xs text-zinc-400 font-medium">Treine na sua hora</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-orange-500">Sem Filas</span>
                  <span className="text-xs text-zinc-400 font-medium">Aparelhos livres</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-orange-500">Personal</span>
                  <span className="text-xs text-zinc-400 font-medium">Acompanhamento ativo</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-orange-500">São Pedro</span>
                  <span className="text-xs text-zinc-400 font-medium">Ao lado do Posto</span>
                </div>
              </div>
            </div>

            {/* Card Visual Destacado */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-3xl border border-zinc-800 bg-[#16161A] p-6 shadow-2xl shadow-orange-950/20 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
                  <Award className="h-3.5 w-3.5" />
                  <span>A Escolha Certa em São Pedro</span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-white">
                  Tudo o que você precisa para transformar seu corpo:
                </h3>

                <ul className="mt-5 space-y-4 text-sm text-zinc-300">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-orange-500/20 p-1 text-orange-400">
                      <Dumbbell className="h-4 w-4" />
                    </div>
                    <span><strong>Musculação Completa:</strong> pesos livres, anilhas e aparelhos para bíceps, pernas, costas e peito.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-orange-500/20 p-1 text-orange-400">
                      <Users className="h-4 w-4" />
                    </div>
                    <span><strong>Professores na Sala:</strong> correção postural atenciosa e montagem de ficha personalizada.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-orange-500/20 p-1 text-orange-400">
                      <Music className="h-4 w-4" />
                    </div>
                    <span><strong>Energia e Música Boa:</strong> ambiente estimulante e ventilado para você treinar com prazer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-orange-500/20 p-1 text-orange-400">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span><strong>Mensalidade Justa:</strong> planos acessíveis sem pegadinhas nem taxas de cancelamento abusivas.</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-zinc-900/90 p-4 border border-zinc-800">
                  <p className="text-xs text-zinc-400 leading-relaxed italic">
                    "Bem localizada, bom preço e disponibilidade de personal para treino! Bom gosto musical também! Recomendo muito!"
                  </p>
                  <p className="mt-2 text-right text-xs font-bold text-orange-400">
                    — Laura Alves Lins (Google Local Guide)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DIFERENCIAIS DA CAF SPORT */}
      <section id="diferenciais" className="py-16 bg-[#0E0E11] border-y border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              A Academia da Sua Região
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl uppercase">
              Por que a Caf Sport é o melhor lugar para seu treino?
            </h2>
            <p className="mt-3 text-sm text-zinc-400 sm:text-base">
              Menos burocracia, mais atenção e o foco total no seu objetivo físico.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800 bg-[#16161A] p-6 shadow-sm transition hover:border-orange-500/50 hover:bg-zinc-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODALIDADES & TREINAMENTOS */}
      <section id="modalidades" className="py-16 bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              Treine com Propósito
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl uppercase">
              Modalidades & Espaço de Treinamento
            </h2>
            <p className="mt-3 text-sm text-zinc-400 sm:text-base">
              Seja para perder peso, ganhar massa muscular ou melhorar sua saúde geral, temos o programa certo para você.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modalities.map((mod, idx) => {
              const IconComp = mod.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#141418] p-6 shadow-sm transition hover:border-orange-500/50 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-orange-500/10 px-2.5 py-1 text-[11px] font-bold text-orange-400">
                        {mod.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{mod.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">{mod.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-800/80">
                    <a
                      href="#freepass"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300"
                    >
                      <span>Quero treinar essa modalidade</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TABELA DE PLANOS DESCOMPLICADA */}
      <section id="planos" className="py-16 bg-[#0E0E11] border-y border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              Valores Acessíveis
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl uppercase">
              Planos sem Pegadinhas
            </h2>
            <p className="mt-3 text-sm text-zinc-400 sm:text-base">
              Escolha a periodicidade ideal para o seu bolso e comece a treinar hoje mesmo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-3xl p-6 transition sm:p-8 ${
                  p.popular
                    ? "border-2 border-orange-500 bg-[#18181D] shadow-xl shadow-orange-950/30"
                    : "border border-zinc-800 bg-[#141418]"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-600 px-3 py-1 text-[11px] font-black uppercase text-white shadow-sm">
                    {p.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <div className="mt-4">
                    <span className="text-2xl font-black text-orange-400">{p.price}</span>
                    <span className="block text-xs text-zinc-400">{p.period}</span>
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-zinc-800 pt-6 text-xs text-zinc-300">
                    {p.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
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
                        ? "bg-orange-600 text-white hover:bg-orange-500 shadow-md"
                        : "border border-zinc-700 bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
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

      {/* 6. LOCALIZAÇÃO (SÃO PEDRO AO LADO DO POSTO) */}
      <section id="localizacao" className="py-16 bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                Fácil Acesso em São Pedro
              </span>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl uppercase">
                Onde Estamos
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                A <strong>Caf Sport</strong> está localizada em uma das ruas mais conhecidas de São Pedro, 
                logo ao lado do <strong>Posto de Gasolina</strong>. Fácil de chegar a pé, de moto, ônibus ou carro:
              </p>

              <div className="mt-6 space-y-3.5 text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-orange-500/10 p-1.5 text-orange-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span><strong>Endereço:</strong> R. Luís Noguet Júnior, 467 - São Pedro, Teresópolis - RJ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-orange-500/10 p-1.5 text-orange-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span><strong>Horários:</strong> Segunda a Sexta das 06:00 às 22:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-orange-500/10 p-1.5 text-orange-400">
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-800 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-zinc-700"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Ver no Google Maps</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-500/40 bg-orange-500/10 px-5 py-3 text-xs font-bold text-orange-400 transition hover:bg-orange-500/20"
                >
                  <MessageCircle className="h-4 w-4 text-orange-400" />
                  <span>Chamar no WhatsApp da Recepção</span>
                </a>
              </div>
            </div>

            {/* Mapa Embutido Interativo */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-zinc-800 shadow-md">
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

      {/* 7. PROVA SOCIAL: AVALIAÇÕES GOOGLE MAPS */}
      <section id="depoimentos" className="py-16 bg-[#0E0E11] border-y border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <span className="block text-xs font-bold tracking-widest text-orange-500 uppercase">
              Opinião de Quem Treina Conosco
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl uppercase">
              A Escolha dos Alunos de São Pedro
            </h2>
            <p className="mt-3 text-sm text-zinc-400 sm:text-base">
              Ambiente amigável, música de treino inspiradora e atenção de verdade da equipe.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#16161A] p-6 shadow-sm"
              >
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-zinc-300 italic">
                    "{t.content}"
                  </p>
                </div>
                <div className="mt-6 border-t border-zinc-800 pt-4">
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-orange-400 font-medium">{t.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SIMULADOR DE FREE PASS / 1 DIA GRÁTIS */}
      <section id="freepass" className="py-16 bg-[#09090B]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-orange-500/40 bg-gradient-to-b from-orange-500/10 via-[#141418] to-[#121215] p-6 shadow-2xl sm:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-black tracking-widest text-orange-500 uppercase">
                Passe Livre Sem Compromisso
              </span>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl uppercase">
                Ganhe 1 Dia de Treino Grátis
              </h2>
              <p className="mt-3 text-xs text-zinc-400 sm:text-sm">
                Preencha os campos abaixo para gerar seu passe livre no WhatsApp da Caf Sport e venha conhecer nossa estrutura hoje mesmo!
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ex: Laura Alves"
                  className="mt-1.5 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Seu Objetivo Principal
                  </label>
                  <select
                    value={trainingGoal}
                    onChange={(e) => setTrainingGoal(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="Ganho de Massa Muscular (Hipertrofia)">Ganho de Massa Muscular (Hipertrofia)</option>
                    <option value="Emagrecimento & Queima de Gordura">Emagrecimento & Queima de Gordura</option>
                    <option value="Condicionamento Físico & Saúde">Condicionamento Físico & Saúde</option>
                    <option value="Preparação para Concurso / TAF">Preparação para Concurso / TAF</option>
                    <option value="Fortalecimento / Dores na Coluna">Fortalecimento / Dores na Coluna</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Sua Experiência Atual
                  </label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="Iniciante (Vou começar do zero)">Iniciante (Vou começar do zero)</option>
                    <option value="Já treinei antes e quero voltar">Já treinei antes e quero voltar</option>
                    <option value="Treino atualmente em outra academia">Treino atualmente em outra academia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  Qual Horário Você Pretende Treinar?
                </label>
                <div className="mt-2 flex gap-4">
                  {["Manhã (06h às 12h)", "Tarde (12h às 17h)", "Noite (17h às 22h)"].map((shift) => (
                    <label
                      key={shift}
                      className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border py-2.5 text-xs font-medium transition ${
                        preferredShift === shift
                          ? "border-orange-500 bg-orange-500/20 text-orange-400 font-bold"
                          : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:bg-zinc-800"
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
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  Observações ou Dúvidas (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Gostaria de saber os valores do plano trimestral."
                  className="mt-1.5 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 py-4 text-sm font-black uppercase text-white shadow-lg shadow-orange-600/30 transition hover:from-orange-500 hover:to-orange-400 active:scale-95 flex items-center justify-center gap-2"
              >
                <Flame className="h-5 w-5" />
                <span>Garantir Meu Treino Grátis no WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-zinc-500">
                Sem compromisso. Atendimento rápido de segunda a sexta das 06h às 22h.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 9. FAQ RÁPIDO */}
      <section id="faq" className="py-16 bg-[#0E0E11] border-t border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl uppercase">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="mt-10 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-800 bg-[#16161A] overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-white hover:text-orange-400"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-orange-500" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-zinc-400 border-t border-zinc-800/80 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. RODAPÉ ESPORTIVO */}
      <footer className="border-t border-zinc-800 bg-[#09090B] py-12 text-zinc-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-base font-black text-white uppercase tracking-wider">
                Caf Sport Academia
              </span>
              <p className="mt-1 text-xs text-orange-500 font-bold">
                Centro de Treinamento em São Pedro
              </p>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                A sua academia de musculação, emagrecimento e qualidade de vida no coração de São Pedro, Teresópolis.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Localização
              </span>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                R. Luís Noguet Júnior, 467<br />
                (Ao lado do Posto de Gasolina)<br />
                Bairro de São Pedro, Teresópolis - RJ
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Horários
              </span>
              <p className="mt-2 text-xs text-zinc-400">
                Segunda a Sexta:<br />
                06:00 às 22:00 (Ininterrupto)<br />
                Aberto para seu melhor treino
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Contato & WhatsApp
              </span>
              <p className="mt-2 text-xs text-zinc-400">
                WhatsApp: {phoneDisplay}<br />
                Venha fazer uma visita e garantir seu Free Pass.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Caf Sport Academia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* 11. BARRA FLUTUANTE FIXA MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-800 bg-[#0E0E11]/95 p-3 shadow-2xl backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <span className="block text-xs font-black text-white uppercase">Caf Sport</span>
            <span className="block text-[11px] text-orange-400 font-medium">06h às 22h • São Pedro</span>
          </div>
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-black uppercase text-white shadow-md transition hover:bg-orange-500 active:scale-95"
          >
            <Flame className="h-4 w-4" />
            <span>Treino Grátis</span>
          </a>
        </div>
      </div>
    </div>
  );
}
