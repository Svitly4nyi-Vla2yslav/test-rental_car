import operationWrapper from "../helpers/operationWrapper";
import { apiService } from "../service/apiService";

interface GetCars {
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

const getAllCars = operationWrapper(
    'catalog/getAllCars',
    async ({ id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage }: GetCars) => {
        const response = await apiService({
            method: 'get',
            url: `/adverts`,
            config: {
                params: {
                    id,
                    year,
                    make,
                    model,
                    type,
                    img,
                    description,
                    fuelConsumption,
                    engineSize,
                    accessories,
                    functionalities,
                    rentalPrice,
                    rentalCompany,
                    address,
                    rentalConditions,
                    mileage,
                    limit: 12,
                },
            },
        });
        console.log(response.data)
        return response.data;
    }
);

export { getAllCars };
export type { GetCars };