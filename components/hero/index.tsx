import React from 'react';
import tw from 'twin.macro'
import { useWindowScroll } from 'react-use'
import { formatDistance } from 'date-fns'
import { es } from 'date-fns/locale'

interface IHeroComponentProps {
  company?: string
  location?: string
}

const HeroComponent = (props: IHeroComponentProps) => {

  const scrollPos = useWindowScroll();

  const [codeData, setCodeData] = React.useState<string | null>(null)

  React.useEffect(() => {
    getCodeData()
  }, [])

  const getCodeData: any = async () => {
    const res = await fetch('https://raw.githubusercontent.com/lewyuburi/personal/beta/pages/index.tsx')
    const codeDataResponse: string = await res.text()

    setCodeData(codeDataResponse)
  }

  const getTimeAgo = (date: Date) => formatDistance(new Date('2011-09-30T08:00:40.000Z'), date,{ addSuffix: true, locale: es })

  return (
    <div tw="container-xl mx-auto py-32">
      <h2 tw="text-8xl font-extrabold text-center tracking-tighter">
        Easy code, easy life✌️
      </h2>
      <p tw="max-w-screen-sm mx-auto text-lg my-12 text-center text-gray-500">
        Soy <span tw="text-gray-900 font-medium">web {'&'} mobile developer</span> en <span tw="text-gray-900 font-medium">{props?.company}</span>,
        actualmente en <span tw="text-gray-900 font-medium">📍 {props?.location}</span>.<br/>
        He trabajado en <em>tech</em> desde <span tw="text-gray-900 font-medium">{getTimeAgo(new Date())}</span> pasando por varias{' '}
        empresas como agencias de desarrollo y <span>startups</span> en diferentes sectores como{' '}
        <abbr title="education + technology" tw="text-gray-900">edutech</abbr>, <abbr title="legal + technology" tw="text-gray-900">legaltech</abbr>,{' '}
        <abbr title="electronic (online) commerce" tw="text-gray-900">e-commerce</abbr>, <span tw="text-gray-900">¡e incluso una hidrológica!</span>
      </p>

      <div
        tw="
          mt-12 px-4 bg-transparent relative mx-auto
          perspective[1600px]
          perspective-origin[top]
          transform-style[preserve-3d]
          lg:(w-1/2)
        "
      >
        <div
          style={{
            transform: `
              scale(${scrollPos.y >= 0 && scrollPos.y < 300 ? (scrollPos.y / 3000) + 0.9 : 1})
              translate3d(0px, ${scrollPos.y < 300 ? scrollPos.y / 3 : 100}%, 0px)
              rotateX(${(scrollPos.y / 5) - 55 < 0 ? (scrollPos.y / 5) - 55 : 0}deg)
            `
          }}
          css={[
            tw`
              bg-white w-full z-10 rounded-3xl py-8 px-6 overflow-hidden sticky top-0 inset-x-auto left-1/2 transition-all ease-out border border-gray-100
              box-shadow[8rem 2rem 10rem rgb(34 211 238 / 40%), -8rem 2rem 10rem rgb(139 92 246 / 40%), 0 .25rem 1rem rgba(0,0,0,.2)]
              transform-style[preserve-3d]
              transform-origin[top center]
            `,

          ]}
        >
          <pre tw="font-light text-gray-500 text-sm">
            {codeData}
          </pre>
        </div>
      </div>

      <h3 tw="text-5xl -mt-32 font-extrabold text-center tracking-tighter">
        Web and mobile developer
      </h3>

    </div>
  );
};

export default HeroComponent;
