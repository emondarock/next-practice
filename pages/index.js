import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from 'next/link'

export default function Home() {
  return (
      <>
        <Head>
            <title>Friend List | Home</title>
            <meta name={'keywords'} content={'friends'}/>
        </Head>
        <div>
          <h1 className={styles.title}>Homepage</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur atque cum debitis deleniti eaque earum enim et ex illum in nihil nobis porro quod quos recusandae tenetur, ullam!</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur atque cum debitis deleniti eaque earum enim et ex illum in nihil nobis porro quod quos recusandae tenetur, ullam!</p>
          <Link href="/friends"><a className={styles.btn}>See Friend List</a></Link>
        </div>
      </>
  )
}
