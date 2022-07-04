import { useContext, useEffect, useState, useCallback } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'

const CMCTable = () => {
    let { getTopTenCoins } = useContext(CoinMarketContext)
    let [coinData, setCoinData] = useState(null)

    useEffect(() => {
        setData()
      }, [])

    const setData = useCallback(async () => {
        try {
          let apiResponse = await getTopTenCoins()
          let filteredResponse = []
    
          //untuk mengambil koin tertinggi dan di masukan ke filteredResponse
          for (let i = 0; i < apiResponse.length; i++) {
            const element = apiResponse[i]
            if (element.cmc_rank <= 10) filteredResponse.push(element)
          }
    
          setCoinData(filteredResponse)
        } catch (e) {
          console.log(e.message)
        }
      }, [getTopTenCoins])

  return (
    <div>CmcTable</div>
  )
}

export default CMCTable