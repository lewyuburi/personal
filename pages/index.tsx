import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import "twin.macro"

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'

import { IProfile } from '@/contracts/profile'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const res = await fetch('https://api.github.com/users/lewyuburi')
  const profile: IProfile = await res.json()

  return {
    props: {
      profile
    },
  }
}

const HomePage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

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

      <Hero
        company={props?.profile?.company}
        location={props?.profile?.location}
      />

    </React.Fragment>
  );
};

export default HomePage;
