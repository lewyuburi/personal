import Link from "next/link";
import { FunctionComponent } from "react";

const uses = [
  {
    title: "Workspace + hardware + accesories",
    description: null,
    list: [
      {
        title: "💻 Apple MacBook Pro (2021)",
        description: `De 14", con el chip Apple Silicon M1 Pro, es el modelo básico
        que viene con 16GB RAM y 512GB de almacenamiento SSD, plateado.
        Todo mi entorno de desarrollo gira en torno a esta laptop.`,
        category: "Laptop principal",
      },
      {
        title: "💻 Asus VivoBook X412",
        description: `De 14", AMD Ryzen 5, 20GB RAM y 512GB de almacenamiento SSD, azul
        marino. No tiene un uso especifico, pero esta lista por si algo le sucede a la MacBook.`,
        category: "Laptop secundaria",
      },
      {
        title: "🖥️ Sceptre E275W-QPT",
        description: `27", Led, IPS, hasta 75 hercios, resolución cuádruple HD de 2560 x
        1440. Unica pantalla adicional (por ahora).`,
        category: "Monitor",
      },
      {
        title: "📱 Apple iPad Air (2022)",
        description: `Con el chip <span className="font-medium">Apple Silicon M1</span>,
        con 64GB de almacenamiento <i>because coud storage</i> ☁️, azul
        medianoche.`,
        category: "Tablet",
      },
      {
        title: "📱 Poco X3 GT",
        description: `Con el chip{" "}
        <span className="font-medium">MediaTek Dimensity 1100</span>, 8GB
        RAM y 128GB de almacenamiento, MIUI 13 (Android 12).`,
        category: "Teléfono móvil",
      },
      {
        title: "⌨️ Logitech MX Keys",
        description: `Inalámbrico, retroiluminado, con num-pad, bateria recargable que
        dura hasta 15 dias por carga completa, negro.`,
        category: "Teclado",
      },
      {
        title: "🖱️ Logitech MX Master 3",
        description: `Inalámbrico, 7 botones, bateria recargable que dura hasta 60 dias
        por carga completa, negro.`,
        category: "Ratón",
      },
      {
        title: "🎧 Turtle Beach Recon 50",
        description: `Cableados, micrófono omnidireccional extraíble, negro y azul.`,
        category: "Audifonos de diadema",
      },
      {
        title: "🎧 Huawei FreeBudss 4i",
        description: `Inalámbrico, cancelación activa de ruido, hasta 10 horas de
        reproducción continua + 12 horas del estuche de carga, baja
        latencia, blanco.`,
        category: "Earbuds",
      },
      {
        title: "⌚️ Huawei Band 6",
        description: `Pantalla AMOLED 1,47", hasta 2 semanas de carga, 96 modos de
        entrenamiento, resistente al agua, conteo de pasos, monitoreo de
        sueño, saturación de oxígeno y frecuencia cardiaca, verde oscuro.`,
        category: "Banda deportiva",
      },
      {
        title: "⬜️ Bezzen Goh Desk Pad",
        description: `Doble faz, 70cm x 30cm, cuero vegano, <i>made in Colombia</i> 🇨🇴,
        gris/negro.`,
        category: "Deskpad",
      },
      {
        title: "🗜️ North Bayou NB F80",
        description: `Hidráulico, hasta 6.5kg, VESA 75x75, 100x100 mm, elevación
        vertical 7.8 '(200 mm), rotación 360°, giro 180° +, ángulo de
        inclinación + 35° a -50°.`,
        category: "Soporte monitor",
      },
      {
        title: "⬆️ Vancold Portable Laptop Stand",
        description: `Aluminio, portable, ergonómico, antideslizante, plateado.`,
        category: "Soporte laptop",
      },
    ],
  },
  {
    title: "Aplicaciones",
    description: "",
    list: [
      {
        title: "📝 Visual Studio Code",
        description: `Principalmente para JavaScript/TypeScript, con el tema
        <a className="underline" target="_blank" rel="noreferrer noopener" href="https://marketplace.visualstudio.com/items?itemName=saschamt.framer-web-syntax">Framer Web Syntax</a>,
        JetBrains Mono como fuente y pocos plugins como ESLint, Prettier y Simple React Snippets. Confiable y el favorito de la comunidad.`,
        category: "Editor de texto",
      },
      {
        title: "📝 JetBrains Intellij (Community Edition)",
        description: `Para Kotlin. Con el tema Darcula Solid. Robusto y con muchas
        herramientas.`,
        category: "Editor de texto",
      },
      {
        title: "📝 JetBrains Fleet (Preview)",
        description: `Probando y viendo su evolución desde el alfa privado. Lo uso para
        Rust, Kotlin, Dart, Python y Ruby 👌. Es una delicia.`,
        category: "Editor de texto",
      },
      {
        title: "◼️ iTerm2 + ZSH + Oh-My-ZSH (y plugins)",
        description: `Como me gusta: con pestañas y división por paneles. El tema de ZSH es 
        <a className="underline" target="_blank" rel="noreferrer noopener" href="https://spaceship-prompt.sh/">Spaceship</a>
        y los plugins: git, zsh-autosuggestions`,
        category: "Terminal",
      },
      {
        title: "Git, Postman, Docker",
        description: "Git, desarrollo de APIs, gestión de contenedores",
        category: "Herramientas de desarrollo",
      },
      {
        title: "💬 Discord, Google Workspaces, Zoom, Jira Cloud",
        description: `Para la comunicación empresarial con colegas y colaboradores,
        incluyendo video-conferencias y gestión de incidencias`,
        category: "Comunicación",
      },
      {
        title: "🗒️ Notion",
        description: `De mis apps favoritas. Me sirve para tomar notas, 
        organizarme y llevar registros de cosas varias de mi dia a dia`,
        category: "Notas y más",
      },
      {
        title: "🎨 Figma",
        description: `La app por excelencia para diseño UI/UX.`,
        category: "Herramienta de diseño",
      },
      {
        title: "🌩️ One Drive",
        description: "Para almacenar cositas en la nube",
        category: "Cloud storage",
      },
    ],
  },
];

