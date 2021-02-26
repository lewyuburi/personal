import React from 'react';
import { GetStaticProps, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import Head from 'next/head'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'

import { IProfile } from '@/contracts/profile'

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch('https://api.github.com/users/lewyuburi')
  const profile: IProfile = await res.json()

  return {
    props: {
      profile
    },
  }
}

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <React.Fragment>

      <Head>
        <title>Lewis Yuburi - Web and mobile developer</title>
      </Head>

      <Navbar
        title={props?.profile?.name}
        subtitle={props?.profile?.bio}
        logo={props?.profile?.avatar_url}
      />

      <Hero />

    </React.Fragment>
  );
};

export default HomePage;
