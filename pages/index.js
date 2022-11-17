import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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
          아래 <code>링크</code> 중 하나를 클릭해 한컴타자의 여러가지 <code>게임과 프로그램</code>을 즐기세요!
        </p>
        <p className="description">
          <a target='_blank' href='https://tt-exam-c.malangmalang.com/typing/WebContent/?exercise=typing-writing'>한컴타자</a>
        </p>
        <p className="description">
          <code className='warnCode'>안내: 현재 한컴타자 동전쌓기는 말랑말랑플렛폼 서비스 업데이트에 의해 서버가 일시적으로 중단되었기 때문에 접속이 불가능 할 수 있습니다.</code>
        </p><br/>
        <p className="description">
          <a target='_blank' href='https://tt-coin-c.malangmalang.com/coinpile_sample/WebContent/?channel=1'>동전쌓기 채널 1</a>
        </p>
        <p className="description">
          <a target='_blank' href='https://tt-coin-c.malangmalang.com/coinpile_sample/WebContent/?channel=2'>동전쌓기 채널 2</a>
        </p>
        <p className="description">
          <a target='_blank' href='https://tt-mole-c.malangmalang.com/mole/WebContent/'>두더지잡기</a>
        </p>
        <p className="description">
          <a target='_blank' href='https://tt-block-c.malangmalang.com/Flip01/WebContent/'>판뒤집기</a>
        </p>
        <p className="description">
          <code className='warnCode'>안내: 현재 말랑말랑 산성비는 대전교육정보원에 의해 접속이 제한되었기 때문에 집에서 개인 컴퓨터로 접속해주세요!</code>
        </p><br/>
        <p className="description">
          <a target='_blank' disabled href='https://rain.malangmalang.com/'>말랑말랑 산성비</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
