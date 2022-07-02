import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
       <Header />
      {/* <SwapCryptoModal /> */}
      <div className='mt-10' />
      {/* <Trending /> */}
      <div className='mt-20' />
      {/* <CMCtable /> */}
    </div>
  )
}

export default Home
