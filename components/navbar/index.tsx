import React from 'react';
import Image from 'next/image'
import tw from 'twin.macro'
import { useWindowScroll } from 'react-use';

interface INavbarComponentProps {
  title?: string
  subtitle?: string
  logo?: string
}

const NavbarComponent = (props: INavbarComponentProps) => {
  const scrollPos = useWindowScroll();
  const [showNav, setShowNav] = React.useState<boolean>(false)

  return (
    <nav
      css={[
        tw`sticky top-0 z-50 bg-white transition-all`,
        scrollPos.y > 100 && tw`box-shadow[0 1px 0 rgba(0,0,0,.05)]`
      ]}
      role="navigation"
    >
      <div tw="container-xl mx-auto px-4 py-2 flex flex-col flex-wrap items-center md:(flex-nowrap flex-row)">

        <div tw="flex w-full md:(w-auto)">
          <div tw="mr-4 md:(mr-8)">
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

          <div tw="ml-auto md:(hidden)" onClick={() => setShowNav(!showNav)}>
            <button tw="flex items-center p-4 rounded" type="button">
              <svg tw="h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div css={[tw`w-full flex-1 md:(w-auto flex-grow flex items-center flex)`, showNav ? tw`block` : tw`hidden`]}>
          <ul tw="flex flex-col mt-4 -mx-4 pt-4 border-t md:(flex-row items-center mx-0 ml-auto mt-0 pt-0 border-0)">
            <li>
              <a tw="text-3xl block px-4 py-1 md:(p-2) lg:(px-4)" href="#" title="Sobre mi">
                <i tw="align-middle" className="lab la-facebook" /> <span tw="text-base align-middle md:(hidden)">Facebook</span>
              </a>
            </li>

            <li>
              <a tw="text-3xl block px-4 py-1 md:(p-2) lg:(px-4)" href="#" title="Contacto">
                <i tw="align-middle" className="lab la-instagram"></i> <span tw="text-base align-middle md:(hidden)">Instagram</span>
              </a>
            </li>

            <li>
              <a tw="text-3xl block px-4 py-1 md:(p-2) lg:(px-4)" href="#" title="Contacto">
                <i tw="align-middle" className="lab la-twitter"></i> <span tw="text-base align-middle md:(hidden)">Twitter</span>
              </a>
            </li>

            <li>
              <a tw="text-3xl block px-4 py-1 md:(p-2) lg:(px-4)" href="#" title="Contacto">
                <i tw="align-middle" className="lab la-linkedin-in"></i> <span tw="text-base align-middle md:(hidden)">LinkedIn</span>
              </a>
            </li>

            <li>
              <a tw="text-3xl block px-4 py-1 md:(p-2) lg:(px-4)" href="#" title="Contacto">
                <i tw="align-middle" className="lab la-github"></i> <span tw="text-base align-middle md:(hidden)">Github</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavbarComponent;
