import Head from 'next/head'
import Link from 'next/link'
import styles from '@src/styles/Home.module.scss'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>DYNAMIC VARIABLES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DYNAMIC VARIABLES</h1>
        <div className={styles.subtitle}>Click on one of the link below</div>
        <span>
          <Link href="/test1">
            <a>TEST 1</a>
          </Link>
          <Link href="/test2">
            <a>TEST 2</a>
          </Link>
          <Link href="/test3">
            <a>TEST 3</a>
          </Link>
        </span>
      </main>

      <footer className={styles.footer}>
        ***
      </footer>
    </div>
  )
}
