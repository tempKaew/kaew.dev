import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaew.dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto grid grid-cols-1 gap-4 min-h-screen'>
        <div className='py-20'>
          <h1 className="text-3xl font-bold font-bai-jamjuree text-center mb-6">
            Kaew.dev
          </h1>
          <h2 className="text-xl font-bai-jamjuree text-center">
            Start Your Website Today
          </h2>
        </div>
      </main>
    </>
  )
}
