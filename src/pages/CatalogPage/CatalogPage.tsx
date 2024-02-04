import React from 'react'
import CarsCardList from '../../components/CarsCardList/CarsCardList'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const CatalogPage: React.FC = () => {
  return (
    <div>
      <Header/>
       <CarsCardList />
       <Footer/>
    </div>
  )
}

export default CatalogPage