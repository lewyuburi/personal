import { FunctionComponent, use } from "react";
import Link from "next/link";

import { getRandomGif, gifCategory } from "services/gifService";
import { githubServiceProvider } from "services/githubService";

const githubService = githubServiceProvider();

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <>
      <div className="w-[800px] h-[800px] absolute top-[-200px] right-[-200px] blur-3xl rounded-full -z-[1] animate-pulse [animation-duration:10s] bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600" />

      <section className="w-full py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-sm md:max-w-4xl mb-10">
            <h3 className="text-zinc-800 text-7xl md:text-[120px] font-extrabold leading-none tracking-tight">
              <span
                className={`block md:inline-block w-full h-16 md:w-60 md:h-20 rounded-full bg-contain bg-center`}
                style={{
                  backgroundImage: `url('${getRandomGif(
                    gifCategory.PROGRAMMING
                  )}')`,
                }}
              />{" "}
              Easy code easy{" "}
              <span
                className={`inline-block w-10 h-10 md:w-16 md:h-16 rounded-full bg-lime-500`}
              />{" "}
              life{" "}
              <span
                className={`inline-block w-40 h-12 md:w-60 md:h-20 rounded-full bg-contain bg-center`}
                style={{
                  backgroundImage: `url('${getRandomGif(
                    gifCategory.ABSTRACT
                  )}')`,
                }}
              />{" "}
              ~
            </h3>
          </div>

          <div className="max-w-2xl mb-10">
            <p className="text-zinc-800 mb-1">
              Soy <strong>Lewis Yuburi</strong> 🖖, Venezolano 🇻🇪 en{" "}
              <strong>Bogotá, CO</strong>.
            </p>
            <p className="text-zinc-800 mb-1">
              Desarrollando productos digitales desde 2010, y siendo nerd desde
              siempre✌️.
            </p>
            <p className="text-zinc-800">
              Me gusta que los productos digitales se vean bien y funcionen
              mejor. Por eso he aprendido de{" "}
              <span className="font-bold">front-end</span>,{" "}
              <span className="font-bold">back-end</span>,{" "}
              <span className="font-bold">UI/UX</span> y{" "}
              <span className="font-bold">arquitectura de software</span>{" "}
              proactivamente y trato de mantenerme al dia con todo lo
              relacionado.
            </p>

            <hr className="border-t-1 border-zinc-900 my-8 opacity-10" />

            <div className="flex gap-2 items-center mb-2">
              <div className="flex items-center gap-2 m-0 leading-loose font-medium rounded-full bg-white inline-block pl-1 pr-3 py-0.5">
                <div
                  className="rounded-full w-7 h-7 bg-cover"
                  style={{
                    backgroundImage: `url("https://avatars.githubusercontent.com/u/2156790?v=4")`,
                  }}
                />
                <p className="m-0 leading-loose font-bold">Lew</p>
              </div>

              <i className="bi bi-x text-2xl" />

              <Link
                href="https://www.foodology.com.co/"
                target="_blank"
                rel="noreferrer noopener"
                className="m-0 leading-loose font-medium rounded-full bg-[#021c5c] text-white inline-block px-3 py-0.5"
              >
                Foodology
              </Link>
            </div>

            <p className="text-zinc-800">
              Actualmente{" "}
              <span className="font-medium italic">software developer</span> @{" "}
              <Link
                className="underline decoration-2 decoration-solid decoration-[#021c5c]"
                href="https://www.foodology.com.co/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Foodology
              </Link>{" "}
              donde aporto mi granito de arena desarrollando aplicaciones en pro
              de nuestra misión: crear el restaurante virtual más grande de
              América Latina 🧑‍💻.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-0"></div>
      </section>
    </>
  );
};

export default HomePage;
