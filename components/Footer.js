import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        한컴타자 다이렉트링크는&nbsp;<a target='_blank' href='https://github.com'>GitHub</a>와&nbsp;<a href='https://app.netlify.com/' target='_blank'>Netlify</a>의 도움으로 만들어졌습니다.
        Version 2.4.0 Build 86747598634736659781 <code>master</code>/<code>45fec8d</code>
      </footer>
    </>
  )
}
