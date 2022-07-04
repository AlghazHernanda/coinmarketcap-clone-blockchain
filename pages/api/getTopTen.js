// 6c9f49d6-384f-4353-9b52-74c36d9e503a
export default function handler(req, res) {
    const getData = async () => {
      const response = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_BACKEND_CMC_API_KEY}`,
        {
          method: 'GET',
          headers: {
            Accept: '*/*',
          },
        },
      )
  
      const data = await response.json()
  
      res.status(200).json({ data })
    }
  
    getData()
  }