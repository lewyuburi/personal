import Link from "next/link";
import { FunctionComponent } from "react";

import { getRandomGif, gifCategory } from "services/gifService";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <>
      <section className="w-full py-32">
        <div className="w-96 h-96 absolute inset-0 blur-3xl rounded-full -z-[1] bg-gradient-to-br from-sky-500 to-pink-500" />

        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-4xl mx-auto mb-10">
            <h3 className="text-zinc-800 text-[112px] font-black leading-none">
              <span
                className={`inline-block w-60 h-20 mr-4 rounded-full bg-cover bg-center`}
                style={{
                  backgroundImage: `url('${getRandomGif(
                    gifCategory.PROGRAMMING
                  )}')`,
                }}
              />
              Easy code easy{" "}
              <span
                className={`inline-block w-16 h-16 mr-5 rounded-full bg-lime-500`}
              />
              life{" "}
              <span
                className={`inline-block w-60 h-20 mr-4 rounded-full bg-cover bg-center`}
                style={{
                  backgroundImage: `url('${getRandomGif(
                    gifCategory.ABSTRACT
                  )}')`,
                }}
              />
              ~
            </h3>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-lg	text-center text-zinc-500 mb-2">
              Soy Lewis Yuburi🖖, Venezolano 🇻🇪 radicado en Bogotá, CO 🇨🇴.
            </p>
            <p className="text-lg	text-center text-zinc-500">
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
    </>
  );
};

export default HomePage;
