import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
//import ManuelHeader from "../components/ManuelHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our smart contract" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*<ManuelHeader /> */}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
