import Head from 'next/head'
import React from "react";
import Header from "./components/Header";
import SectionGoogleTasks from "./components/SectionGoogleTasks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <SectionGoogleTasks/>
        <Footer/>
      </main>
    </>
  )
}
