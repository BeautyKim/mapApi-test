import KakaoMap from '@/components/kakaoMap'
import type { NextPage } from 'next'
import Head from 'next/head'

const KAKAOMAP_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>프론트 연습</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1> 카카오 지도</h1>
        <KakaoMap />
      </div>
    </>
  )
}

export default Home