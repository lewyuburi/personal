import React from 'react';
import 'twin.macro'

const NavbarComponent = () => {
  return (
    <nav role="navigation">
      <div tw="container mx-auto p-4 flex flex-wrap items-center md:flex-nowrap">
        <div tw="mr-4 md:mr-8">
          <a href="#" rel="home">
            Lewis Yuburi
          </a>
        </div>
        <div tw="ml-auto md:hidden">
          <button tw="flex items-center px-3 py-2 border rounded" type="button">
            <svg tw="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div tw="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <ul tw="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <li>
              <a tw="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Link</a>
            </li>
            <li>
              <a tw="block px-4 py-1 md:p-2 lg:px-4 text-purple-600" href="#" title="Active Link">Active Link</a>
            </li>
            <li>
              <a tw="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