interface UsesPageProps {}

const UsesPage: FunctionComponent<UsesPageProps> = () => {
  return (
    <div className="container mx-auto pt-20 px-4 md:px-0">
      <div className="max-w-4xl">
        <p className="font-mono text-xl text-zinc-500">/uses</p>
        <h2 className="text-5xl font-bold text-zinc-800 mb-5">
          Dispositivos que amo, apps que uso y otras cosas que recomiendo 🤖.
        </h2>
      </div>

      <div className="max-w-2xl mb-10">
        <p className="text-zinc-700 mb-2">
          Tecnología que uso regularmente en mi día a día para hacer{" "}
          <i>cositas varias</i>👨‍💻, principalmente desarrollo de software,
          aprender, descubrir y navegar por internet.{" "}
        </p>

        <p className="text-zinc-700 mb-2">
          Trataré en lo posible de mantener actualizada esta lista y compartir
          cada experiencia, si hay algo que quieras saber al respecto{" "}
          <Link
            className="underline decoration-[#1DA1F2] decoration-wavy font-medium"
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/intent/tweet?text=@lewisyuburi+Hola!"
          >
            Twittéamelo 🐦
          </Link>
        </p>

        <p className="text-zinc-500">
          Esta página está inspirada en{" "}
          <Link
            className="underline decoration-[#EB4471]"
            href="https://uses.tech"
            target="_blank"
            rel="noreferrer noopener"
          >
            uses.tech
          </Link>{" "}
          de{" "}
          <Link
            className="underline decoration-[#ffc600]"
            href="https://wesbos.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            WesBos
          </Link>
          .
        </p>
      </div>

      {uses.map((section) => (
        <section className="text-zinc-800 mb-10">
          <h4 className="text-2xl font-bold mb-3">{section.title}</h4>
          {section.description !== null && (
            <p className="mb-3">{section.description}</p>
          )}

          <dl className="max-w-2xl pl-4 mb-4">
            {section.list.map((item) => (
              <div className="mb-5">
                <span className="block text-xs uppercase text-zinc-500 font-bold mb-1">
                  {item.category}
                </span>

                <dt className="font-bold">{item.title}</dt>

                <dd
                  className="pl-5 text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
};

export default UsesPage;
