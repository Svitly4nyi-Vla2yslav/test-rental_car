interface RentalCars {
    id: number,
    year: number,
    make: string,
    model: string,
    type: string,
    img: string,
    description: string,
    fuelConsumption: string,
    engineSize: string,
    accessories: string[],
    functionalities: string[],
    rentalPrice: string,
    rentalCompany: string,
    address: string,
    rentalConditions: string,
    mileage: number,
    limit?: number,
}


interface InitialState {
    favorites?: RentalCars[];
    rentalCars: RentalCars[];
    isLoading: boolean;
    error: string | undefined;
}

export type { RentalCars, InitialState}