import React from 'react'
import CarsCardItem from '../../components/CarsCardItem/CarsCardItem'

const HomePage: React.FC = () => {
  
  return (
    <div>HomePage
      <CarsCardItem rentalCar={{
        id: 0,
        year: 0,
        make: '',
        model: '',
        type: '',
        img: '',
        description: '',
        fuelConsumption: '',
        engineSize: '',
        accessories: [],
        functionalities: [],
        rentalPrice: '',
        rentalCompany: '',
        address: '',
        rentalConditions: '',
        mileage: 0,
        limit: undefined
      }}/>
    </div>
  )
}

export default HomePage