import React from 'react'
import PriceList from '../components/PriceList'
import Navbar from '../components/Navbar'
import PaymentStructure from '../components/PaymentStructure'
import ItemForm from '../components/ItemForm'

const page = () => {
  return (
    <div className='contianer-lg'>
      <Navbar/>
      <div className='mt-[200px]'>
      <PriceList/>
      <PaymentStructure/>
      <ItemForm/>
      </div>
       
    </div>
  )
}

export default page