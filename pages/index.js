import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello I'm <b>Erwan</b> :)
        </p>
        <p>
          ⚡ I'm a developper that likes to make bots (discord, games..., etc),
          learn new Frameworks, languages.
        </p>
        <p>
          🤪 I love sorting algorithm.
        </p>
        <p>
          ❓ You can find what I like to do in my <a href="https://github.com/erwanvivien?tab=repositories">github repositories</a>.
        </p>
        <p>
          📞 Don't hesitate to contact me via message.
        </p>
        <p>
          📧 or by e-mail <a href="mailto:vivien.erwan@gmail.com">vivien.erwan@gmail.com</a>.
        </p>
        <p>
          💰 If you want to contribute to my happiness you can always <a href="https://www.patreon.com/erwanvivien">become a patreon of mine</a>.
        </p>
        <br></br>
      </section>
      <footer>
        {/* 🤙 Do you want to get in touch ? <a href="tel:+33642490018">+33 6 42 49 00 18</a>. */}
      </footer>
    </Layout>
  )
}