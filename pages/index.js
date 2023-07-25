import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import avatar from '../assets/avatar.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Skok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute',
            fontFamily: "Druk Wide Bold",
            fontWeight: 700,
            fontSize: "68px",
            lineHeight: "94px",
            color: "white",
            width: "970px",
            height: "282px",
            marginLeft: "29%", marginTop: "4%"
          }}>Turn Your Website Into Your Best Sales Person</span>

          <span style={{
            position: 'absolute',
            fontFamily: 'Rubik',
            fontWeight: 300,
            fontSize: "22px",
            lineHeight: "33px",
            color: "white",
            width: "582px",
            height: "99px",
            marginLeft: "49%", marginTop: "15%"
          }}>Triple your sales with a pixel-perfect website.
            At SmartSite Studio, we don’t just design and write code, we build a revenue-driving machine for your business.</span>
          <Image src={avatar} width={"100%"} height={"100%"} style={{ marginLeft: "18%", marginTop: "10%", display: 'block' }} />
          <div style={{
            position: 'absolute',
            display: 'flex',
            gap: '10px',
            marginLeft: "49%",
            marginTop: "-15%"
          }}>
            <button style={{
              width: "200px",
              height: "60px",
              padding: "21px 52px 21px 52px",
              borderRadius: "30px",
              backgroundColor: "#FF632C",
              borderColor: "#FF632C",
              color: 'white',
              fontFamily: "Druk Wide Bold",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "20.9px",
            }}>
              Talk to US
            </button>
            <button style={{
              width: "200px",
              height: "60px",
              padding: "21px 52px 21px 52px",
              borderRadius: "30px",
              backgroundColor: 'transparent',
              borderColor: "#0083FE",
              color: 'white',
              fontFamily: "Druk Wide Bold",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "20.9px",
            }}>
              See Portfolio
            </button>
          </div>
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
