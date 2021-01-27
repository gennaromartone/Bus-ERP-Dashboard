import useSWR from 'swr';

import {get} from './../api';

export default function useServiceOrder(token = '', serviceCompanyId= '', start = new Date(), end = new Date()) {
  
  

    const { data: arrServiceOrder, mutate: mutateArrServiceOrder } = useSWR(['/api/serviceOrders/scheduled',token,serviceCompanyId], get('/api/serviceOrders/scheduled',{serviceCompanyId,start,end}, token))
  

  
    return { arrServiceOrder, mutateArrServiceOrder }
  }