import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from './../../components/templates/layout';
import ServiceOrdersLayout from './../../components/templates/serviceOrdersLayout';
import ContainerLayout from './../../components/templates/containerLayout';
import ClientContent from './../../components/modules/clientContent';
import AddNewClient from './../../components/modules/addNewClient'

import useUser from '../../lib/auth/useUser';
import useServiceOrder from './../../lib/service/useServiceOrder';

import useSWR from 'swr';
import {get} from './../../lib/api';

export default function Home() {

  const today = new Date();

  const { user } = useUser({ redirectTo: '/login' })
  //const { data: arrServiceOrder } = useSWR(() => ['/api/serviceOrders',user.token,user.userAccount.serviceCompany.id], async () => get('/api/serviceOrders',{serviceCompanyId:user.userAccount.serviceCompany.id, pageIndex:1, pageSize:1, status:'OPEN', query:''}, user.token))

 // const { arrServiceOrder } = useServiceOrder(user.token, user.userAccount.serviceCompany.id, today, today)

  if (!user || user.isLoggedIn === false ) {
    return <Layout>loading...</Layout>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mainteny Manager Clients</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout user={user}>
        <ContainerLayout title="Clients" buttonName="New Client" modalContent={AddNewClient}>
            <ClientContent />
        </ContainerLayout>
      </Layout>
  
    </div>
  )
}
