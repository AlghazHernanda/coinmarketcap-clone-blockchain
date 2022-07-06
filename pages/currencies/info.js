import Header from '../../components/header'
import solana from '../../assets/solana.png'
import Usd from '../../assets/svg/usd'
import { useEffect, useState } from 'react'

const styles = {
    activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
    tabItem: `px-2`,
    tabContainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
    info: `min-h-screen`,
    main: `text-white mx-auto max-w-screen-2xl`,
    flexStart: `flex items-start`,
    flexBetween: `flex justify-between`,
    flexBetweenCenter: `flex justify-between items-center`,
    tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
    flexCenter: `flex items-center`,
  }

const info = () => {
  const [coinName, setCoinName] = useState('')
  const [coinSymbol, setCoinSymbol] = useState('')
  const [price, setPrice] = useState('')

  return (
    <div>info</div>
  )
}

export default info