import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about/about'
import Education from '../components/education/education'
import Header from '../components/header/header'
import Hobbies from '../components/hobbies/hobbies'
import Line from '../components/line/line'
import Links from '../components/links/links'
import Navbar from '../components/navbar/navbar'
import Projects from '../components/projects/projects'
import Skills from '../components/skills/skills'
import styles from '../styles/Home.module.css'
import lines from '../styles/components/line.module.css'
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
        <div className={styles.gap}></div>

        <Links />
        <div className={styles.gap}></div>
        <About />
        <div className={styles.gap}></div>
        <Skills />
        <div className={styles.gap}></div>


        <Projects />
        <div className={styles.gap}></div>

        <Education />
        <div className={styles.gap}></div>

        <Hobbies />


        <div className={`${lines.line} ${lines.line1}`}></div>
        <div className={`${lines.line} ${lines.line2}`}></div>

      </main >


    </div >
  )
}

export default Home
