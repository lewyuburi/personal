import React from 'react';
import Image from 'next/image'
import 'twin.macro'

interface INavbarComponentProps {
  title?: string
  subtitle?: string
  logo?: string
}

const NavbarComponent = (props: INavbarComponentProps) => {
  return (
    <nav role="navigation">
      <div tw="container-xl mx-auto px-4 py-2 flex flex-wrap items-center md:flex-nowrap">

        <div tw="mr-4 md:mr-8">
          <div tw="flex items-center gap-4">
            {props?.logo && (
              <Image
                src={props.logo}
                alt="Picture of the author"
                width={48}
                height={48}
                tw="rounded-full"
              />
            )}
            <div tw="flex flex-col">
              {props?.title && (
                <a href="/" rel="home">
                  <span tw="text-lg	font-bold">
                    {props?.title}
                  </span>
                </a>
              )}
              {props?.subtitle && (
                <span tw="text-sm">
                  {props?.subtitle}
                </span>
              )}
            </div>
          </div>
        </div>

        <div tw="ml-auto md:hidden">
          <button tw="flex items-center p-4 rounded" type="button">
            <svg tw="h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div tw="w-full flex-1 md:w-auto md:flex-grow md:flex md:items-center">
          <ul tw="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <li>
              <a tw="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Inicio">Inicio</a>
            </li>
            <li>
              <a tw="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Sobre mi">Sobre mi</a>
            </li>
            <li>
              <a tw="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Contacto">Contacto</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavbarComponent;
