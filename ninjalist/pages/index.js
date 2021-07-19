import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ninja List | Home
        </title>
        <meta name='keywords' content='ninjas'/>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur, at veritatis illum tempore cum. Mollitia molestiae quam quod sint debitis, eligendi ipsum aliquam qui!</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quia incidunt sit totam modi ipsum dolorem, voluptatem ea eos officia, possimus iusto ex reiciendis nesciunt!</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
