import React, { useEffect, useState } from 'react'
import { getDeals } from '../../services/apiCalls';
import { DealCard } from '../../common/DealCard/DealCard'

const Home = () => {

  const [deals, setDeals] = useState([]);

  useEffect(() => {
    getDeals()
    .then((res) => setDeals(res))
  }, [])

  return (
    <div>
      {deals?.map((deal) => {
        return(
          <DealCard key={deal.gameID}/>
        )
      })}
    </div>
  )
}

export default Home