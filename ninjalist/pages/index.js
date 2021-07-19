import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div >
      <Navbar/>
      <h1>HomePage</h1>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
      <Footer/>
    </div>
  )
}
