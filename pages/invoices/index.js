import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from './../../components/templates/layout';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mainteny Manager Invoices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Invoice Module */}
      </Layout>
  
    </div>
  )
}