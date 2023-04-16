import React from 'react'
import AutoComplete from '../component/AutoComplete';
import StockList from '../component/StockList';
import logo from '../assets/Black_Gold_Luxury_Royal_Crown_Logo-removebg-preview.png'

const StockOverViewPage = () => {
  return (
    <div>
      <div className='text-center '>
        <img src={logo} alt="logo" />
      </div>
      <AutoComplete />
      <StockList />
    </div>

  )
}

export default StockOverViewPage