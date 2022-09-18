import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about/about'
import Education from '../components/education/education'
import Header from '../components/header/header'
import Navbar from '../components/navbar/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thibaut Lehmann</title>
        <meta name="description" content="Thibaut Lehmann" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Header />
        <About />
        <Education />


      </main>


    </div>
  )
}

export default Home
