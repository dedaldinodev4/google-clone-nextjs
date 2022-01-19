import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Google Clone UI</title>
        <meta name="description" content="Google Homepage clone UI" />
        <meta name="author" content="Dedaldino Daniel" />
        <meta name="email" content="Dedaldino4dev@gmail.com" />
        <link rel="icon" href="/assets/icon.png" />
      </Head>

  <body>
      {/*  Section Header */}
      <header className={styles.menu}>
        <div className={styles.menu__section +" left"}>
        </div>
        
        <div className={styles.menu__section +" right"}>
        <a className={styles.menu__link}>Gmail</a>
          <a className={styles.menu__link}>Images</a>
          <Image className={styles.menu__icon} 
            src="/assets/more-icon.svg" 
            alt="More" width={72} height={24} />

          <div className={styles.menu__profile}>
            <Image className="menu__avatar" 
            src="/assets/Me2.png" 
            alt="Mo" width={30} height={30} />
          </div>
        </div>

      </header>

      {/*  Section Main */}
      <main className={styles.content}>
        <Image className={styles.content__logo} 
            src="/assets/Google-Logo.wine.svg" 
            alt="Logo" width={400} height={140} 
        />
        <input className={styles.content__search} type='text'/>
        <div className="content__buttons">
          <button className={styles.btn}>Pesquisa Google</button>
          <button className={styles.btn}>Sintome-me com sorte</button>
        </div>
      </main>
        
      {/*  Section Footer */}
      <footer className="footer">
        <div className="footer__section footer__location">
          <span>Angola</span>
        </div>

        <div className="footer__section footer__links">
          <a>Sobre</a>
          <Link href={"https://github.com/dedaldinodev4/google-clone-nextjs"}>
            <a target="_blank">Repositório</a>
          </Link>
          <Link href={"https://github.com/dedaldinodev4"}>
            <a target="_blank">Meu Github</a>
          </Link>
          <Link href={"https://www.linkedin.com/in/dedaldino-daniel-francisco/"}>
            <a target="_blank">Meu Linkedin</a>
          </Link>
        </div>
       
      </footer>
    
    </body>

      
     
    </>
  )
}
