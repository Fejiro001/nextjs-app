import Footer from '../components/footer'
import Header from '../components/header'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  // Week 11 (3rd Month)
  // To open another page use '/the_name'
  // Home page
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <title>Mixtape</title>
      </Head>
      <div>
        <h1>HOME</h1>

        <Image src='/oh.png' width={1500} height={500} alt='image'></Image>
      </div>
    </>
  )
}
