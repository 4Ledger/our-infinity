import React, { useState, useEffect, useRef } from "react";

// === ÍCONES DESENHADOS MANUALMENTE (Evita qualquer erro de biblioteca no CodeSandbox) ===
const IconBase = ({
  children,
  size = 24,
  strokeWidth = 2,
  className = "",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

const Heart = (props) => (
  <IconBase {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </IconBase>
);
const ArrowRight = (props) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </IconBase>
);
const Gift = (props) => (
  <IconBase {...props}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
  </IconBase>
);
const ChevronRight = (props) => (
  <IconBase {...props}>
    <path d="m9 18 6-6-6-6" />
  </IconBase>
);
const Hexagon = (props) => (
  <IconBase {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </IconBase>
);
const Power = (props) => (
  <IconBase {...props}>
    <path d="M12 2v10" />
    <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
  </IconBase>
);
const InfinityIcon = (props) => (
  <IconBase {...props}>
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
  </IconBase>
);
const Lock = (props) => (
  <IconBase {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconBase>
);
const User = (props) => (
  <IconBase {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconBase>
);
const KeyRound = (props) => (
  <IconBase {...props}>
    <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
    <path d="m21 2-9.6 9.6" />
    <circle cx="7.5" cy="15.5" r="5.5" />
  </IconBase>
);
const Mail = (props) => (
  <IconBase {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconBase>
);
const Send = (props) => (
  <IconBase {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </IconBase>
);

// === ÍCONE: CORAÇÃO DE SATURNO ===
const SaturnHeart = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <g transform="rotate(-15 50 55)">
      <path d="M 5 55 A 45 14 0 0 1 95 55" />
      <path d="M 5 55 A 45 6 0 0 1 95 55" />
    </g>
    <path
      d="M50 85 C50 85 15 60 15 35 C15 20 28 10 40 15 C45 17 50 25 50 25 C50 25 55 17 60 15 C72 10 85 20 85 35 C85 60 50 85 50 85 Z"
      fill="#27272a"
      strokeWidth="3"
    />
    <path d="M28 30 C30 25 35 23 38 23" strokeWidth="2" />
    <g transform="rotate(-15 50 55)">
      <path d="M 5 55 A 45 14 0 0 0 95 55" />
      <path d="M 5 55 A 45 6 0 0 0 95 55" />
    </g>
    <circle cx="68" cy="65" r="7" fill="#27272a" strokeWidth="2.5" />
  </svg>
);

export default function App() {
  // --- ESTADOS GERAIS ---
  const [currentPage, setCurrentPage] = useState(-4);
  const [loginName, setLoginName] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [emailSaved, setEmailSaved] = useState(false);
  const [showLoginHint, setShowLoginHint] = useState(false);

  const [isGlobalFading, setIsGlobalFading] = useState(false);

  // INJEÇÃO AUTOMÁTICA DO DESIGN (TAILWIND CSS)
  useEffect(() => {
    if (!document.getElementById("tailwind-cdn")) {
      const script = document.createElement("script");
      script.id = "tailwind-cdn";
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }
  }, []);

  // --- ESTADOS: TEXTOS ---
  const introText =
    "Oi, meu amor. Eu estava pensando em você. Como sempre, né? Só que dessa vez, preparei uma pequena surpresa... Está pronta?";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  const [storyIndex, setStoryIndex] = useState(0);
  const [storyFading, setStoryFading] = useState(false);
  const [storyDisplayedText, setStoryDisplayedText] = useState("");
  const [isStoryTyping, setIsStoryTyping] = useState(false);

  // --- ESTADOS: MINIJOGOS ---
  const [signalStage, setSignalStage] = useState(0);
  const [puzzleProgress, setPuzzleProgress] = useState(0);
  const [honeyGrid, setHoneyGrid] = useState([
    { id: 1, filled: false },
    { id: 2, filled: false },
    { id: 3, filled: false },
    { id: 4, filled: false },
    { id: 5, filled: false },
    { id: 6, filled: false },
    { id: 7, filled: false },
  ]);
  const [heartProgress, setHeartProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [heartFilled, setHeartFilled] = useState(false);

  // ========================================================================
  // --- IMAGENS DE CADA TELA (COLE OS SEUS LINKS AQUI) ---
  // ========================================================================
  const imgTela1 = "https://i.imgur.com/6P6xrdp.jpeg";
  const imgTela2 = "https://i.imgur.com/a3a3xuT.jpeg";
  const imgTela3 = "https://i.imgur.com/iptLYWP.jpeg";
  const imgTela4 = "https://i.imgur.com/hMrMq6m.jpeg";
  const imgTela5 = "https://i.imgur.com/yQwLUWL.jpeg";
  const imgTela6 = "https://i.imgur.com/a3a3xuT.jpeg";
  const imgTela7 =
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1080&h=1920&q=80";
  const imgTela8 =
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1080&h=1920&q=80";
  const imgTela9 =
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1080&h=1920&q=80";

  // === A MÁGICA DA FOTO TRISTE E FELIZ ACONTECE AQUI ===
  const imgTela10 =
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1080&h=1920&q=80"; // COLOQUE A FOTO TRISTE AQUI
  const imgTela11 =
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1080&h=1920&q=80"; // COLOQUE A FOTO FELIZ AQUI

  const imgTela12 =
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1080&h=1920&q=80";
  const imgTela13 =
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1080&h=1920&q=80";
  const imgTela14 =
    "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1080&h=1920&q=80";
  const imgTela15 =
    "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1080&h=1920&q=80";
  const imgTela16 =
    "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1080&h=1920&q=80";
  const imgTela17 =
    "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1080&h=1920&q=80";

  // Array consolidado para pré-carregamento no DOM
  const todasAsImagensUnicas = [
    ...new Set([
      imgTela1,
      imgTela2,
      imgTela3,
      imgTela4,
      imgTela5,
      imgTela6,
      imgTela7,
      imgTela8,
      imgTela9,
      imgTela10,
      imgTela11,
      imgTela12,
      imgTela13,
      imgTela14,
      imgTela15,
      imgTela16,
      imgTela17,
    ]),
  ];

  // DADOS DA HISTÓRIA INTERATIVA
  const storyFlow = [
    {
      type: "text",
      text: "Houve um tempo em que eu vivia sem você.",
      img: imgTela1,
      trans: "fade",
    },
    {
      type: "text",
      text: "Eu achava que a minha vida já estava completa...",
      img: imgTela2,
      trans: "blur",
    },
    {
      type: "game_signal",
      text: "Mas, um dia, um grande sinal luminoso apareceu no céu da minha vida. Mas não, não foi o do Batman...",
      img: imgTela3,
      trans: "zoom",
    },
    {
      type: "text",
      text: "E assim eu descobri que existia uma outra metade minha vivendo em outra parte do mundo.",
      img: imgTela4,
      trans: "fade",
    },
    {
      type: "game_puzzle",
      text: "Deslize para juntar as nossas metades.",
      img: imgTela5,
      trans: "slideUp",
    },
    {
      type: "text",
      text: "Agora, tudo o que eu vivi antes parece cinza.",
      img: imgTela6,
      grayscale: true,
      trans: "fade",
    },
    {
      type: "text",
      text: "Como eu sempre te digo, você adoça meus dias mais do que qualquer chocolate.",
      img: imgTela7,
      trans: "zoom",
    },
    {
      type: "text",
      text: "Como um favinho de mel.",
      img: imgTela8,
      trans: "fade",
    },
    {
      type: "game_honey",
      text: "Toque para preencher a nossa colmeia com a sua doçura...",
      img: imgTela9,
      trans: "slideUp",
    },
    {
      type: "text",
      text: "Mas me desculpe se, às vezes, eu sou intenso, sensível e inseguro demais.",
      img: imgTela10,
      trans: "shake",
    },
    {
      type: "game_heart",
      text: "Esse coração foi programado pra ficar vermelho quando você segurar ele. Caso veja azul, bom, é porque eu te amo.",
      img: imgTela10,
      imgHappy: imgTela11,
      trans: "zoom",
    },
    {
      type: "text",
      text: "Essa minha insegurança é puro instinto, sabia?",
      img: imgTela11,
      trans: "blur",
    },
    {
      type: "text",
      text: "É a reação de um pirata que se aventurou a vida inteira pelos mares...",
      img: imgTela12,
      trans: "fade",
    },
    {
      type: "text",
      text: "...e finalmente encontrou o maior tesouro de todos os oceanos.",
      img: imgTela13,
      trans: "slideUp",
    },
    {
      type: "text",
      text: "Ele não quer largar. Ele tem pavor de perder.",
      img: imgTela14,
      trans: "shake",
    },
    {
      type: "text",
      text: "Porque ele sabe que nunca mais vai encontrar nada igual.",
      img: imgTela15,
      trans: "blur",
    },
    {
      type: "text",
      text: "E você, meu amor... é o meu tesouro.",
      img: imgTela16,
      trans: "zoom",
    },
    {
      type: "text",
      text: "O melhor que eu já tive.",
      img: imgTela17,
      trans: "fade",
    },
  ];

  const getTransitionClass = (transType, isFading) => {
    if (isFading) {
      switch (transType) {
        case "zoom":
          return "opacity-0 scale-110";
        case "blur":
          return "opacity-0 blur-md scale-95";
        case "slideUp":
          return "opacity-0 translate-y-12";
        case "shake":
          return "opacity-0 -translate-x-6 blur-sm";
        case "fade":
        default:
          return "opacity-0 translate-y-4";
      }
    } else {
      switch (transType) {
        case "zoom":
          return "opacity-100 scale-100 blur-0";
        case "blur":
          return "opacity-100 blur-0 scale-100";
        case "slideUp":
          return "opacity-100 translate-y-0";
        case "shake":
          return "opacity-100 translate-x-0 blur-0";
        case "fade":
        default:
          return "opacity-100 translate-y-0";
      }
    }
  };

  const navigateTo = (page) => {
    if (isGlobalFading) return;
    setIsGlobalFading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsGlobalFading(false);
    }, 700);
  };

  const handleStartStory = () => {
    if (isGlobalFading) return;
    setIsGlobalFading(true);
    startBackgroundMusic();

    setTimeout(() => {
      setCurrentPage(1);
      setIsGlobalFading(false);
    }, 4500);
  };

  // --- SISTEMA DE ÁUDIO E EFEITOS ---
  const bgMusicRef = useRef(new Audio("")); // <<< COLE O SEU LINK DA MÚSICA DO DROPBOX AQUI
  const powerSoundRef = useRef(
    new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"
    )
  );
  const typeAudioPoolRef = useRef([]);
  const poolIndex = useRef(0);
  const duckTimeoutRef = useRef(null);

  const initAudio = () => {
    if (typeAudioPoolRef.current.length === 0) {
      for (let i = 0; i < 10; i++)
        typeAudioPoolRef.current.push(
          new Audio(
            "https://assets.mixkit.co/active_storage/sfx/2544/2544-preview.mp3"
          )
        );
    }
    [powerSoundRef.current, typeAudioPoolRef.current[0]].forEach((a) => {
      a.volume = 0;
      a.play()
        .then(() => {
          a.pause();
          a.currentTime = 0;
        })
        .catch(() => {});
    });
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = 0.5;
  };

  const startBackgroundMusic = () => {
    if (
      bgMusicRef.current.src &&
      bgMusicRef.current.src !== window.location.href
    ) {
      bgMusicRef.current.play().catch(() => {});
    }
  };

  const duckMusic = (duration) => {
    if (bgMusicRef.current) bgMusicRef.current.volume = 0.15;
    if (duckTimeoutRef.current) clearTimeout(duckTimeoutRef.current);
    duckTimeoutRef.current = setTimeout(() => {
      if (bgMusicRef.current) bgMusicRef.current.volume = 0.5;
    }, duration);
  };

  const playTypeClick = () => {
    if (typeAudioPoolRef.current.length === 0) return;
    const audio = typeAudioPoolRef.current[poolIndex.current];
    audio.pause();
    audio.currentTime = 0;
    audio.playbackRate = 0.9 + Math.random() * 0.2;
    audio.volume = 0.3 + Math.random() * 0.3;
    audio.play().catch(() => {});
    poolIndex.current =
      (poolIndex.current + 1) % typeAudioPoolRef.current.length;
  };

  const playHoneySound = () => {
    duckMusic(800);
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  };

  const playHeartSuccess = () => {
    duckMusic(3000);
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const playNote = (freq, startTime, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.1, startTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      osc.start(startTime);
      osc.stop(startTime + duration);
    };
    const now = ctx.currentTime;
    playNote(329.63, now, 1.5);
    playNote(415.3, now + 0.1, 1.5);
    playNote(493.88, now + 0.2, 1.5);
    playNote(659.25, now + 0.3, 2.5);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginName.trim().toLowerCase() === "laura" && loginPass === "2408") {
      navigateTo(-2);
    } else {
      navigateTo(-3);
    }
  };

  useEffect(() => {
    if (currentPage === -2) {
      let isMounted = true;
      const loadImages = async () => {
        const imagePromises = todasAsImagensUnicas.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          });
        });

        const minTimePromise = new Promise((resolve) =>
          setTimeout(resolve, 3500)
        );
        const maxTimePromise = new Promise((resolve) =>
          setTimeout(resolve, 10000)
        );

        await Promise.all([
          Promise.race([Promise.all(imagePromises), maxTimePromise]),
          minTimePromise,
        ]);

        if (isMounted) navigateTo(-1);
      };

      loadImages();
      return () => {
        isMounted = false;
      };
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 0) {
      let isCancelled = false;
      const typeText = async () => {
        await new Promise((resolve) => setTimeout(resolve, 600));
        for (let i = 0; i <= introText.length; i++) {
          if (isCancelled) return;
          setDisplayedText(introText.slice(0, i));
          if (i > 0 && introText[i - 1] !== " ") playTypeClick();
          if (i === introText.length) break;
          const char = introText[i];
          let delay = Math.random() * 40 + 40;
          if ([".", "?", "!"].includes(char)) delay = 500 + Math.random() * 200;
          else if (char === ",") delay = 250 + Math.random() * 100;
          else if (char === " ") delay = 60 + Math.random() * 20;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
        if (!isCancelled) setIsTypingDone(true);
      };
      typeText();
      return () => {
        isCancelled = true;
      };
    }
  }, [currentPage]);

  // === SOLUÇÃO DO BUG DO LOOP DO TEXTO ===
  // Agora usamos uma variável local `isCancelled` estrita. Se mudar de página, ela morre na hora.
  useEffect(() => {
    const currentStep = storyFlow[storyIndex];
    if (currentPage === 1 && currentStep) {
      let isCancelled = false;
      setIsStoryTyping(true);
      setStoryDisplayedText("");

      const typeText = async () => {
        await new Promise((resolve) => setTimeout(resolve, 400));
        for (let i = 0; i <= currentStep.text.length; i++) {
          if (isCancelled) return;
          setStoryDisplayedText(currentStep.text.slice(0, i));
          if (i === currentStep.text.length) break;
          const char = currentStep.text[i];
          let delay = Math.random() * 70 + 70;
          if ([".", "?", "!", "\n"].includes(char))
            delay = 1200 + Math.random() * 400;
          else if (char === ",") delay = 600 + Math.random() * 200;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
        if (!isCancelled) setIsStoryTyping(false);
      };
      typeText();
      return () => {
        isCancelled = true;
      };
    }
  }, [storyIndex, currentPage]);

  const handleSignalActivate = () => {
    // Bloqueia se o texto não terminou
    if (isStoryTyping || signalStage !== 0) return;
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

    setSignalStage(1);
    duckMusic(5500);
    if (powerSoundRef.current) {
      powerSoundRef.current.volume = 0.6;
      powerSoundRef.current.currentTime = 0;
      powerSoundRef.current.play().catch(() => {});
    }

    setTimeout(() => {
      setSignalStage(2);
      if (navigator.vibrate) navigator.vibrate(200);
    }, 1500);

    setTimeout(() => {
      setSignalStage(3);
    }, 4500);
  };

  const handleHoneyTap = (id) => {
    // Bloqueia se o texto não terminou
    if (isStoryTyping) return;

    setHoneyGrid((prev) => {
      const newGrid = prev.map((h) =>
        h.id === id ? { ...h, filled: true } : h
      );
      if (newGrid.every((h) => h.filled)) {
        if (navigator.vibrate) navigator.vibrate(50);
        playHeartSuccess();
        setTimeout(() => advanceStory(), 2000);
      } else {
        playHoneySound();
        if (navigator.vibrate) navigator.vibrate(20);
      }
      return newGrid;
    });
  };

  useEffect(() => {
    let interval;
    if (heartFilled) return;
    if (isHolding) {
      interval = setInterval(() => {
        setHeartProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsHolding(false);
            setHeartFilled(true);
            playHeartSuccess();
            if (navigator.vibrate) navigator.vibrate(50);
            setTimeout(() => advanceStory(), 3500);
            return 100;
          }
          return prev + 1.2;
        });
      }, 30);
    } else {
      interval = setInterval(
        () => setHeartProgress((p) => (p > 0 ? p - 2 : 0)),
        30
      );
    }
    return () => clearInterval(interval);
  }, [isHolding, heartFilled]);

  const handleStoryInteraction = () => {
    const currentStep = storyFlow[storyIndex];
    // === SOLUÇÃO DO BLOQUEIO DE TELA ===
    // Se o texto ainda estiver sendo digitado, o clique não faz ABSOLUTAMENTE NADA.
    if (isStoryTyping) {
      return;
    }

    if (currentStep.type === "text") {
      advanceStory();
    } else if (currentStep.type === "game_signal" && signalStage === 3) {
      advanceStory();
    }
  };

  const advanceStory = () => {
    if (storyFading) return;
    setStoryFading(true);
    setTimeout(() => {
      if (storyIndex < storyFlow.length - 1) {
        setStoryIndex((prev) => prev + 1);
        setStoryFading(false);
        setSignalStage(0);
      } else {
        navigateTo(2);
        setStoryFading(false);
      }
    }, 800);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const FORMSPREE_URL = "https://formspree.io/f/SEU_CODIGO_AQUI";
    const formData = new FormData(e.target);
    fetch(FORMSPREE_URL, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) setEmailSaved(true);
      })
      .catch(() => {
        setEmailSaved(true);
      });
  };

  const currentStep = storyFlow[storyIndex] || storyFlow[0];

  return (
    <div className="h-[100dvh] w-full bg-zinc-900 select-none touch-manipulation overflow-hidden">
      {/* SOLUÇÃO DE FLUIDEZ: CACHE FORÇADO DE IMAGENS NO DOM INVISÍVEL */}
      {/* Obriga o navegador a processar e pintar as imagens imediatamente */}
      <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden">
        {todasAsImagensUnicas.map((src) => (
          <img key={`cache-${src}`} src={src} alt="" />
        ))}
      </div>

      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-700 pointer-events-none ${
          isGlobalFading ? "opacity-100" : "opacity-0"
        }`}
      />

      {currentPage === -4 && (
        <div className="h-full w-full flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-sm bg-zinc-800/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-zinc-700/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500" />

            <div className="flex flex-col items-center justify-center mb-8 relative">
              <button
                type="button"
                onClick={() => {
                  setShowLoginHint(!showLoginHint);
                  if (navigator.vibrate) navigator.vibrate(20);
                }}
                className="focus:outline-none transition-transform active:scale-95 hover:scale-105"
              >
                <SaturnHeart className="w-20 h-20 text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] mb-4" />
              </button>
              <h1 className="text-pink-400/90 font-serif text-xs tracking-[0.25em] uppercase text-center">
                Conexão e Singularidade
              </h1>

              {showLoginHint && (
                <div className="absolute top-[85%] mt-4 w-full bg-pink-500/10 border border-pink-500/30 p-3 rounded-xl animate-fade-in z-10 backdrop-blur-md shadow-xl">
                  <p className="text-pink-200 text-xs text-center font-medium leading-relaxed">
                    Dica: A mulher mais linda do mundo nasceu nesse dia (DD/MM).
                  </p>
                </div>
              )}
            </div>

            <h2 className="text-2xl font-bold text-white text-center mb-2 tracking-wide">
              Acesso Restrito
            </h2>
            <p className="text-zinc-400 text-center text-sm mb-8">
              Apenas o amor da minha vida pode acessar o conteúdo
              disponibilizado aqui. Por favor, identifique-se antes de
              prosseguir.
            </p>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Nome"
                  value={loginName}
                  onChange={(e) => setLoginName(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-700 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-pink-500 transition-colors placeholder:text-zinc-600"
                  required
                />
              </div>
              <div className="relative">
                <KeyRound
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-700 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-pink-500 transition-colors placeholder:text-zinc-600 tracking-widest"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-white hover:bg-zinc-200 text-zinc-900 font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Entrar <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {currentPage === -3 && (
        <div className="h-full w-full flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-sm bg-zinc-800/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-rose-500/30 text-center">
            <Heart
              size={50}
              className="text-rose-400 mx-auto mb-6 fill-rose-400/20"
              strokeWidth={1.5}
            />
            <h2 className="text-xl font-bold text-white mb-4">
              Acho que você errou, meu amor.
            </h2>
            <div className="bg-zinc-900/50 border border-zinc-700 p-4 rounded-xl mb-8">
              <p className="text-sm text-zinc-300 font-medium">Dica:</p>
              <p className="text-xs text-zinc-400 mt-1">
                A senha é a data em que o mundo ficou mais bonito. Quando você
                nasceu? (4 números: DDMM)
              </p>
            </div>
            <button
              onClick={() => navigateTo(-4)}
              className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-all"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      )}

      {currentPage === -2 && (
        <div className="h-full w-full bg-zinc-950 flex flex-col items-center justify-center p-6 text-white overflow-hidden">
          <div className="relative animate-pulse flex items-center justify-center">
            <InfinityIcon
              size={100}
              className="text-zinc-300 stroke-[1px] drop-shadow-[0_0_20px_rgba(212,212,216,0.5)]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white] animate-ping" />
            </div>
          </div>
          <p className="mt-12 font-mono text-zinc-500 tracking-[0.4em] uppercase text-xs opacity-70 animate-pulse">
            Sincronizando
          </p>
        </div>
      )}

      {(currentPage === -1 || currentPage === 0) && (
        <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-6">
          <div className="max-w-md w-full bg-zinc-800/90 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 sm:p-10 text-center border border-zinc-700/50 overflow-hidden relative">
            {currentPage === -1 && (
              <div className="flex flex-col items-center justify-center min-h-[300px]">
                <div className="relative mb-8">
                  <Heart
                    size={70}
                    className="text-pink-500 animate-pulse fill-pink-500/20"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-10 tracking-wide">
                  Então é você mesmo...
                </h2>
                <button
                  onClick={() => {
                    initAudio();
                    navigateTo(0);
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 active:scale-95 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-3 text-lg"
                >
                  Acessar Conteúdo <Gift size={22} />
                </button>
              </div>
            )}
            {currentPage === 0 && (
              <div className="flex flex-col items-center justify-center min-h-[300px]">
                <p className="text-xl sm:text-2xl font-serif text-zinc-300 leading-relaxed mb-10 min-h-[140px] text-left w-full">
                  {displayedText}
                  {!isTypingDone && (
                    <span className="animate-pulse inline-block w-1.5 h-6 bg-pink-500 ml-1.5 align-middle rounded-full"></span>
                  )}
                </p>
                <div
                  className={`transition-all duration-1000 w-full ${
                    isTypingDone
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <button
                    onClick={handleStartStory}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 active:scale-95 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 shadow-lg text-lg"
                  >
                    Estou pronta <ArrowRight size={22} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {currentPage === 1 && (
        <div
          className="h-full w-full flex flex-col items-center justify-center relative bg-black"
          onClick={handleStoryInteraction}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all ease-in-out ${
              storyFading
                ? "opacity-0 duration-700"
                : "opacity-60 duration-1000"
            }`}
            style={{
              backgroundImage: `url(${currentStep.img})`,
              filter: currentStep.grayscale
                ? "grayscale(100%)"
                : "grayscale(0%)",
            }}
          />

          {currentStep.type === "game_heart" && currentStep.imgHappy && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${currentStep.imgHappy})`,
                opacity: heartFilled && !storyFading ? 0.6 : 0,
              }}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 via-black/40 to-black/90 z-0" />

          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-0 pointer-events-none" />

          <div
            className={`absolute inset-0 bg-black z-10 transition-opacity ease-in-out ${
              currentStep.type === "game_signal" && signalStage >= 1
                ? "opacity-100 duration-[1500ms]"
                : "opacity-0 duration-[1000ms] pointer-events-none"
            }`}
          />

          <div
            className={`relative z-20 px-6 w-full max-w-xl text-center flex flex-col h-full justify-center items-center transition-all duration-1000 ${getTransitionClass(
              currentStep.trans,
              storyFading ||
                (currentStep.type === "game_signal" && signalStage >= 1)
            )}`}
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-serif text-white/95 leading-relaxed drop-shadow-2xl ${
                currentStep.type !== "text" ? "mb-8 sm:mb-12 min-h-[80px]" : ""
              }`}
            >
              {storyDisplayedText}
              {isStoryTyping && (
                <span className="animate-pulse inline-block w-1 h-[0.8em] bg-white/70 ml-1 align-middle rounded-full"></span>
              )}
            </h2>

            {currentStep.type === "game_signal" && (
              <div className="w-full flex flex-col items-center">
                <div
                  className={`transition-all duration-1000 ${
                    signalStage >= 1
                      ? "opacity-0 pointer-events-none scale-90 absolute"
                      : "opacity-100 scale-100 relative"
                  }`}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSignalActivate();
                    }}
                    className="mx-auto flex flex-col items-center justify-center w-32 h-32 rounded-full border border-yellow-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(234,179,8,0.15)] active:scale-90 transition-transform"
                  >
                    <Power size={40} className="text-yellow-400 mb-2" />
                    <span className="text-yellow-400/80 text-[10px] sm:text-xs tracking-widest uppercase font-bold">
                      Ativar Sinal
                    </span>
                  </button>
                </div>
              </div>
            )}

            {currentStep.type === "game_puzzle" && (
              <div className="w-full bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
                <Heart
                  size={36}
                  className={`mx-auto mb-6 transition-all duration-700 ${
                    puzzleProgress == 100
                      ? "text-pink-500 fill-pink-500 scale-125"
                      : "text-white/50"
                  }`}
                />
                <div className="relative w-56 h-56 mx-auto mb-8">
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-l-2xl shadow-2xl z-20 border-r border-black/20"
                    style={{
                      backgroundImage: `url(${currentStep.img})`,
                      clipPath: "inset(0 50% 0 0)",
                      transform: `translateX(-${100 - puzzleProgress}px)`,
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-r-2xl shadow-2xl z-10 border-l border-black/20"
                    style={{
                      backgroundImage: `url(${currentStep.img})`,
                      clipPath: "inset(0 0 0 50%)",
                      transform: `translateX(${100 - puzzleProgress}px)`,
                    }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={puzzleProgress}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    setPuzzleProgress(e.target.value);
                    if (e.target.value == 100) {
                      if (navigator.vibrate) navigator.vibrate(50);
                      setTimeout(() => advanceStory(), 800);
                    }
                  }}
                  disabled={puzzleProgress == 100 || isStoryTyping}
                  className="w-full h-4 bg-black/40 rounded-full appearance-none cursor-pointer accent-pink-500 shadow-inner"
                  style={{ WebkitAppearance: "none" }}
                />
              </div>
            )}

            {currentStep.type === "game_honey" && (
              <div className="w-full flex flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex justify-center gap-1">
                    {[honeyGrid[0], honeyGrid[1]].map((h) => (
                      <button
                        key={h.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleHoneyTap(h.id);
                        }}
                        disabled={h.filled || isStoryTyping}
                        className="focus:outline-none hover:scale-105 active:scale-95 transition-transform"
                      >
                        <Hexagon
                          size={64}
                          strokeWidth={1.5}
                          className={`transition-all duration-500 ${
                            h.filled
                              ? "fill-amber-500 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]"
                              : "fill-black/30 text-white/30 backdrop-blur-sm"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-center gap-1 -mt-[14px] sm:-mt-4">
                    {[honeyGrid[2], honeyGrid[3], honeyGrid[4]].map((h) => (
                      <button
                        key={h.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleHoneyTap(h.id);
                        }}
                        disabled={h.filled || isStoryTyping}
                        className="focus:outline-none hover:scale-105 active:scale-95 transition-transform z-10"
                      >
                        <Hexagon
                          size={64}
                          strokeWidth={1.5}
                          className={`transition-all duration-500 ${
                            h.filled
                              ? "fill-amber-500 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]"
                              : "fill-black/30 text-white/30 backdrop-blur-sm"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-center gap-1 -mt-[14px] sm:-mt-4">
                    {[honeyGrid[5], honeyGrid[6]].map((h) => (
                      <button
                        key={h.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleHoneyTap(h.id);
                        }}
                        disabled={h.filled || isStoryTyping}
                        className="focus:outline-none hover:scale-105 active:scale-95 transition-transform"
                      >
                        <Hexagon
                          size={64}
                          strokeWidth={1.5}
                          className={`transition-all duration-500 ${
                            h.filled
                              ? "fill-amber-500 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]"
                              : "fill-black/30 text-white/30 backdrop-blur-sm"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                {honeyGrid.every((h) => h.filled) && (
                  <p className="text-amber-400 font-medium mt-10 animate-fade-in flex items-center justify-center gap-2">
                    <Heart size={18} className="fill-amber-400" /> Doce como
                    você.
                  </p>
                )}
              </div>
            )}

            {currentStep.type === "game_heart" && (
              <div className="w-full flex flex-col items-center">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center mb-8">
                  <Heart
                    size={140}
                    strokeWidth={1}
                    className="text-white/20 absolute"
                  />
                  <Heart
                    size={140}
                    strokeWidth={0}
                    className={`text-blue-500 fill-blue-500 absolute transition-all duration-75 ${
                      heartFilled
                        ? "scale-110 drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]"
                        : ""
                    }`}
                    style={{
                      transform: heartFilled
                        ? "scale(1.1)"
                        : `scale(${heartProgress / 100})`,
                      opacity: heartFilled ? 1 : heartProgress / 100,
                    }}
                  />

                  {heartFilled && (
                    <div className="absolute w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-blue-400 animate-ping opacity-50 pointer-events-none" />
                  )}

                  <button
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      if (isStoryTyping) return;
                      setIsHolding(true);
                    }}
                    onMouseUp={(e) => {
                      e.stopPropagation();
                      setIsHolding(false);
                    }}
                    onMouseLeave={(e) => {
                      e.stopPropagation();
                      setIsHolding(false);
                    }}
                    onTouchStart={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      if (isStoryTyping) return;
                      setIsHolding(true);
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setIsHolding(false);
                    }}
                    disabled={heartFilled}
                    className="absolute inset-0 z-10 w-full h-full rounded-full focus:outline-none"
                  />
                </div>
                <p
                  className={`font-mono text-sm tracking-[0.3em] font-bold transition-colors ${
                    heartFilled ? "text-blue-500" : "text-white/50"
                  }`}
                >
                  {heartFilled ? "100%" : `${Math.floor(heartProgress)}%`}
                </p>
              </div>
            )}
          </div>

          {currentStep.type === "game_signal" && (
            <>
              <div
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-30 transition-opacity duration-300 ${
                  signalStage >= 2 ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <h1 className="text-[200px] sm:text-[280px] font-serif font-black text-yellow-300 drop-shadow-[0_0_80px_rgba(253,224,71,1)] animate-pulse">
                  L
                </h1>
              </div>
              <div
                className={`fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-1000 ${
                  signalStage === 3
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                }`}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    advanceStory();
                  }}
                  className="flex items-center gap-2 text-black font-bold border border-yellow-400 px-6 py-3 rounded-full bg-yellow-400 animate-bounce active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.5)]"
                >
                  Seguir o sinal <ArrowRight size={18} />
                </button>
              </div>
            </>
          )}

          {currentStep.type === "text" && !isStoryTyping && (
            <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 pointer-events-none text-white/40 text-[10px] sm:text-xs tracking-[0.2em] uppercase animate-pulse">
              <p className="flex items-center gap-2 bg-black/40 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/5 shadow-xl">
                Toque para continuar <ChevronRight size={14} />
              </p>
            </div>
          )}
        </div>
      )}

      {currentPage === 2 && (
        <div className="h-full w-full flex flex-col items-center justify-center p-6 bg-black text-center">
          <div className="max-w-md w-full">
            <div className="text-center mb-10 animate-fade-in">
              <Heart
                size={60}
                className="text-pink-500 mb-6 mx-auto fill-pink-500/30 animate-pulse drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                strokeWidth={1}
              />
              <h2 className="text-4xl font-serif text-white mb-2">Te amo.</h2>
              <p className="text-zinc-400 text-lg mb-12">
                Você e eu, pra sempre.
              </p>
            </div>
            <div
              className="bg-zinc-800/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-zinc-700/50 animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              {!emailSaved ? (
                <>
                  <div className="flex items-center justify-center gap-2 text-pink-400 mb-4">
                    <Gift size={20} />
                    <h3 className="font-bold tracking-wide">
                      Surpresas Futuras
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-center text-sm mb-6">
                    Deixe seu melhor e-mail aqui se quiser continuar recebendo
                    surpresas minhas.
                  </p>
                  <form onSubmit={handleEmailSubmit} className="space-y-3">
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        className="w-full bg-zinc-900/50 border border-zinc-700 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-pink-500 transition-colors placeholder:text-zinc-600 text-sm"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      Quero receber <Send size={16} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4 animate-fade-in">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-pink-500/50">
                    <Heart size={24} className="text-pink-400 fill-pink-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">
                    E-mail guardado!
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Fique de olho na sua caixa de entrada nos próximos meses...
                  </p>
                </div>
              )}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => {
                  setStoryIndex(0);
                  setSignalStage(0);
                  setPuzzleProgress(0);
                  setHeartProgress(0);
                  setHeartFilled(false);
                  setHoneyGrid(honeyGrid.map((h) => ({ ...h, filled: false })));
                  setLoginName("");
                  setLoginPass("");
                  setEmailSaved(false);
                  setShowLoginHint(false);
                  if (bgMusicRef.current) {
                    bgMusicRef.current.pause();
                    bgMusicRef.current.currentTime = 0;
                  }
                  navigateTo(-4);
                }}
                className="text-zinc-600 font-medium hover:text-pink-400 transition-colors tracking-widest text-[10px] uppercase underline"
              >
                Recomeçar tudo
              </button>
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; opacity: 0; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; height: 28px; width: 28px; border-radius: 50%; background: #ec4899; border: 4px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.4); }
      `,
        }}
      />
    </div>
  );
}
