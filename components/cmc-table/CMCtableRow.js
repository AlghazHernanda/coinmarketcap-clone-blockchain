import React from 'react'
import Image from 'next/image'
import More from '../../assets/svg/more'
import Star from '../../assets/svg/star'
// import CoinNameRow from '../coinNameRow'
import Rate from './rate'
import { useRouter } from 'next/router'

const styles = {
    tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
  }
  

const CMCtableRow = (
    starNum,
    coinName,
    coinIcon,
    coinSymbol = '---',
    price = '----',
    hRate = '---',
    dRate = '---',
    hRateIsIncrement,
    dRateIsIncrement,
    marketCapValue = '---',
    volumeValue = '---',
    volumeCryptoValue = '---',
    circulatingSupply = '---',
) => {

    const graphImages = [
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
      ]


      const getRandomGraph = () => {
        const rndInt = Math.floor(Math.random() * 10) + 1
        return graphImages[rndInt]
      }

      
  return (
    <div>CMCtableRow</div>
  )
}

export default CMCtableRow