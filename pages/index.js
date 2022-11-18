import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import LoaderGIF from '../public/Loader_Blue_a098n32.gif'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>한컴타자 다이렉트링크</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="한컴타자 다이렉트링크" />
        <p className="description">
          잠시만 기다려주세요! 한컴타자 서버에 연결하는 중입니다...
        </p><br/>
        <img src='/Loader_Blue_a098n32.gif' />
      </main>

      <Footer />
    </div>
  )
}
